with open('app.js', 'r') as f:
    content = f.read()

# 1. Fix renderNav to show modules with lessons
old_render = """function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = lessons.map((l, i) => `
        <button onclick="loadLesson(${i})" class="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-700 transition ${i === currentLesson ? 'lesson-active' : ''} ${progress[i] ? 'text-green-400' : 'text-gray-300'}" id="nav-${i}">
            ${l.title} ${progress[i] ? '<i class="fas fa-check ml-1"></i>' : ''}
        </button>
    `).join('');
}"""

new_render = """function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const completed = modLessons.filter(l => progress[l.id]).length;
        const isExpanded = mod.id === (Math.floor(currentLesson / 10) + 1);
        return `
            <div class="mb-3">
                <div class="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-gray-300 cursor-pointer hover:text-white rounded hover:bg-gray-700/50" onclick="toggleModule(${mod.id})">
                    <span><i class="${mod.icon} mr-2 text-blue-400"></i>${mod.title}</span>
                    <span class="text-xs text-gray-500">${completed}/${modLessons.length}</span>
                </div>
                <div id="module-${mod.id}" class="space-y-0.5 mt-1 ${isExpanded ? '' : 'hidden'}">
                    ${modLessons.map(l => {
                        const idx = lessons.indexOf(l);
                        return `<button onclick="loadLesson(${idx})" 
                            class="w-full text-left px-3 py-1.5 rounded text-xs hover:bg-gray-700 transition 
                            ${idx === currentLesson ? 'lesson-active' : ''} 
                            ${progress[l.id] ? 'text-green-400' : 'text-gray-400'}">
                            <span class="mr-1">${progress[l.id] ? '✅' : '○'}</span>${l.title}
                        </button>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    if (el) el.classList.toggle('hidden');
}"""

if old_render in content:
    content = content.replace(old_render, new_render)
    print("✅ Fixed renderNav with modules")
else:
    print("❌ renderNav pattern not found")

# 2. Fix loadLesson to set code editor
old_editor = "document.getElementById('code-editor').value = lesson.defaultCode;"
new_editor = """document.getElementById('code-editor').value = (lesson.defaultCode || '').replace(/\\\\n/g, '\\n');"""

if old_editor in content:
    content = content.replace(old_editor, new_editor)
    print("✅ Fixed code editor to set defaultCode")

# 3. Improve markdown rendering - add prose styles
old_content_div = "document.getElementById('current-lesson').innerHTML = `<h2 class=\"text-xl font-bold mb-4\">${lesson.title}</h2><div class=\"prose prose-invert max-w-none text-sm leading-relaxed\">${contentHtml}</div>`;"

new_content_div = """document.getElementById('current-lesson').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4 text-white">${lesson.title}</h2>
        <div class="prose prose-invert prose-sm max-w-none leading-relaxed
            prose-headings:text-blue-300 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
            prose-p:text-gray-300 prose-p:mb-3
            prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
            prose-ul:text-gray-300 prose-li:mb-1
            prose-strong:text-white prose-a:text-blue-400">
            ${contentHtml}
        </div>`;"""

if old_content_div in content:
    content = content.replace(old_content_div, new_content_div)
    print("✅ Improved markdown CSS styling")
else:
    # Try alternate pattern
    content = content.replace(
        '<div class="prose prose-invert max-w-none text-sm leading-relaxed">${contentHtml}</div>',
        new_content_div.split('`')[1]
    )
    print("✅ Used alternate CSS replacement")

with open('app.js', 'w') as f:
    f.write(content)
print("Done!")
