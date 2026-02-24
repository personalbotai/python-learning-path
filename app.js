// Main Application Controller for Python Learning Path
// ==========================================================

// Global State
const AppState = {
    currentLanguage: 'python',
    currentModule: 0,
    currentLesson: 0,
    isQuizMode: false,
    progress: {},
    achievements: new Set()
};

// Language Configuration (will be replaced per repo)
const LanguageConfig = {
    name: 'Python',
    icon: 'fab fa-python',
    color: 'blue',
    fileExtension: '.py',
    version: '3.11+',
    officialDocs: 'https://docs.python.org/3/'
};

// Module Definitions (will be populated from lessons structure)
const Modules = [];

// ==========================================================
// Initialization
// ==========================================================

document.addEventListener('DOMContentLoaded', async () => {
    await initMonaco();
    await loadProgress();
    await loadAchievements();
    await loadModules();
    setupEventListeners();
    renderNavigation();
    updateProgressStats();
    checkFirstTime();
});

// ==========================================================
// Monaco Editor Setup
// ==========================================================

async function initMonaco() {
    require.config({
        paths: {
            'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs'
        }
    });

    require(['vs/editor/editor.main'], function () {
        window.monacoEditor = monaco.editor.create(document.getElementById('code-editor'), {
            value: getDefaultCode(),
            language: getMonacoLanguage(),
            theme: 'vs-dark',
            automaticLayout: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            fontSize: 14,
            lineNumbers: 'on',
            renderWhitespace: 'selection',
            formatOnPaste: true,
            formatOnType: true
        });
    });
}

function getMonacoLanguage() {
    const langMap = {
        'python': 'python',
        'javascript': 'javascript',
        'typescript': 'typescript',
        'java': 'java',
        'c': 'c',
        'cpp': 'cpp',
        'csharp': 'csharp',
        'php': 'php',
        'rust': 'rust',
        'ruby': 'ruby',
        'kotlin': 'kotlin',
        'swift': 'swift',
        'sql': 'sql',
        'bash': 'shell'
    };
    return langMap[AppState.currentLanguage] || 'plaintext';
}

function getDefaultCode() {
    return `# Start coding here!
# Press "Run" to execute

print("Hello, ${LanguageConfig.name}!")

# Try modifying this code
def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("World")
print(message)
`;
}

// ==========================================================
// Module & Lesson Loading
// ==========================================================

async function loadModules() {
    // Load module definitions from lessons/modules.json
    try {
        const response = await fetch('lessons/modules.json');
        const data = await response.json();
        // Transform data to match expected structure
        Modules.push(...data.modules.map(m => ({
            id: m.module,
            title: m.title,
            lessons: m.lessons.map(l => ({
                title: l.title,
                objectives: l.objectives,
                code: null // Will be extracted from markdown
            }))
        })));
    } catch (error) {
        console.error('Failed to load modules:', error);
        // Fallback: create basic module structure
        createFallbackModules();
    }
}

function createFallbackModules() {
    // This will be replaced with actual content
    for (let i = 1; i <= 10; i++) {
        Modules.push({
            id: i,
            title: `Module ${i}`,
            lessons: [],
            quiz: null,
            project: null
        });
    }
}

// ==========================================================
// Navigation
// ==========================================================

function renderNavigation() {
    const nav = document.getElementById('module-nav');
    nav.innerHTML = '';

    Modules.forEach((module, index) => {
        const isCompleted = isModuleCompleted(module.id);
        const isCurrent = module.id === AppState.currentModule;

        const item = document.createElement('div');
        item.className = `mb-2 ${isCurrent ? 'bg-gray-700 rounded' : ''}`;
        item.innerHTML = `
            <button class="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-700 rounded transition" data-module="${module.id}">
                <div class="flex items-center gap-2">
                    <span class="text-sm ${isCompleted ? 'text-green-400' : 'text-gray-400'}">
                        ${isCompleted ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}
                    </span>
                    <span class="text-sm font-medium ${isCurrent ? 'text-white' : 'text-gray-300'}">
                        ${module.title}
                    </span>
                </div>
                <i class="fas fa-chevron-right text-xs text-gray-500"></i>
            </button>
        `;
        nav.appendChild(item);
    });

    // Add click handlers
    nav.querySelectorAll('button[data-module]').forEach(btn => {
        btn.addEventListener('click', () => {
            const moduleId = parseInt(btn.dataset.module);
            openModule(moduleId);
        });
    });
}

