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

// Ensure marked is available globally before any usage
if (typeof marked !== 'undefined') {
    window.marked = marked;
}

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

let pyodideReady = false;
let pyodide = null;

async function initMonaco() {
    require(['vs/editor/editor.main'], function () {
        // Register Python language if not already
        if (!monaco.languages.getLanguages().some(lang => lang.id === 'python')) {
            monaco.languages.register({
                id: 'python',
                extensions: ['.py'],
                aliases: ['Python', 'py'],
                mimetypes: ['text/x-python']
            });
        }

        window.monacoEditor = monaco.editor.create(document.getElementById('code-editor'), {
            value: getDefaultCode(),
            language: 'python',
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

        // Initialize Pyodide after Monaco loads
        initPyodide();
    });
}

async function initPyodide() {
    try {
        // Show loading message
        const statusDiv = document.getElementById('status-message');
        if (statusDiv) {
            statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Loading Python runtime...';
            statusDiv.classList.remove('hidden');
        }

        // Use Pyodide v0.24.1 (stable, no stackframe dependency)
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        });

        // Load only essential packages initially (lazy load others)
        await pyodide.loadPackage("numpy");
        // Pandas/matplotlib/scipy will be loaded on demand

        pyodideReady = true;

        if (statusDiv) {
            statusDiv.innerHTML = '<i class="fas fa-check-circle text-green-400 mr-2"></i> Python runtime ready';
            setTimeout(() => statusDiv.classList.add('hidden'), 2000);
        }

        console.log('Pyodide loaded and ready');
    } catch (error) {
        console.error('Failed to load Pyodide:', error);
        const statusDiv = document.getElementById('status-message');
        if (statusDiv) {
            statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i> Python runtime failed to load';
            statusDiv.classList.remove('hidden');
        }
    }
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
    // Load module definitions from modules.json (in root)
    try {
        const response = await fetch('modules.json');
        const data = await response.json();
        // Transform data to match expected structure
        Modules.push(...data.modules.map(m => ({
            id: m.module,
            title: m.title,
            lessons: m.lessons.map(l => ({
                title: l.title,
                objectives: l.objectives,
                code: null, // Will be extracted from markdown file
                quiz: null // Will be loaded from quiz data if exists
            }))
        })));

        // Load quiz data if available
        try {
            const quizResponse = await fetch('quizzes.json');
            const quizData = await quizResponse.json();
            // Attach quizzes to modules
            quizData.forEach(q => {
                const module = Modules.find(m => m.id === q.module);
                if (module) {
                    module.quiz = q;
                }
            });
        } catch (e) {
            console.log('No quizzes.json found, quizzes will be optional');
        }

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
        // Ensure marked is loaded globally
        if (typeof window.marked === 'undefined') {
            throw new Error('Markdown library (marked) is not loaded. Please check your internet connection and refresh the page.');
        }
        contentDiv.innerHTML = window.marked(markdownContent);

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
    if (!pyodideReady || !pyodide) {
        throw new Error('Python runtime is not ready. Please wait a moment and try again.');
    }

    try {
        // Redirect stdout to capture output
        let output = [];
        const originalStdout = pyodide.runPython;
        
        // Setup output capture
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
        `);

        // Run the user code
        pyodide.runPython(code);

        // Get captured output
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        const stderr = pyodide.runPython('sys.stderr.getvalue()');

        // Reset stdout/stderr
        pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
        `);

        if (stderr && stderr.trim()) {
            throw new Error(stderr.trim());
        }

        return stdout.trim() || '(no output)';
    } catch (error) {
        // Clean up on error
        try {
            pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
            `);
        } catch (e) {}
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

// Quiz Manager Class
const QuizManager = {
    currentQuiz: null,
    currentQuestion: 0,
    answers: [],
    score: 0,

    load(quizData) {
        this.currentQuiz = quizData;
        this.currentQuestion = 0;
        this.answers = [];
        this.score = 0;
        this.render();
    },

    render() {
        if (!this.currentQuiz || this.currentQuiz.questions.length === 0) {
            this.showNoQuiz();
            return;
        }

        const q = this.currentQuiz.questions[this.currentQuestion];
        const quizContainer = document.getElementById('quiz-container');
        const questionNum = this.currentQuestion + 1;
        const totalQuestions = this.currentQuiz.questions.length;

        quizContainer.innerHTML = `
            <div class="mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-sm text-gray-400">Question ${questionNum} of ${totalQuestions}</span>
                    <span class="text-sm font-bold ${this.score > 0 ? 'text-green-400' : 'text-gray-400'}">
                        Score: ${this.score}
                    </span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${(questionNum/totalQuestions)*100}%"></div>
                </div>
            </div>

            <h3 class="text-xl font-semibold mb-6 text-white">${q.question}</h3>

            <div class="space-y-3">
                ${q.options.map((opt, idx) => `
                    <button class="quiz-option w-full text-left p-4 rounded-lg border-2 transition ${
                        this.answers[this.currentQuestion] === idx
                            ? 'border-blue-500 bg-blue-900/30 text-white'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300'
                    }" data-index="${idx}">
                        <span class="font-mono text-sm mr-3">${String.fromCharCode(65+idx)}.</span>
                        ${opt}
                    </button>
                `).join('')}
            </div>

            ${q.code_snippet ? `
                <div class="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <p class="text-sm text-gray-400 mb-2">Code Example:</p>
                    <pre class="text-sm text-gray-300 overflow-x-auto"><code>${this.escapeHtml(q.code_snippet)}</code></pre>
                </div>
            ` : ''}

            <div class="mt-8 flex justify-between">
                <button id="quiz-prev-btn" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition ${this.currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}" ${this.currentQuestion === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left mr-2"></i> Previous
                </button>
                <button id="quiz-next-btn" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition">
                    Next <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        `;

        // Bind events
        quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                this.selectAnswer(idx);
            });
        });

        document.getElementById('quiz-prev-btn').addEventListener('click', () => this.prev());
        document.getElementById('quiz-next-btn').addEventListener('click', () => this.next());
    },

    selectAnswer(index) {
        this.answers[this.currentQuestion] = index;
        this.render();
    },

    prev() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.render();
        }
    },

    next() {
        if (!this.answers[this.currentQuestion]) {
            alert('Please select an answer before continuing.');
            return;
        }

        if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
            this.currentQuestion++;
            this.render();
        } else {
            this.submit();
        }
    },

    submit() {
        // Calculate score
        this.score = 0;
        this.currentQuiz.questions.forEach((q, idx) => {
            if (this.answers[idx] === q.correct_answer) {
                this.score += q.points || 1;
            }
        });

        // Show results
        const passed = this.score >= (this.currentQuiz.passing_score || this.currentQuiz.questions.length * 0.7);
        const resultModal = document.getElementById('quiz-result-modal');
        const resultContent = document.getElementById('quiz-result-content');

        resultContent.innerHTML = `
            <div class="text-center p-8">
                <div class="mb-6">
                    <i class="fas fa-trophy text-6xl ${passed ? 'text-yellow-400' : 'text-gray-500'}"></i>
                </div>
                <h2 class="text-3xl font-bold mb-2 ${passed ? 'text-green-400' : 'text-red-400'}">
                    ${passed ? 'PASSED!' : 'NEEDS MORE PRACTICE'}
                </h2>
                <p class="text-xl text-gray-300 mb-6">
                    Your Score: <span class="font-bold text-white">${this.score}</span> / ${this.currentQuiz.questions.reduce((sum, q) => sum + (q.points || 1), 0)}
                </p>
                <p class="text-gray-400 mb-8 max-w-md mx-auto">
                    ${passed
                        ? 'Great job! You have mastered this module. Ready to move on?'
                        : 'Don\'t worry! Review the lessons and try again.'}
                </p>
                <div class="flex gap-4 justify-center">
                    ${!passed ? `
                        <button onclick="QuizManager.retry()" class="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-bold transition">
                            <i class="fas fa-redo mr-2"></i> Try Again
                        </button>
                    ` : ''}
                    <button onclick="QuizManager.close()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition">
                        ${passed ? 'Continue <i class="fas fa-arrow-right ml-2"></i>' : 'Back to Module <i class="fas fa-arrow-left ml-2"></i>'}
                    </button>
                </div>
            </div>
        `;

        resultModal.classList.remove('hidden');
    },

    retry() {
        document.getElementById('quiz-result-modal').classList.add('hidden');
        this.currentQuestion = 0;
        this.answers = [];
        this.score = 0;
        this.render();
    },

    close() {
        document.getElementById('quiz-result-modal').classList.add('hidden');
        if (this.score >= (this.currentQuiz.passing_score || this.currentQuiz.questions.length * 0.7)) {
            // Mark module quiz as complete
            AppState.progress[`m${AppState.currentModule}_quiz`] = true;
            saveProgress();
            updateProgressStats();
            openNextModuleOrProject();
        } else {
            // Back to current module
            document.getElementById('quiz-viewer').classList.add('hidden');
            document.getElementById('lesson-viewer').classList.remove('hidden');
        }
    },

    showNoQuiz() {
        document.getElementById('quiz-container').innerHTML = `
            <div class="text-center p-12">
                <i class="fas fa-info-circle text-6xl text-blue-400 mb-6"></i>
                <h2 class="text-2xl font-bold mb-4">No Quiz Available</h2>
                <p class="text-gray-400 mb-8">This module doesn't have a quiz yet.</p>
                <button onclick="QuizManager.close()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition">
                    Continue <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        `;
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

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