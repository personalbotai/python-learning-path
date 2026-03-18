import re

with open('index.html', 'r') as f:
    content = f.read()

# Remove the appended marked.js script at the end
if '<!-- Markdown Renderer -->' in content:
    content = content[:content.index('<!-- Markdown Renderer -->')]

# Add marked.js BEFORE app.js
content = content.replace(
    '<script src="app.js"></script>',
    '<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>\n    <script src="app.js"></script>'
)

# Now update app.js to use marked directly instead of override
with open('app.js', 'r') as f:
    app_content = f.read()

# Replace the loadLesson function to use marked
# Find and replace the description rendering part

old_pattern = r'`<h2 class="text-xl font-bold mb-4">\$\{lesson\.title\}</h2>\s*<div class="[^"]*">\$\{lesson\.description[^}]*\}</div>`'
new_pattern = """`<h2 class="text-xl font-bold mb-4">${lesson.title}</h2>
        <div class="prose prose-invert max-w-none text-sm leading-relaxed" id="lesson-content-${index}">
            <i class="fas fa-spinner fa-spin mr-2"></i>Loading...
        </div>`"""

# Actually, let's just add a function to load markdown and call it from loadLesson
# Add this after loadLesson function
markdown_loader = """
// Load and render markdown content
async function loadMarkdownContent(lesson, index) {
    if (!lesson.mdFile) return lesson.description || '';
    try {
        const response = await fetch(lesson.mdFile);
        const mdContent = await response.text();
        return marked.parse(mdContent);
    } catch (e) {
        console.error('Error loading markdown:', e);
        return lesson.description || 'Error loading content';
    }
}
"""

# Add markdown_loader after loadLesson definition
if 'async function loadMarkdownContent' not in app_content:
    # Find end of loadLesson function (next function declaration)
    load_lesson_start = app_content.index('function loadLesson(')
    # Find next function after loadLesson
    next_func = app_content.index('\nfunction ', load_lesson_start + 1)
    app_content = app_content[:next_func] + '\n' + markdown_loader + app_content[next_func:]

# Update loadLesson to use async/await and loadMarkdownContent
# Replace the description HTML with async loading
old_desc = """document.getElementById('current-lesson').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4">${lesson.title}</h2>
        <div class="prose prose-invert max-w-none">${lesson.description || ''}</div>
    `;"""

new_desc = """// Load content (async for markdown)
    const contentHtml = await loadMarkdownContent(lesson, index);
    document.getElementById('current-lesson').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4">${lesson.title}</h2>
        <div class="prose prose-invert max-w-none text-sm leading-relaxed">${contentHtml}</div>
    `;"""

if old_desc in app_content:
    app_content = app_content.replace(old_desc, new_desc)
else:
    # Try to find the pattern
    app_content = app_content.replace(
        "document.getElementById('current-lesson').innerHTML = `",
        "const contentHtml = await loadMarkdownContent(lesson, index);\n    document.getElementById('current-lesson').innerHTML = `"
    )
    # Replace description line
    app_content = app_content.replace(
        '<div class="prose prose-invert max-w-none">${lesson.description || \'\'}</div>',
        '<div class="prose prose-invert max-w-none text-sm leading-relaxed">${contentHtml}</div>'
    )

# Make loadLesson async
app_content = app_content.replace('function loadLesson(', 'async function loadLesson(')

with open('app.js', 'w') as f:
    f.write(app_content)

with open('index.html', 'w') as f:
    f.write(content)

print("Fixed load order!")
