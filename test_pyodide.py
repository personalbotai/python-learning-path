# Create a simple test to see what's happening
with open('index.html', 'r') as f:
    html = f.read()

# Check if Pyodide script is there
if 'pyodide.js' in html:
    print("✅ Pyodide script found in HTML")
else:
    print("❌ Pyodide script NOT found")

# Check runCode function
if 'pyodide.runPython' in html:
    print("✅ pyodide.runPython found")
else:
    print("❌ pyodide.runPython NOT found")

# Check for common issues
if 'loadPyodide' in html:
    print("✅ loadPyodide found")
else:
    print("❌ loadPyodide NOT found")

# Check output element
if 'id="output"' in html:
    print("✅ output element found")
else:
    print("❌ output element NOT found")

# Check code-editor
if 'id="code-editor"' in html:
    print("✅ code-editor found")
else:
    print("❌ code-editor NOT found")

# Check if there's a potential issue with the run button
if 'onclick="runCode()"' in html:
    print("✅ runCode onclick found")
else:
    print("❌ runCode onclick NOT found")
