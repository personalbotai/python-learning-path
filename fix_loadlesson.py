import re

with open('app.js', 'r') as f:
    content = f.read()

# Replace loadMarkdownContent to use embedded content instead of fetch
old_func = """async function loadMarkdownContent(lesson, index) {
    if (!lesson.mdFile) return lesson.description || '';
    try {
        const response = await fetch(lesson.mdFile);
        const mdContent = await response.text();
        return marked.parse(mdContent);
    } catch (e) {
        console.error('Error loading markdown:', e);
        return lesson.description || 'Error loading content';
    }
}"""

new_func = """function loadMarkdownContent(lesson, index) {
    if (lesson.mdContent) {
        return marked.parse(lesson.mdContent);
    }
    return lesson.description || '<p>Content not available</p>';
}"""

if old_func in content:
    content = content.replace(old_func, new_func)
else:
    # Add new function if old not found
    new_func_insert = """
// Render markdown content from embedded mdContent
function loadMarkdownContent(lesson, index) {
    if (lesson.mdContent) {
        return marked.parse(lesson.mdContent);
    }
    return lesson.description || '<p>Content not available</p>';
}
"""
    # Insert before loadLesson
    load_lesson_pos = content.index('async function loadLesson')
    content = content[:load_lesson_pos] + new_func_insert + '\n' + content[load_lesson_pos:]

# Make loadLesson use sync loadMarkdownContent (remove await if needed)
content = content.replace('const contentHtml = await loadMarkdownContent', 'const contentHtml = loadMarkdownContent')
content = content.replace('async function loadLesson', 'function loadLesson')

with open('app.js', 'w') as f:
    f.write(content)

print("Fixed loadLesson to use embedded content!")
