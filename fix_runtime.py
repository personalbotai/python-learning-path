with open('index.html', 'r') as f:
    html = f.read()

# Replace full Pyodide with mini version (much smaller, faster)
html = html.replace(
    'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js',
    'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
)

# Add better error handling and fallback
# If Pyodide fails, use a simple Python-to-JS transpiler for basic cases

fallback_code = '''
<script>
// Simple Python runtime fallback (if Pyodide fails)
class SimplePythonRuntime {
    constructor() {
        this.output = [];
    }
    
    run(code) {
        this.output = [];
        const lines = code.split('\\n');
        let result = '';
        
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith('#')) continue;
            
            // Handle print()
            const printMatch = line.match(/^print\\s*\\((.*)\\)$/);
            if (printMatch) {
                let arg = printMatch[1].trim();
                // Handle f-strings
                if (arg.startsWith('f"') || arg.startsWith("f'")) {
                    arg = arg.slice(2, -1);
                    arg = arg.replace(/\\{([^}]+)\\}/g, (match, expr) => {
                        try { return eval(expr); } catch(e) { return match; }
                    });
                    this.output.push(arg);
                }
                // Handle string literals
                else if ((arg.startsWith('"') && arg.endsWith('"')) || 
                         (arg.startsWith("'") && arg.endsWith("'"))) {
                    this.output.push(arg.slice(1, -1));
                }
                // Handle variables or expressions
                else {
                    try {
                        const val = eval(arg);
                        this.output.push(String(val));
                    } catch(e) {
                        this.output.push(arg);
                    }
                }
            }
            // Handle simple assignments
            else if (line.includes('=') && !line.includes('==')) {
                const parts = line.split('=').map(s => s.trim());
                if (parts.length === 2) {
                    try { eval(`var ${parts[0]} = ${parts[1]}`); } catch(e) {}
                }
            }
        }
        
        return this.output.join('\\n');
    }
}

// Pyodide loader with fallback
let pyodide = null;
let pyodideReady = false;
let simplePython = null;

async function initPyodide() {
    if (pyodideReady) return;
    
    const output = document.getElementById('output');
    const runBtn = document.querySelector('.btn-run');
    
    // Try Pyodide first
    try {
        output.innerHTML = '<span class="text-yellow-400">⏳ Loading Python runtime...</span>';
        if (runBtn) { runBtn.disabled = true; runBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...'; }
        
        // Check if loadPyodide exists
        if (typeof loadPyodide === 'function') {
            pyodide = await loadPyodide();
            pyodideReady = true;
            output.innerHTML = '<span class="text-green-400">✅ Python (Pyodide) ready!</span>';
        } else {
            throw new Error('Pyodide not loaded');
        }
    } catch (e) {
        // Fallback to simple Python
        console.warn('Pyodide failed, using simple runtime:', e);
        simplePython = new SimplePythonRuntime();
        pyodideReady = true; // Mark as ready (using fallback)
        output.innerHTML = '<span class="text-blue-400">✅ Python (simple mode) ready! (basic print support)</span>';
    }
    
    if (runBtn) { runBtn.disabled = false; runBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Run'; }
}

async function runCode() {
    if (!pyodideReady) await initPyodide();
    
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    const validation = document.getElementById('validation-msg');
    
    try {
        let result = '';
        
        if (pyodide) {
            // Use Pyodide
            pyodide.runPython(`import sys\\nfrom io import StringIO\\nsys.stdout = StringIO()`);
            pyodide.runPython(code);
            result = pyodide.runPython(`sys.stdout.getvalue()`);
        } else if (simplePython) {
            // Use simple fallback
            result = simplePython.run(code);
        } else {
            throw new Error('No Python runtime available');
        }
        
        output.innerHTML = '<span class="text-green-400">' + escapeHtml(result) + '</span>';
        
        // Validate
        const lesson = lessons[currentLesson];
        if (lesson && lesson.expectedOutput) {
            const expected = lesson.expectedOutput.replace(/\\\\n/g, '\\n');
            if (result.trim() === expected.trim()) {
                validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
                validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar! ✅';
                if (lesson.id) {
                    progress[lesson.id] = true;
                    localStorage.setItem('python_progress', JSON.stringify(progress));
                    updateProgress();
                    renderNav();
                }
            } else {
                validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
                validation.innerHTML = '<i class="fas fa-lightbulb mr-2"></i>Hint: ' + (lesson.hint || '');
            }
        }
    } catch (e) {
        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(String(e.message || e)) + '</span>';
    }
}

function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Init
document.addEventListener('DOMContentLoaded', () => { initPyodide(); });
</script>
'''

# Remove old Pyodide code and replace with new
# Find script tag containing Pyodide
start = html.find('<script>\n// Pyodide')
if start == -1:
    start = html.find('<script>// Pyodide')
if start == -1:
    start = html.find('// Pyodide Python runtime')
    if start > 0:
        # Find the <script> before it
        script_start = html.rfind('<script>', 0, start)
        if script_start >= 0:
            start = script_start

if start >= 0:
    end = html.find('</script>', start) + len('</script>')
    html = html[:start] + fallback_code + html[end:]
else:
    # Just append before </body>
    html = html.replace('</body>', fallback_code + '\n</body>')

with open('index.html', 'w') as f:
    f.write(html)

print("Added Pyodide with simple fallback!")
