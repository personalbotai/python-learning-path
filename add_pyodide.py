import re

# Read index.html
with open('index.html', 'r') as f:
    html = f.read()

# Add Pyodide before app.js
html = html.replace(
    '<script src="app.js"></script>',
    '<script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>\n    <script src="app.js"></script>'
)

# Add Pyodide init and runCode override
pyodide_code = '''
// Pyodide Python runtime
let pyodide = null;
let pyodideReady = false;

async function initPyodide() {
    if (pyodideReady) return;
    try {
        document.getElementById('output').innerHTML = '<span class="text-yellow-400">Loading Python runtime...</span>';
        pyodide = await loadPyodide();
        pyodideReady = true;
        document.getElementById('output').innerHTML = '<span class="text-gray-500"># Python ready! Write code and click Run.</span>';
    } catch (e) {
        document.getElementById('output').innerHTML = '<span class="text-red-400">Failed to load Python: ' + e.message + '</span>';
    }
}

// Override runCode for Python
async function runCode() {
    if (!pyodideReady) {
        await initPyodide();
    }
    
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    const validation = document.getElementById('validation-msg');
    
    try {
        // Capture Python print() output
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);
        
        // Run user code
        pyodide.runPython(code);
        
        // Get captured output
        const result = pyodide.runPython(`sys.stdout.getvalue()`);
        
        output.innerHTML = '<span class="text-green-400">' + escapeHtml(result) + '</span>';
        
        // Validate
        const expected = lessons[currentLesson].expectedOutput.replace(/\\\\n/g, '\\n');
        if (result.trim() === expected.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar! Output sesuai. ✅';
            progress[lessons[currentLesson].id] = true;
            localStorage.setItem('python_progress', JSON.stringify(progress));
            updateProgress();
            renderNav();
        } else {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = '<i class="fas fa-lightbulb mr-2"></i><strong>Hint:</strong> ' + lessons[currentLesson].hint;
        }
    } catch (e) {
        // Python error
        let errorMsg = e.message || String(e);
        // Clean up Pyodide error format
        errorMsg = errorMsg.replace('Pyodide has suffered a fatal error', '').trim();
        output.innerHTML = '<span class="text-red-400">❌ Error:\\n' + escapeHtml(errorMsg) + '</span>';
        validation.className = 'mt-4 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
        validation.innerHTML = '<i class="fas fa-times-circle mr-2"></i>' + escapeHtml(errorMsg.split('\\n')[0]);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initPyodide();
});
'''

# Find end of app.js script and add pyodide
html = html.replace(
    '</body>',
    pyodide_code + '\n</body>'
)

with open('index.html', 'w') as f:
    f.write(html)

print("Added Pyodide to index.html!")

# Also update app.js to remove old runCode since we override it
with open('app.js', 'r') as f:
    app_content = f.read()

# Remove the old runCode function (it will be overridden by Pyodide version)
# Comment it out instead of removing
app_content = app_content.replace(
    'function runCode() {',
    '// Overridden by Pyodide in index.html\n// function runCode() {'
)

with open('app.js', 'w') as f:
    f.write(app_content)

print("Disabled old runCode in app.js!")
