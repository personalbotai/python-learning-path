import json, os

with open('app.js', 'r') as f:
    content = f.read()

# Update renderNav for Udemy-style sidebar
new_render = """function renderNav() {
    const sidebar = document.getElementById('sidebar-content');
    const totalLessons = lessons.length;
    const completedCount = Object.keys(progress).length;
    const pct = Math.round((completedCount / totalLessons) * 100);
    
    // Update header progress
    document.getElementById('course-progress').textContent = pct + '% complete';
    document.getElementById('progress-fill').style.width = pct + '%';
    
    // Render modules as sections
    sidebar.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const completed = modLessons.filter(l => progress[l.id]).length;
        const modPct = modLessons.length > 0 ? Math.round((completed / modLessons.length) * 100) : 0;
        const isExpanded = true; // All expanded by default
        
        return `
            <div class="section" data-module="${mod.id}">
                <div class="section-header" onclick="toggleModule(${mod.id})">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="section-title"><i class="${mod.icon} mr-2 text-purple-400"></i>${mod.title}</div>
                            <div class="section-meta">${completed}/${modLessons.length} completed • ${modPct}%</div>
                        </div>
                        <i class="fas fa-chevron-down text-gray-500 text-xs transition-transform" id="chevron-${mod.id}"></i>
                    </div>
                    <div class="progress-bar mt-2"><div class="progress-fill" style="width: ${modPct}%"></div></div>
                </div>
                <div id="module-${mod.id}" class="${isExpanded ? '' : 'hidden'}">
                    ${modLessons.map((l, i) => {
                        const idx = lessons.indexOf(l);
                        const isActive = idx === currentLesson;
                        const isDone = progress[l.id];
                        return `
                            <div class="lesson-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" onclick="loadLesson(${idx})">
                                <div class="lesson-icon ${isActive ? 'playing' : ''} ${isDone ? 'completed' : ''}">
                                    ${isDone ? '<i class="fas fa-check-circle"></i>' : isActive ? '<i class="fas fa-play-circle"></i>' : '<i class="far fa-circle"></i>'}
                                </div>
                                <div class="lesson-title">${l.title}</div>
                                <div class="lesson-duration">${l.duration || '10 min'}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    const chevron = document.getElementById('chevron-' + modId);
    if (el) {
        el.classList.toggle('hidden');
        if (chevron) chevron.style.transform = el.classList.contains('hidden') ? 'rotate(-90deg)' : '';
    }
}"""

# Replace renderNav
import re
content = re.sub(r'function renderNav\(\) \{.*?^}', new_render, content, flags=re.DOTALL, count=1)

# Update loadLesson to show/hide complete button and set breadcrumb
old_load_end = "renderNav();\n}"
new_load_end = """// Update complete button
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'block';
    } else {
        completeBtn.style.display = 'block';
        completedBtn.style.display = 'none';
    }
    
    // Update breadcrumb
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    document.getElementById('breadcrumb').textContent = mod ? mod.title : '';
    
    // Update nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
    window.scrollTo(0, 0);
}"""

content = content.replace("renderNav();\n}", new_load_end)

# Add markComplete function
mark_complete = """
function markComplete() {
    const lesson = lessons[currentLesson];
    progress[lesson.id] = true;
    localStorage.setItem('python_progress', JSON.stringify(progress));
    
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    completeBtn.style.display = 'none';
    completedBtn.style.display = 'block';
    
    renderNav();
    
    // Auto-advance to next lesson
    if (currentLesson < lessons.length - 1) {
        setTimeout(() => loadLesson(currentLesson + 1), 500);
    }
}
"""

if 'function markComplete' not in content:
    # Add before updateProgress
    content = content.replace('function updateProgress', mark_complete + '\nfunction updateProgress')

with open('app.js', 'w') as f:
    f.write(content)

print("Updated app.js for Udemy-style UI!")