function openModule(moduleId) {
    const module = Modules.find(m => m.id === moduleId);
    if (!module) return;

    AppState.currentModule = moduleId;
    AppState.currentLesson = 0;
    AppState.isQuizMode = false;

    renderNavigation();
    renderBreadcrumb(module.title, 'Module');
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('lesson-viewer').classList.remove('hidden');
    document.getElementById('quiz-viewer').classList.add('hidden');
    document.getElementById('project-viewer').classList.add('hidden');

    // Load first lesson
    if (module.lessons && module.lessons.length > 0) {
        loadLesson(module.lessons[0], 1, module.lessons.length);
    }
}

function renderBreadcrumb(title, type) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
        <a href="#" class="hover:text-white transition">Home</a>
        <i class="fas fa-chevron-right mx-2 text-xs"></i>
        <span class="text-white">${type}: ${title}</span>
    `;
}

// ==========================================================
// Lesson Viewer
// ==========================================================

async function loadLesson(lesson, current, total) {
    AppState.currentLesson = current;

    // Update UI
    document.getElementById('lesson-module-badge').textContent = `Module ${AppState.currentModule}`;
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-objective').textContent = lesson.objectives || '';

    // Load markdown content from file
    const lessonId = `M${AppState.currentModule.toString().padStart(2, '0')}-L${current.toString().padStart(2, '0')}`;
    try {
        const response = await fetch(`lessons/${lessonId}.md`);
        if (!response.ok) throw new Error('Lesson content not found');
        const markdownContent = await response.text();
        const contentDiv = document.getElementById('lesson-content');
        contentDiv.innerHTML = marked.parse(markdownContent);

        // Extract starter code from markdown
        const extractedCode = extractCodeFromMarkdown(markdownContent);
        if (extractedCode) {
            window.monacoEditor.setValue(extractedCode);
        } else {
            window.monacoEditor.setValue(getDefaultCode());
        }
    } catch (error) {
        console.error('Failed to load lesson content:', error);
        document.getElementById('lesson-content').innerHTML = `<p class="text-red-400">Error loading lesson content: ${error.message}</p>`;
        window.monacoEditor.setValue(getDefaultCode());
    }

    // Clear output
    document.getElementById('code-output').classList.add('hidden');
    document.getElementById('code-error').classList.add('hidden');

    // Update navigation buttons
    const module = Modules.find(m => m.id === AppState.currentModule);
    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');

    prevBtn.disabled = current <= 1;
    nextBtn.disabled = current >= module.lessons.length;

    if (current >= module.lessons.length) {
        nextBtn.innerHTML = 'Next Quiz <i class="fas fa-arrow-right ml-2"></i>';
    } else {
        nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-arrow-right ml-2"></i>';
    }

    // Update complete button
    const completeBtn = document.getElementById('mark-complete-btn');
    const isCompleted = getLessonProgress(AppState.currentModule, current);
    completeBtn.innerHTML = isCompleted
        ? '<i class="fas fa-check mr-1"></i> Completed'
        : '<i class="fas fa-check mr-1"></i> Selesai';
    completeBtn.className = isCompleted
        ? 'bg-green-800 text-white text-sm font-bold py-1 px-4 rounded cursor-default'
        : 'bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-1 px-4 rounded transition';
}

// Extract first Python code block from markdown
function extractCodeFromMarkdown(markdown) {
    const codeBlockRegex = /```python\s*([\s\S]*?)```/;
    const match = markdown.match(codeBlockRegex);
    return match ? match[1].trim() : null;
}

document.getElementById('prev-lesson-btn').addEventListener('click', () => {
    const module = Modules.find(m => m.id === AppState.currentModule);
    if (AppState.currentLesson > 1) {
        loadLesson(module.lessons[AppState.currentLesson - 2], AppState.currentLesson - 1, module.lessons.length);
    }
});

document.getElementById('next-lesson-btn').addEventListener('click', () => {
    const module = Modules.find(m => m.id === AppState.currentModule);
    if (AppState.currentLesson < module.lessons.length) {
        // Mark current as complete if not already
        markLessonComplete(AppState.currentModule, AppState.currentLesson);
        loadLesson(module.lessons[AppState.currentLesson], AppState.currentLesson + 1, module.lessons.length);
    } else {
        // All lessons done, open quiz
        openQuiz(module.quiz);
    }
});

document.getElementById('mark-complete-btn').addEventListener('click', () => {
    markLessonComplete(AppState.currentModule, AppState.currentLesson);
    const btn = document.getElementById('mark-complete-btn');
    btn.innerHTML = '<i class="fas fa-check mr-1"></i> Completed';
    btn.className = 'bg-green-800 text-white text-sm font-bold py-1 px-4 rounded cursor-default';
    updateProgressStats();
    checkAchievements();
});

// ==========================================================
// Code Execution
// ==========================================================

document.getElementById('run-code-btn').addEventListener('click', async () => {
    const code = window.monacoEditor.getValue();
    const outputDiv = document.getElementById('code-output');
    const errorDiv = document.getElementById('code-error');

    outputDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    try {
        const result = await runCode(code);
        document.getElementById('output-content').textContent = result;
        outputDiv.classList.remove('hidden');
    } catch (error) {
        document.getElementById('error-content').textContent = error.message;
        errorDiv.classList.remove('hidden');
    }
});

document.getElementById('reset-code-btn').addEventListener('click', () => {
    const lesson = Modules.find(m => m.id === AppState.currentModule).lessons[AppState.currentLesson - 1];
    if (lesson && lesson.code) {
        window.monacoEditor.setValue(lesson.code);
    } else {
        window.monacoEditor.setValue(getDefaultCode());
    }
    document.getElementById('code-output').classList.add('hidden');
    document.getElementById('code-error').classList.add('hidden');
});

async function runCode(code) {
    // This will be implemented based on the runner strategy
    // For now, simulate with a simple eval (NOT SAFE for production)
    // In production, use WebContainer or serverless function

    if (AppState.currentLanguage === 'python') {
        // Use Pyodide or WebContainer
        return await runPython(code);
    } else if (AppState.currentLanguage === 'javascript' || AppState.currentLanguage === 'typescript') {
        // Use browser eval or transpile
        return await runJavaScript(code);
    } else {
        // For other languages, need backend runner
        throw new Error(`Code execution for ${AppState.currentLanguage} not implemented yet.`);
    }
}

async function runPython(code) {
    // Simple simulation - in production use Pyodide
    const originalLog = console.log;
    let output = [];
    console.log = (...args) => output.push(args.join(' '));

    try {
        // WARNING: This is unsafe! For demo only.
        // In production: use WebContainer with Python installed
        eval(`(function() {
            ${code}
        })()`);
        console.log = originalLog;
        return output.join('\n') || '(no output)';
    } catch (error) {
        console.log = originalLog;
        throw error;
    }
}

async function runJavaScript(code) {
    const originalLog = console.log;
    let output = [];
    console.log = (...args) => output.push(args.join(' '));

    try {
        eval(code);
        console.log = originalLog;
        return output.join('\n') || '(no output)';
    } catch (error) {
        console.log = originalLog;
        throw error;
    }
}

// ==========================================================
// Quiz System
// ==========================================================

function openQuiz(quizData) {
    if (!quizData) {
        // No quiz for this module, go to next or project
        openNextModuleOrProject();
        return;
    }

    AppState.isQuizMode = true;
    document.getElementById('lesson-viewer').classList.add('hidden');
    document.getElementById('quiz-viewer').classList.remove('hidden');
    document.getElementById('project-viewer').classList.add('hidden');

    // Load quiz
    QuizManager.load(quizData);
}

function openNextModuleOrProject() {
    const currentIndex = Modules.findIndex(m => m.id === AppState.currentModule);
    const nextModule = Modules[currentIndex + 1];

    if (nextModule) {
        openModule(nextModule.id);
    } else {
        // All modules completed, show final project or completion
        showCompletionScreen();
    }
}

// ==========================================================
// Progress & Achievements
// ==========================================================

function loadProgress() {
    const saved = localStorage.getItem(`${LanguageConfig.name.toLowerCase()}_progress`);
    if (saved) {
        AppState.progress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem(`${LanguageConfig.name.toLowerCase()}_progress`, JSON.stringify(AppState.progress));
}

function getLessonProgress(moduleId, lessonNum) {
    return AppState.progress[`m${moduleId}_l${lessonNum}`] || false;
}

function markLessonComplete(moduleId, lessonNum) {
    AppState.progress[`m${moduleId}_l${lessonNum}`] = true;
    saveProgress();
    updateProgressStats();
    checkAchievements();
}

function isModuleCompleted(moduleId) {
    const module = Modules.find(m => m.id === moduleId);
    if (!module || !module.lessons) return false;

    return module.lessons.every((_, idx) => getLessonProgress(moduleId, idx + 1));
}

function updateProgressStats() {
    const totalLessons = Modules.reduce((sum, m) => sum + (m.lessons ? m.lessons.length : 0), 0);
    const completedLessons = Modules.reduce((sum, m) => {
        if (!m.lessons) return sum;
        return sum + m.lessons.filter((_, idx) => getLessonProgress(m.id, idx + 1)).length;
    }, 0);

    const completedQuizzes = Object.values(AppState.progress).filter(v => v === 'quiz').length;
    const completedProjects = Object.values(AppState.progress).filter(v => v === 'project').length;

    document.getElementById('stat-lessons').textContent = `${completedLessons}/${totalLessons}`;
    document.getElementById('stat-quizzes').textContent = `${completedQuizzes}/10`;
    document.getElementById('stat-projects').textContent = `${completedProjects}/5`;

    const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    document.getElementById('progress-percent').textContent = `${percent}%`;
}

async function loadAchievements() {
    const saved = localStorage.getItem('achievements');
    if (saved) {
        AppState.achievements = new Set(JSON.parse(saved));
    }
}

function saveAchievements() {
    localStorage.setItem('achievements', JSON.stringify([...AppState.achievements]));
}

function checkAchievements() {
    const totalCompleted = Object.values(AppState.progress).filter(v => v === true).length;

    if (totalCompleted >= 1 && !AppState.achievements.has('first_lesson')) {
        unlockAchievement('first_lesson', 'First Step', 'Complete your first lesson');
    }
    if (totalCompleted >= 10 && !AppState.achievements.has('ten_lessons')) {
        unlockAchievement('ten_lessons', 'Dedicated Learner', 'Complete 10 lessons');
    }
    if (totalCompleted >= 25 && !AppState.achievements.has('quarter_master')) {
        unlockAchievement('quarter_master', 'Quarter Master', 'Complete 25 lessons');
    }
    if (totalCompleted >= 50 && !AppState.achievements.has('half_way')) {
        unlockAchievement('half_way', 'Half Way There', 'Complete 50 lessons');
    }
}

function unlockAchievement(id, name, description) {
    AppState.achievements.add(id);
    saveAchievements();

    // Show popup
    document.getElementById('achievement-name').textContent = name;
    const popup = document.getElementById('achievement-popup');
    popup.classList.remove('translate-y-20');
    popup.classList.add('translate-y-0');

    setTimeout(() => {
        popup.classList.remove('translate-y-0');
        popup.classList.add('translate-y-20');
    }, 3000);
}

// ==========================================================
// Event Listeners
// ==========================================================

function setupEventListeners() {
    // Sidebar toggle for mobile
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('active');
    });

    // Overlay click to close sidebar
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            overlay.classList.remove('active');
        });
    }

    // Start button
    document.getElementById('start-btn').addEventListener('click', () => {
        openModule(1);
    });

    // Reset progress
    document.getElementById('reset-progress').addEventListener('click', () => {
        if (confirm('Reset all progress? This cannot be undone.')) {
            localStorage.removeItem(`${LanguageConfig.name.toLowerCase()}_progress`);
            location.reload();
        }
    });

    // Quiz buttons
    document.getElementById('quiz-prev-btn').addEventListener('click', () => QuizManager.prev());
    document.getElementById('quiz-next-btn').addEventListener('click', () => QuizManager.next());
    document.getElementById('quiz-submit-btn').addEventListener('click', () => QuizManager.submit());
    document.getElementById('quiz-close-modal').addEventListener('click', () => {
        document.getElementById('quiz-result-modal').classList.add('hidden');
        openNextModuleOrProject();
    });
}

function checkFirstTime() {
    const hasVisited = localStorage.getItem(`${LanguageConfig.name.toLowerCase()}_visited`);
    if (!hasVisited) {
        localStorage.setItem(`${LanguageConfig.name.toLowerCase()}_visited`, 'true');
        // Show welcome tour or tooltip
    }
}

// ==========================================================
// Utility Functions
// ==========================================================

function showCompletionScreen() {
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.getElementById('lesson-viewer').classList.add('hidden');
    document.getElementById('quiz-viewer').classList.add('hidden');
    document.getElementById('project-viewer').classList.add('hidden');

    const welcome = document.getElementById('welcome-screen');
    welcome.innerHTML = `
        <div class="mb-6">
            <i class="fas fa-trophy text-8xl text-yellow-400"></i>
        </div>
        <h1 class="text-4xl font-bold mb-4">🎉 Selamat! Anda Menyelesaikan Semua Modul!</h1>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
            Anda telah menyelesaikan seluruh learning path Python. 
            Sekarang saatnya menguji kemampuan Anda dengan proyek akhir.
        </p>
        <button onclick="location.reload()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            <i class="fas fa-redo mr-2"></i> Mulai Ulang
        </button>
    `;
}