#!/usr/bin/env python3
"""
Generator untuk membuat semua lesson files dari modules.json
Menggunakan template standar untuk konsistensi.
"""

import json
import os
from pathlib import Path

# Path definitions
BASE_DIR = Path(__file__).parent
MODULES_JSON = BASE_DIR / "modules.json"
TEMPLATE_FILE = BASE_DIR / "templates" / "lesson-template.md"
OUTPUT_DIR = BASE_DIR / "lessons"

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Load template
with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
    template = f.read()

# Load modules data
with open(MODULES_JSON, 'r', encoding='utf-8') as f:
    data = json.load(f)
    modules = data['modules']

# Generate lessons
total_generated = 0
for module in modules:
    module_num = module['module']
    module_title = module['title']
    
    for lesson in module['lessons']:
        lesson_num = lesson['lesson']
        lesson_title = lesson['title']
        lesson_objectives = lesson['objectives']
        
        # Format file name: M{module}-L{lesson}.md
        filename = f"M{module_num:02d}-L{lesson_num:02d}.md"
        filepath = OUTPUT_DIR / filename
        
        # Format content from template
        content = template.format(
            module_number=module_num,
            module_title=module_title,
            lesson_number=lesson_num,
            lesson_title=lesson_title,
            lesson_objectives=lesson_objectives
        )
        
        # Write file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        total_generated += 1
        print(f"✓ Generated: {filename} - {lesson_title}")

print(f"\n✅ Successfully generated {total_generated} lesson files in '{OUTPUT_DIR}'")
