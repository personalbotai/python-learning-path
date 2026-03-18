with open('app.js', 'r') as f:
    content = f.read()

# Replace loadLesson to render mdContent with marked.js
old_load = """function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="prose prose-invert max-w-none">${lesson.description}</div>`;"""

new_load = """function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    // Render markdown content if available, otherwise use description
    let contentHtml = lesson.description || '';
    if (lesson.mdContent && typeof marked !== 'undefined') {
        contentHtml = marked.parse(lesson.mdContent);
    }
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="prose prose-invert max-w-none text-sm leading-relaxed">${contentHtml}</div>`;"""

if old_load in content:
    content = content.replace(old_load, new_load)
    print("✅ Updated loadLesson to use marked.js for mdContent")
else:
    print("❌ Pattern not found, trying alternate...")
    # Try to find just the description line
    content = content.replace(
        "document.getElementById('current-lesson').innerHTML = `<h2 class=\"text-xl font-bold mb-4\">${lesson.title}</h2><div class=\"prose prose-invert max-w-none\">${lesson.description}</div>`;",
        "let contentHtml = lesson.mdContent && typeof marked !== 'undefined' ? marked.parse(lesson.mdContent) : lesson.description || '';\n    document.getElementById('current-lesson').innerHTML = `<h2 class=\"text-xl font-bold mb-4\">${lesson.title}</h2><div class=\"prose prose-invert max-w-none text-sm leading-relaxed\">${contentHtml}</div>`;"
    )
    print("✅ Used alternate replacement")

with open('app.js', 'w') as f:
    f.write(content)
