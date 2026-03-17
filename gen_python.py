import json, os

with open('lesson_names.txt') as f:
    files = [l.strip() for l in f if l.strip()]

CONTENT = {
    'M01-L01': ('Instalasi Python', 'print("Python terinstall!")\nimport sys\nprint(f"Python {sys.version}")', 'Python terinstall!\nPython 3.x.x', 'Install dari python.org atau gunakan package manager.'),
    'M01-L02': ('Hello World', 'print("Hello, World!")\nprint("Selamat datang di Python!")', 'Hello, World!\nSelamat datang di Python!', 'print() = fungsi untuk mencetak output.'),
    'M01-L03': ('Variabel dan Tipe Data', 'nama = "Archon"\numur = 25\ntinggi = 175.5\naktif = True\n\nprint(f"Nama: {nama}, Umur: {umur}")\nprint(f"Tipe nama: {type(nama).__name__}")', 'Nama: Archon, Umur: 25\nTipe nama: str', 'Python = dynamic typing. Tipe: str, int, float, bool.'),
    'M01-L04': ('Operator', 'a, b = 10, 3\nprint(f"a + b = {a + b}")\nprint(f"a % b = {a % b}")\nprint(f"a ** b = {a ** b}")\nprint(f"a == b: {a == b}")', 'a + b = 13\na % b = 1\na ** b = 1000\na == b: False', 'Operator: +, -, *, /, //, %, **, ==, !=.'),
    'M02-L01': ('If/Else', 'umur = 20\nif umur >= 18:\n    print("Dewasa")\nelif umur >= 13:\n    print("Remaja")\nelse:\n    print("Anak-anak")', 'Dewasa', 'Indentasi penting! Gunakan 4 spasi.'),
    'M02-L02': ('For Loop', 'buah = ["apel", "jeruk", "mangga"]\nfor item in buah:\n    print(item)\n\nfor i in range(3):\n    print(f"i={i}")', 'apel\njeruk\nmangga\ni=0\ni=1\ni=2', 'for item in iterable: ... range() untuk angka.'),
    'M02-L03': ('While Loop', 'count = 0\nwhile count < 3:\n    print(f"count={count}")\n    count += 1', 'count=0\ncount=1\ncount=2', 'while condition: ... Jangan lupa update variable!'),
    'M02-L04': ('Match-Case (Python 3.10+)', 'status = 200\nmatch status:\n    case 200:\n        print("OK")\n    case 404:\n        print("Not Found")\n    case _:\n        print("Unknown")', 'OK', 'match-case = switch-case di Python 3.10+.'),
    'M03-L01': ('List', 'buah = ["apel", "jeruk", "mangga"]\nbuah.append("pisang")\nprint(buah)\nprint(buah[0])\nprint(len(buah))', '["apel", "jeruk", "mangga", "pisang"]\napel\n4', 'List = mutable, ordered. Method: append, pop, sort.'),
    'M03-L02': ('Tuple', 'koordinat = (10, 20)\nx, y = koordinat  # unpacking\nprint(f"x={x}, y={y}")\nprint(f"Length: {len(koordinat)}")', 'x=10, y=20\nLength: 2', 'Tuple = immutable, ordered. Gunakan untuk data tetap.'),
    'M03-L03': ('Dictionary', 'user = {"nama": "Archon", "umur": 25}\nprint(user["nama"])\nuser["email"] = "a@mail.com"\nprint(user.get("phone", "N/A"))\nprint(user.keys())', 'Archon\nN/A\ndict_keys(["nama", "umur", "email"])', 'Dict = key-value pairs. .get() untuk safe access.'),
    'M03-L04': ('Set', 'a = {1, 2, 3, 3, 3}\nb = {2, 3, 4}\nprint(a)  # {1, 2, 3}\nprint(a | b)  # union\nprint(a & b)  # intersection\nprint(a - b)  # difference', '{1, 2, 3}\n{1, 2, 3, 4}\n{2, 3}\n{1}', 'Set = unique, unordered. | = union, & = intersection.'),
    'M04-L01': ('Function Dasar', 'def sapa(nama):\n    return f"Halo, {nama}!"\n\nprint(sapa("Archon"))\n\ndef tambah(a, b=0):\n    return a + b\n\nprint(tambah(3, 5))\nprint(tambah(3))', 'Halo, Archon!\n8\n3', 'def function(params): ... Default value = b=0.'),
    'M04-L02': ('Lambda dan Higher-Order', 'kuadrat = lambda x: x ** 2\nprint(kuadrat(5))\n\nangka = [1, 2, 3, 4, 5]\nprint(list(map(lambda x: x*2, angka)))\nprint(list(filter(lambda x: x > 2, angka)))', '25\n[2, 4, 6, 8, 10]\n[3, 4, 5]', 'lambda = anonymous function. map/filter = HOF.'),
    'M04-L03': ('List Comprehension', 'kuadrat = [x**2 for x in range(5)]\nprint(kuadrat)\n\ngenap = [x for x in range(10) if x % 2 == 0]\nprint(genap)\n\nmatrix = [[i*j for j in range(3)] for i in range(3)]\nprint(matrix)', '[0, 1, 4, 9, 16]\n[0, 2, 4, 6, 8]\n[[0, 0, 0], [0, 1, 2], [0, 2, 4]]', '[expr for item in iterable if condition].'),
    'M05-L01': ('Class Dasar', 'class User:\n    def __init__(self, nama):\n        self.nama = nama\n    \n    def sapa(self):\n        return f"Halo, {self.nama}!"\n\nu = User("Archon")\nprint(u.sapa())', 'Halo, Archon!', 'class = blueprint. __init__ = constructor. self = this.'),
    'M05-L02': ('Inheritance', 'class Animal:\n    def __init__(self, nama):\n        self.nama = nama\n    def speak(self):\n        return f"{self.nama} bersuara"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.nama} menggonggong!"\n\nprint(Dog("Buddy").speak())', 'Buddy menggonggong!', 'class Child(Parent): ... = inheritance.'),
}

