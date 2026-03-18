with open('index.html', 'r') as f:
    html = f.read()

# Find the runCode function in index.html and add escapeHtml
# Also add a fallback if Pyodide fails to load

# Add escapeHtml function before runCode
old_run = '''async function runCode() {'''

new_run = '''// HTML escape utility
function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function runCode() {'''

if old_run in html:
    html = html.replace(old_run, new_run)
    print("✅ Added escapeHtml")

# Also fix the validation ID - should be 'validation-msg' not 'validation'
html = html.replace("getElementById('validation')", "getElementById('validation-msg')")

# Add better error handling and user feedback
old_catch = '''    } catch (e) {
        // Python error
        let errorMsg = e.message || String(e);'''

new_catch = '''    } catch (e) {
        // Python error
        let errorMsg = '';
        if (e.message) {
            errorMsg = e.message;
        } else if (typeof e === 'string') {
            errorMsg = e;
        } else {
            errorMsg = JSON.stringify(e);
        }'''

if old_catch in html:
    html = html.replace(old_catch, new_catch)
    print("✅ Improved error handling")

# Add loading indicator
old_init = '''async function initPyodide() {
    if (pyodideReady) return;
    try {
        document.getElementById('output').innerHTML = '<span class="text-yellow-400">Loading Python runtime...</span>';'''

new_init = '''async function initPyodide() {
    if (pyodideReady) return;
    try {
        document.getElementById('output').innerHTML = '<span class="text-yellow-400">⏳ Loading Python runtime (first load takes ~10s)...</span>';
        // Show loading in button
        const runBtn = document.querySelector('.btn-run');
        if (runBtn) {
            runBtn.disabled = true;
            runBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';
        }'''

if old_init in html:
    html = html.replace(old_init, new_init)
    print("✅ Added loading indicator")

# Reset button after loading
old_ready = '''        pyodideReady = true;
        document.getElementById('output').innerHTML = '<span class="text-gray-500"># Python ready! Write code and click Run.</span>';'''

new_ready = '''        pyodideReady = true;
        document.getElementById('output').innerHTML = '<span class="text-green-400">✅ Python ready! Write code and click Run.</span>';
        const runBtn = document.querySelector('.btn-run');
        if (runBtn) {
            runBtn.disabled = false;
            runBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Run';
        }'''

if old_ready in html:
    html = html.replace(old_ready, new_ready)
    print("✅ Reset button after loading")

with open('index.html', 'w') as f:
    f.write(html)

print("Fixed Pyodide!")
