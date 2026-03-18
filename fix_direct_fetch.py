import json, os

# Read app.js
with open('app.js', 'r') as f:
    content = f.read()

# Find lessons array
start_marker = 'const lessons = '
start = content.index(start_marker) + len(start_marker)
bc = 0
end = start
for j in range(start, len(content)):
    if content[j] == '[': bc += 1
    elif content[j] == ']': bc -= 1
    if bc == 0:
        end = j + 1
        break

lessons = json.loads(content[start:end])

# Remove mdContent, add mdFile with relative path
md_files = sorted([f for f in os.listdir('lessons') if f.endswith('.md')])

for i, lesson in enumerate(lessons):
    # Remove mdContent (too big)
    if 'mdContent' in lesson:
        del lesson['mdContent']
    # Add relative path to markdown file
    if i < len(md_files):
        lesson['mdFile'] = f'lessons/{md_files[i]}'

# Write back
new_lessons = json.dumps(lessons, indent=4, ensure_ascii=False)
new_content = content[:start] + new_lessons + content[end:]

with open('app.js', 'w') as f:
    f.write(new_content)

print(f"Updated {len(lessons)} lessons with relative mdFile paths")