lessons = []
for i, f in enumerate(files, 1):
    if f in CONTENT:
        title, code, output, hint = CONTENT[f]
    else:
        parts = f.split('-')
        title = f"Lesson {f}"
        code = f'print("Belajar {title} di Python!")'
        output = f'Belajar {title} di Python!'
        hint = f'Pelajari {title.lower()}.'
    
    lessons.append({
        "id": i,
        "title": f"{i}. {title}",
        "description": f"<p><strong>{title}</strong> adalah konsep penting dalam Python.</p>",
        "defaultCode": code,
        "expectedOutput": output,
        "hint": hint,
        "quiz": {
            "question": f"Apa yang dipelajari di {title}?",
            "options": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
            "answer": 0
        }
    })

with open('app.js', 'w', encoding='utf-8') as out:
    out.write('// Python Learning Path - Application Logic\n')
    out.write('const lessons = ')
    out.write(json.dumps(lessons, indent=4, ensure_ascii=False))
    out.write(';\n\n')
    out.write("""// State
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('python_progress') || '{}');

document.addEventListener('DOMContentLoaded', () => { renderNav(); loadLesson(0); updateProgress(); });

function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = lessons.map((l, i) => `
        <button onclick="loadLesson(${i})" class="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-700 transition ${i === currentLesson ? 'lesson-active' : ''} ${progress[i] ? 'text-green-400' : 'text-gray-300'}" id="nav-${i}">
            ${l.title} ${progress[i] ? '<i class="fas fa-check ml-1"></i>' : ''}
        </button>
    `).join('');
}

function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="prose prose-invert max-w-none">${lesson.description}</div>`;
    document.getElementById('code-editor').value = lesson.defaultCode;
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}" class="text-blue-500"><span>${opt}</span></label>`).join('')}</div>`;
    } else { document.getElementById('quiz-section').classList.add('hidden'); }
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    renderNav();
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('terminal-output');
    const validation = document.getElementById('validation-msg');
    let logs = [];
    const originalLog = console.log;
    console.log = (...args) => { logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')); };
    try {
        eval(code);
        const result = logs.join('\\n');
        output.innerHTML = `<span class="text-green-400">${escapeHtml(result)}</span>`;
        const expected = lessons[currentLesson].expectedOutput;
        if (result.trim() === expected.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar! Output sesuai.';
            progress[currentLesson] = true;
            localStorage.setItem('python_progress', JSON.stringify(progress));
            updateProgress(); renderNav();
        } else {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = `<i class="fas fa-lightbulb mr-2"></i>Hint: ${lessons[currentLesson].hint}`;
        }
    } catch (e) {
        output.innerHTML = `<span class="text-red-400">Error: ${escapeHtml(e.message)}</span>`;
        validation.className = 'mt-4 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
        validation.innerHTML = `<i class="fas fa-times-circle mr-2"></i>${e.message}`;
    }
    console.log = originalLog;
}

function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    const msg = document.createElement('div');
    msg.className = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300' : 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
    msg.innerHTML = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? '<i class="fas fa-check-circle mr-2"></i>Benar!' : '<i class="fas fa-times-circle mr-2"></i>Salah!';
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}
function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }
function updateProgress() { const done = Object.keys(progress).length; const pct = Math.round((done / lessons.length) * 100); document.getElementById('progress-text').textContent = pct + '%'; document.getElementById('progress-bar').style.width = pct + '%'; }
function resetProgress() { if (!confirm('Reset semua progress?')) return; progress = {}; localStorage.removeItem('python_progress'); renderNav(); updateProgress(); }
function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
""")

print(f"Generated {len(lessons)} Python lessons!")
