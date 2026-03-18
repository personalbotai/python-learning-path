with open('app.js', 'r') as f:
    content = f.read()

# Replace loadLesson to fetch markdown from relative path
old_load = """function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    // Render markdown content if available, otherwise use description
    let contentHtml = lesson.description || '';
    if (lesson.mdContent && typeof marked !== 'undefined') {
        contentHtml = marked.parse(lesson.mdContent);
    }
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="prose prose-invert max-w-none text-sm leading-relaxed">${contentHtml}</div>`;"""

new_load = """async function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    // Show loading
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>`;
    
    // Fetch and render markdown from lessons folder
    let contentHtml = lesson.description || '';
    if (lesson.mdFile && typeof marked !== 'undefined') {
        try {
            const response = await fetch(lesson.mdFile);
            if (response.ok) {
                const mdText = await response.text();
                contentHtml = marked.parse(mdText);
            }
        } catch (e) {
            console.error('Error loading:', lesson.mdFile, e);
        }
    }
    
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="prose prose-invert max-w-none text-sm leading-relaxed">${contentHtml}</div>`;"""

if old_load in content:
    content = content.replace(old_load, new_load)
    with open('app.js', 'w') as f:
        f.write(content)
    print("✅ Updated loadLesson to fetch from lessons/ folder")
else:
    print("❌ Pattern not found")
    # Show what we're looking for
    idx = content.find('function loadLesson')
    if idx >= 0:
        print("Found loadLesson at:", idx)
        print("Content:", content[idx:idx+200])
