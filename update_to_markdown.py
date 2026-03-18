import json, os

# Read app.js
with open('app.js', 'r') as f:
    lines = f.readlines()

# Find lessons start
for i, line in enumerate(lines):
    if 'const lessons = [' in line:
        lessons_start = i
        break

content_from = ''.join(lines[lessons_start:])
start_idx = content_from.index('const lessons = ') + len('const lessons = ')

# Find end of array
bc = 0
end_idx = start_idx
for j in range(start_idx, len(content_from)):
    if content_from[j] == '[': bc += 1
    elif content_from[j] == ']': bc -= 1
    if bc == 0:
        end_idx = j + 1
        break

lessons = json.loads(content_from[start_idx:end_idx])
print(f"Found {len(lessons)} lessons")

# Get markdown files
md_files = sorted([f for f in os.listdir('lessons') if f.endswith('.md')])

# Update: replace description with mdFile reference, fetch from GitHub raw
REPO_BASE = "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons"

for i, lesson in enumerate(lessons):
    if i < len(md_files):
        md_file = md_files[i]
        lesson['mdFile'] = f"{REPO_BASE}/{md_file}"
        # Keep short description as fallback
        lesson['description'] = f"<p>Loading {md_file}...</p>"

new_lessons = json.dumps(lessons, indent=4, ensure_ascii=False)
new_content = ''.join(lines[:lessons_start]) + 'const lessons = ' + new_lessons + content_from[end_idx:]

with open('app.js', 'w') as f:
    f.write(new_content)

print("Updated lessons to use markdown files!")
