// Python Learning Path
const MODULES = [
    {
        "id": 1,
        "title": "Pengenalan Python",
        "icon": "fas fa-play-circle"
    },
    {
        "id": 2,
        "title": "Kontrol Alur",
        "icon": "fas fa-code-branch"
    },
    {
        "id": 3,
        "title": "Struktur Data",
        "icon": "fas fa-database"
    },
    {
        "id": 4,
        "title": "Fungsi",
        "icon": "fas fa-cube"
    },
    {
        "id": 5,
        "title": "OOP",
        "icon": "fas fa-object-group"
    },
    {
        "id": 6,
        "title": "Lanjutan",
        "icon": "fas fa-rocket"
    }
];

const lessons = [
    {
        "id": 1,
        "title": "1. Instalasi Python",
        "description": "<p><strong>Installing Python and Setting Up Development Environment</strong></p><h4>🎯 Tujuan:</h4><p>Install Python 3.11+, configure IDE (VS Code/PyCharm), understand virtual environments with venv and pip.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython adalah bahasa pemrograman yang perlu diinstal di sistem kita sebelum bisa digunakan. Versi terbaru saat ini adalah Python 3.11 atau lebih. Proses instalasi melibatkan download dari python.org dan memastikan Python ditambahkan ke PATH environment variable. Setelah instalasi, kita bisa mengakses Python melalui terminal dengan perintah <code>python</code> atau <code>python3</code>.</p><p>Virtual environment adalah cara untuk mengisolasi dependencies proyek Python. Setiap pro</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L02.md",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L01.md",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L04.md",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L03.md",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L02.md",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L01.md"
        "defaultCode": "print(\"Python terinstall!\")\nimport sys\nprint(f\"Python {sys.version}\")",
        "expectedOutput": "Python terinstall!\nPython 3.x.x",
        "hint": "Install dari python.org atau gunakan package manager.",
        "quiz": {
            "question": "Apa yang dipelajari di Instalasi Python?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 1,
        "module": "Pengenalan Python"
    },
    {
        "id": 2,
        "title": "2. Hello World",
        "description": "<p><strong>First Steps: Hello World and Basic Syntax</strong></p><h4>🎯 Tujuan:</h4><p>Write your first Python script, understand indentation rules, comments, and basic program structure.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython menggunakan indentation (spasi atau tab) untuk menentukan blok kode, bukan kurung kurawal seperti bahasa lain. Standar PEP 8 merekomendasikan 4 spasi per level indentasi. Indentation yang konsisten sangat penting karena akan menyebabkan error jika tidak sesuai.</p><p>Komentar di Python dimulai dengan <code>#</code> dan berlaku sampai akhir baris. Komentar berguna untuk menjelaskan kode kepada pembaca manusia. Python tidak memiliki sintaks untuk komentar multi-baris sepert</p>",
        "defaultCode": "print(\"Hello, World!\")\nprint(\"Selamat datang di Python!\")",
        "expectedOutput": "Hello, World!\nSelamat datang di Python!",
        "hint": "print() = fungsi untuk mencetak output.",
        "quiz": {
            "question": "Apa yang dipelajari di Hello World?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 1,
        "module": "Pengenalan Python"
    },
    {
        "id": 3,
        "title": "3. Variabel dan Tipe Data",
        "description": "<p><strong>Variables, Data Types, and Type System</strong></p><h4>🎯 Tujuan:</h4><p>Learn about dynamic typing, basic types (int, float, str, bool), type conversion, and type hints introduction.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython menggunakan dynamic typing, artinya tipe data variabel ditentukan secara otomatis berdasarkan nilai yang diberikan, tanpa deklarasi eksplisit. Tipe data dasar di Python meliputi:\n- <code>int</code>: bilangan bulat (contoh: 42, -10)\n- <code>float</code>: bilangan desimal (contoh: 3.14, -0.5)\n- <code>str</code>: teks/string (contoh: \"hello\", 'world')\n- <code>bool</code>: boolean True atau False</p><p>Type conversion dapat dilakukan dengan fungsi seperti <code>int()</code>, </p>",
        "defaultCode": "nama = \"Archon\"\numur = 25\ntinggi = 175.5\naktif = True\n\nprint(f\"Nama: {nama}, Umur: {umur}\")\nprint(f\"Tipe nama: {type(nama).__name__}\")",
        "expectedOutput": "Nama: Archon, Umur: 25\nTipe nama: str",
        "hint": "Python = dynamic typing. Tipe: str, int, float, bool.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel dan Tipe Data?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 1,
        "module": "Pengenalan Python"
    },
    {
        "id": 4,
        "title": "4. Operator",
        "description": "<p><strong>Basic Input/Output and String Formatting</strong></p><h4>🎯 Tujuan:</h4><p>Use print() and input(), format strings with f-strings, .format(), and % operator.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nFungsi <code>print()</code> digunakan untuk menampilkan output ke konsol. Bisa menerima beberapa argumen dan secara otomatis menambahkan spasi di antara mereka. <code>input()</code> digunakan untuk menerima input dari pengguna, akan selalu mengembalikan string walaupun pengguna mengetik angka.</p><p>String formatting memungkinkan kita menyisipkan nilai ke dalam string. Ada beberapa cara:\n- f-strings (Python 3.6+): <code>f\"Nama: {name}, Umur: {age}\"</code>\n- .format(): <code>\"Nam</p>",
        "defaultCode": "a, b = 10, 3\nprint(f\"a + b = {a + b}\")\nprint(f\"a % b = {a % b}\")\nprint(f\"a ** b = {a ** b}\")\nprint(f\"a == b: {a == b}\")",
        "expectedOutput": "a + b = 13\na % b = 1\na ** b = 1000\na == b: False",
        "hint": "Operator: +, -, *, /, //, %, **, ==, !=.",
        "quiz": {
            "question": "Apa yang dipelajari di Operator?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 1,
        "module": "Pengenalan Python"
    },
    {
        "id": 5,
        "title": "5. If/Else",
        "description": "<p><strong>Conditional Statements: if, elif, else</strong></p><h4>🎯 Tujuan:</h4><p>Master branching logic, comparison operators, and nested conditionals.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nStatement <code>if</code> digunakan untuk eksekusi bersyarat. Sintaksnya:\n``<code>python\nif kondisi:\n    # kode jika True\nelif kondisi_lain:\n    # kode jika True\nelse:\n    # kode jika semua False\n</code>`<code>\n</code>elif<code> opsional, bisa banyak. </code>else<code> juga opsional. Kondisi berupa expression yang dievaluasi ke boolean. Python menggunakan indentasi untuk blok.</p><p>Operator perbandingan: </code>==<code>, </code>!=<code>, </code><<code>, </code>><code>, </code><</p>",
        "defaultCode": "umur = 20\nif umur >= 18:\n    print(\"Dewasa\")\nelif umur >= 13:\n    print(\"Remaja\")\nelse:\n    print(\"Anak-anak\")",
        "expectedOutput": "Dewasa",
        "hint": "Indentasi penting! Gunakan 4 spasi.",
        "quiz": {
            "question": "Apa yang dipelajari di If/Else?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 2,
        "module": "Kontrol Alur"
    },
    {
        "id": 6,
        "title": "6. For Loop",
        "description": "<p><strong>Loops: while and for</strong></p><h4>🎯 Tujuan:</h4><p>Use while loops and for loops, understand range(), and loop control (break, continue, else).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nLoop digunakan untuk mengulang eksekusi kode. Python memiliki dua jenis loop utama:</p><p><strong>while loop</strong>: Mengulang selama kondisi bernilai True.\n``<code>python\nwhile kondisi:\n    # kode di sini diulang\n</code>`<code></p><p><strong>for loop</strong>: Mengulang untuk setiap elemen dalam iterable (list, tuple, string, range, dll).\n</code>`<code>python\nfor item in iterable:\n    # kode di sini diulang untuk setiap item\n</code>`<code></p><p><strong>range()</strong>: Fung</p>",
        "defaultCode": "buah = [\"apel\", \"jeruk\", \"mangga\"]\nfor item in buah:\n    print(item)\n\nfor i in range(3):\n    print(f\"i={i}\")",
        "expectedOutput": "apel\njeruk\nmangga\ni=0\ni=1\ni=2",
        "hint": "for item in iterable: ... range() untuk angka.",
        "quiz": {
            "question": "Apa yang dipelajari di For Loop?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 2,
        "module": "Kontrol Alur"
    },
    {
        "id": 7,
        "title": "7. While Loop",
        "description": "<p><strong>Logical Operators and Boolean Expressions</strong></p><h4>🎯 Tujuan:</h4><p>Combine conditions with and, or, not; understand truthiness and operator precedence.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nLogical operators digunakan untuk menggabungkan atau membalikkan kondisi boolean:</p><p>- <code>and</code>: True jika kedua operand True\n- <code>or</code>: True jika salah satu operand True\n- <code>not</code>: membalikkan nilai boolean</p><p><strong>Truthiness</strong>: Nilai-nilai berikut dianggap False dalam konteks boolean:\n- <code>False</code>, <code>None</code>\n- Angka nol: <code>0</code>, <code>0.0</code>\n- Sequence kosong: <code>\"\"</code>, <code>\"\"</code>, <code>[]</code></p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L03.md"
        "defaultCode": "count = 0\nwhile count < 3:\n    print(f\"count={count}\")\n    count += 1",
        "expectedOutput": "count=0\ncount=1\ncount=2",
        "hint": "while condition: ... Jangan lupa update variable!",
        "quiz": {
            "question": "Apa yang dipelajari di While Loop?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 2,
        "module": "Kontrol Alur"
    },
    {
        "id": 8,
        "title": "8. Match-Case (Python 3.10+)",
        "description": "<p><strong>Match-Case Statements (Python 3.10+)</strong></p><h4>🎯 Tujuan:</h4><p>Use structural pattern matching for complex conditional logic.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nMatch-case (structural pattern matching) diperkenalkan di Python 3.10. Mirip switch-case di bahasa lain, tapi lebih powerful karena bisa match berdasarkan struktur data, tidak hanya nilai.</p><p>Sintaks:\n``<code>python\nmatch subject:\n    case pattern1:\n        # kode\n    case pattern2 if guard:\n        # kode dengan kondisi (guard)\n    case _:\n        # default (catch-all)\n</code>``</p><p>### Pattern Matching\n- <strong>Literal patterns</strong>: match nilai literal (angka, strin</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L04.md"
        "defaultCode": "status = 200\nmatch status:\n    case 200:\n        print(\"OK\")\n    case 404:\n        print(\"Not Found\")\n    case _:\n        print(\"Unknown\")",
        "expectedOutput": "OK",
        "hint": "match-case = switch-case di Python 3.10+.",
        "quiz": {
            "question": "Apa yang dipelajari di Match-Case (Python 3.10+)?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 2,
        "module": "Kontrol Alur"
    },
    {
        "id": 9,
        "title": "9. List",
        "description": "<p><strong>Lists: Creation, Indexing, and Basic Operations</strong></p><h4>🎯 Tujuan:</h4><p>Create lists, access elements, slicing, common methods (append, extend, insert, remove, pop).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nList adalah mutable sequence yang dapat berisi elemen dengan tipe berbeda.</p><p><strong>Creating Lists</strong>:\n- Literal: <code>my_list = [1, 2, 3]</code>\n- Constructor: <code>my_list = list()</code> atau <code>list(iterable)</code>\n- Empty list: <code>[]</code> atau <code>list()</code></p><p><strong>Indexing & Slicing</strong>:\n- Indexing: <code>list[i]</code> (negatif: -1 terakhir)\n- Slicing: <code>list[start:stop:step]</code> (stop exclusive)\n- Out of range: IndexError</p></p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L01.md"
        "defaultCode": "buah = [\"apel\", \"jeruk\", \"mangga\"]\nbuah.append(\"pisang\")\nprint(buah)\nprint(buah[0])\nprint(len(buah))",
        "expectedOutput": "[\"apel\", \"jeruk\", \"mangga\", \"pisang\"]\napel\n4",
        "hint": "List = mutable, ordered. Method: append, pop, sort.",
        "quiz": {
            "question": "Apa yang dipelajari di List?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 3,
        "module": "Struktur Data"
    },
    {
        "id": 10,
        "title": "10. Tuple",
        "description": "<p><strong>List Comprehensions and Advanced Manipulation</strong></p><h4>🎯 Tujuan:</h4><p>Write concise list comprehensions, filter, map, and sort lists.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nList comprehension adalah cara elegan untuk membuat list baru dari iterable dengan ekspresi.</p><p><strong>Syntax</strong>:\n``<code>python\n[expression for item in iterable]\n[expression for item in iterable if condition]\n[expression for item1 in iterable1 for item2 in iterable2]  # nested loops\n</code>`<code></p><p><strong>Equivalent with map/filter</strong>:\n- </code>[f(x) for x in iterable]<code> ≈ </code>list(map(f, iterable))<code>\n- </code>[x for x in iterable if cond(x)]<co</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L02.md"
        "defaultCode": "koordinat = (10, 20)\nx, y = koordinat  # unpacking\nprint(f\"x={x}, y={y}\")\nprint(f\"Length: {len(koordinat)}\")",
        "expectedOutput": "x=10, y=20\nLength: 2",
        "hint": "Tuple = immutable, ordered. Gunakan untuk data tetap.",
        "quiz": {
            "question": "Apa yang dipelajari di Tuple?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 3,
        "module": "Struktur Data"
    },
    {
        "id": 11,
        "title": "11. Dictionary",
        "description": "<p><strong>Tuples: Immutable Sequences</strong></p><h4>🎯 Tujuan:</h4><p>Understand tuple immutability, packing/unpacking, and when to use tuples vs lists.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nTuple adalah immutable sequence yang一旦 dibuat, elemennya tidak bisa diubah (tidak bisa tambah/hapus/ubah).</p><p><strong>Creating Tuples</strong>:\n- <code>t = (1, 2, 3)</code>\n- <code>t = tuple(iterable)</code>\n- Single element tuple: <code>(1,)</code> (perlu koma)\n- Empty tuple: <code>()</code></p><p><strong>Tuple Packing & Unpacking</strong>:\n- Packing: <code>t = 1, 2, 3</code> (tanpa parentheses)\n- Unpacking: <code>a, b, c = t</code>\n- Extended unpacking: <code>a, *rest, b = </p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L03.md"
        "defaultCode": "user = {\"nama\": \"Archon\", \"umur\": 25}\nprint(user[\"nama\"])\nuser[\"email\"] = \"a@mail.com\"\nprint(user.get(\"phone\", \"N/A\"))\nprint(user.keys())",
        "expectedOutput": "Archon\nN/A\ndict_keys([\"nama\", \"umur\", \"email\"])",
        "hint": "Dict = key-value pairs. .get() untuk safe access.",
        "quiz": {
            "question": "Apa yang dipelajari di Dictionary?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 3,
        "module": "Struktur Data"
    },
    {
        "id": 12,
        "title": "12. Set",
        "description": "<p><strong>Dictionaries: Key-Value Mappings</strong></p><h4>🎯 Tujuan:</h4><p>Create dictionaries, access values, iterate over keys/values/items, and common methods.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nDictionary adalah mapping type yang menyimpan data dalam pasangan key-value. Key harus hashable (immutable) dan unik; value bisa apa pun.</p><p><strong>Creating Dictionaries</strong>:\n- Literal: <code>d = {'a': 1, 'b': 2}</code>\n- Constructor: <code>d = dict(a=1, b=2)</code> atau <code>dict([('a',1), ('b',2)])</code>\n- Empty dict: <code>{}</code> atau <code>dict()</code></p><p><strong>Accessing Values</strong>:\n- <code>d[key]</code>: mengembalikan value, KeyError jika key tidak </p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L04.md"
        "defaultCode": "a = {1, 2, 3, 3, 3}\nb = {2, 3, 4}\nprint(a)  # {1, 2, 3}\nprint(a | b)  # union\nprint(a & b)  # intersection\nprint(a - b)  # difference",
        "expectedOutput": "{1, 2, 3}\n{1, 2, 3, 4}\n{2, 3}\n{1}",
        "hint": "Set = unique, unordered. | = union, & = intersection.",
        "quiz": {
            "question": "Apa yang dipelajari di Set?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 3,
        "module": "Struktur Data"
    },
    {
        "id": 13,
        "title": "13. Lesson M03-L05",
        "description": "<p><strong>Dictionary Comprehensions and Dict Methods</strong></p><h4>🎯 Tujuan:</h4><p>Build dictionaries with comprehensions, use get(), setdefault(), update(), and understand defaultdict.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Dictionary Comprehension</strong>: Mirip list comprehension tapi menghasilkan dictionary.</p><p>Syntax:\n``<code>python\n{key_expr: value_expr for item in iterable}\n{key_expr: value_expr for item in iterable if condition}\n</code>`<code></p><p><strong>Common Dict Methods</strong>:\n- </code>get(key, default=None)<code>: safe access tanpa KeyError\n- </code>setdefault(key, default)<code>: get value, atau set default jika tidak ada\n- </code>update(other)<code>: merge dictionary</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L05.md"
        "defaultCode": "print(\"Belajar Lesson M03-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M03-L05 di Python!",
        "hint": "Pelajari lesson m03-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M03-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 4,
        "module": "Fungsi"
    },
    {
        "id": 14,
        "title": "14. Lesson M03-L06",
        "description": "<p><strong>Sets: Unordered Unique Collections</strong></p><h4>🎯 Tujuan:</h4><p>Create sets, perform set operations (union, intersection, difference), and understand set comprehensions.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nSet adalah unordered collection dari unique elements (tidak ada duplikat). Set mutable (bisa tambah/hapus), tapi elemennya harus hashable (immutable).</p><p><strong>Creating Sets</strong>:\n- <code>s = {1, 2, 3}</code> (literal)\n- <code>s = set(iterable)</code> (constructor)\n- Empty set: <code>set()</code> (bukan <code>{}</code> yang berarti dict)\n- <code>frozenset</code> adalah immutable set</p><p><strong>Set Operations</strong> (binary operators):\n- Union: <code>s1 | s2</code> </p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L06.md"
        "defaultCode": "print(\"Belajar Lesson M03-L06 di Python!\")",
        "expectedOutput": "Belajar Lesson M03-L06 di Python!",
        "hint": "Pelajari lesson m03-l06.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M03-L06?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 4,
        "module": "Fungsi"
    },
    {
        "id": 15,
        "title": "15. Function Dasar",
        "description": "<p><strong>Defining and Calling Functions</strong></p><h4>🎯 Tujuan:</h4><p>Write functions with def, understand parameters and return values, scope rules (LEGB).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nFunction adalah blok kode yang dapat dipanggil berulang. Dengan <code>def</code> kita mendefinisikan function.</p><p><strong>Defining Functions</strong>:\n``<code>python\ndef nama_fungsi(parameter1, parameter2, ...):\n    \"\"\"docstring optional\"\"\"\n    # body\n    return nilai  # optional, default None\n</code>`<code></p><p><strong>Calling Functions</strong>:\n- </code>nama_fungsi(arg1, arg2)<code>\n- Positional arguments: urutan matters\n- Keyword arguments: </code>nama_fungsi(param=valu</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L01.md"
        "defaultCode": "def sapa(nama):\n    return f\"Halo, {nama}!\"\n\nprint(sapa(\"Archon\"))\n\ndef tambah(a, b=0):\n    return a + b\n\nprint(tambah(3, 5))\nprint(tambah(3))",
        "expectedOutput": "Halo, Archon!\n8\n3",
        "hint": "def function(params): ... Default value = b=0.",
        "quiz": {
            "question": "Apa yang dipelajari di Function Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 4,
        "module": "Fungsi"
    },
    {
        "id": 16,
        "title": "16. Lambda dan Higher-Order",
        "description": "<p><strong>Arguments: Positional, Keyword, Default, and *args/**kwargs</strong></p><h4>🎯 Tujuan:</h4><p>Master flexible function signatures, unpacking arguments, and variable-length parameters.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython mendukung berbagai cara passing arguments ke fungsi:</p><p><strong>Positional Arguments</strong>: Urutan penting.\n``<code>python\ndef f(a, b):\n    return a + b\nf(1, 2)  # a=1, b=2\n</code>`<code></p><p><strong>Keyword Arguments</strong>: Urutan tidak penting, gunakan nama parameter.\n</code>`<code>python\nf(b=2, a=1)  # sama dengan f(1,2)\n</code>`<code></p><p><strong>Default Arguments</strong>: Nilai default jika tidak diberikan.\n</code>`<code>python\ndef f(a, b=10):\n    retur</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L02.md"
        "defaultCode": "kuadrat = lambda x: x ** 2\nprint(kuadrat(5))\n\nangka = [1, 2, 3, 4, 5]\nprint(list(map(lambda x: x*2, angka)))\nprint(list(filter(lambda x: x > 2, angka)))",
        "expectedOutput": "25\n[2, 4, 6, 8, 10]\n[3, 4, 5]",
        "hint": "lambda = anonymous function. map/filter = HOF.",
        "quiz": {
            "question": "Apa yang dipelajari di Lambda dan Higher-Order?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 4,
        "module": "Fungsi"
    },
    {
        "id": 17,
        "title": "17. List Comprehension",
        "description": "<p><strong>Lambda Functions and Higher-Order Functions</strong></p><h4>🎯 Tujuan:</h4><p>Use lambda expressions, pass functions as arguments, and understand map/filter/reduce.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Lambda Functions</strong>: Anonymous functions (tidak memiliki nama) dengan sintaks singkat.\n``<code>python\nlambda arguments: expression\n</code>`<code>\nLambda hanya bisa berupa single expression (bukan statements). Umum dipakai saat butuh fungsi sederhana sementara.</p><p><strong>Higher-Order Functions</strong>: Fungsi yang menerima fungsi lain sebagai argumen, atau mengembalikan fungsi.</p><p><strong>map()</strong>: Terapkan fungsi ke setiap elemen iterable.\n</code>`<co</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L03.md"
        "defaultCode": "kuadrat = [x**2 for x in range(5)]\nprint(kuadrat)\n\ngenap = [x for x in range(10) if x % 2 == 0]\nprint(genap)\n\nmatrix = [[i*j for j in range(3)] for i in range(3)]\nprint(matrix)",
        "expectedOutput": "[0, 1, 4, 9, 16]\n[0, 2, 4, 6, 8]\n[[0, 0, 0], [0, 1, 2], [0, 2, 4]]",
        "hint": "[expr for item in iterable if condition].",
        "quiz": {
            "question": "Apa yang dipelajari di List Comprehension?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 4,
        "module": "Fungsi"
    },
    {
        "id": 18,
        "title": "18. Lesson M04-L04",
        "description": "<p><strong>Docstrings, Type Hints, and Function Annotations</strong></p><h4>🎯 Tujuan:</h4><p>Write professional docstrings (Google/NumPy style), add type hints, and use typing module.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Docstrings</strong>: String literal pertama dalam function/class/module yang berfungsi sebagai dokumentasi. Diakses via <code>__doc__</code> atau <code>help()</code>.</p><p><strong>Style Populer</strong>:\n- <strong>Google Style</strong>:\n``<code>python\ndef func(arg1, arg2):\n    \"\"\"Short description.</p><p>    Longer description explaining details.</p><p>    Args:\n        arg1 (int): description\n        arg2 (str): description</p><p>    Returns:\n        bool: description\n</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L04.md"
        "defaultCode": "print(\"Belajar Lesson M04-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M04-L04 di Python!",
        "hint": "Pelajari lesson m04-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M04-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 4,
        "module": "Fungsi"
    },
    {
        "id": 19,
        "title": "19. Lesson M04-L05",
        "description": "<p><strong>Modules and Packages</strong></p><h4>🎯 Tujuan:</h4><p>Organize code into modules, create packages with __init__.py, and use import statements correctly.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Module</strong>: File Python (.py) yang berisi kode (functions, classes, variables). Setiap file adalah module.\n<strong>Package</strong>: Folder yang berisi module-module atau sub-packages, ditandai dengan file <code>__init__.py</code> (bisa kosong).</p><p><strong>Import Statements</strong>:\n``<code>python\nimport module_name\nimport package.module_name\nfrom module_name import name1, name2\nfrom package.module_name import something\nfrom module_name import *\nimport module_na</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L05.md"
        "defaultCode": "print(\"Belajar Lesson M04-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M04-L05 di Python!",
        "hint": "Pelajari lesson m04-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M04-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 20,
        "title": "20. Lesson M04-L06",
        "description": "<p><strong>The if __name__ == '__main__' Pattern</strong></p><h4>🎯 Tujuan:</h4><p>Make files executable as scripts and importable as modules.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nSetiap Python module memiliki built-in variable <code>__name__</code>. Nilainya tergantung bagaimana file dieksekusi:\n- Jika dijalankan langsung (<code>python file.py</code>), <code>__name__ == \"__main__\"</code>\n- Jika di-import (<code>import file</code>), <code>__name__ == \"nama_file\"</code> (nama module)</p><p><strong>Pattern</strong>:\n``<code>python\ndef main():\n    # kode utama program\n    pass</p><p>if __name__ == \"__main__\":\n    main()\n</code>`<code>\nAtau sederhana:\n</code></p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L06.md"
        "defaultCode": "print(\"Belajar Lesson M04-L06 di Python!\")",
        "expectedOutput": "Belajar Lesson M04-L06 di Python!",
        "hint": "Pelajari lesson m04-l06.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M04-L06?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 21,
        "title": "21. Class Dasar",
        "description": "<p><strong>Classes and Objects: Basics of OOP</strong></p><h4>🎯 Tujuan:</h4><p>Define classes, create objects (instances), understand __init__ and self.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Class</strong>: Blueprint untuk membuat objects. Mendefinisikan atribut (data) dan methods (fungsi).\n<strong>Object</strong>: Instance dari class.</p><p><strong>Defining Class</strong>:\n``<code>python\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f\"Hello, I'm {self.name}\"\n</code>`<code></p><p><strong>__init__ Method</strong>:\n- Constructor: dipanggil saat object dibuat\n- </code>se</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L01.md"
        "defaultCode": "class User:\n    def __init__(self, nama):\n        self.nama = nama\n    \n    def sapa(self):\n        return f\"Halo, {self.nama}!\"\n\nu = User(\"Archon\")\nprint(u.sapa())",
        "expectedOutput": "Halo, Archon!",
        "hint": "class = blueprint. __init__ = constructor. self = this.",
        "quiz": {
            "question": "Apa yang dipelajari di Class Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 22,
        "title": "22. Inheritance",
        "description": "<p><strong>Instance Variables, Class Variables, and Methods</strong></p><h4>🎯 Tujuan:</h4><p>Distinguish between instance and class attributes, define instance/class/static methods.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Instance Attributes</strong>: <code>self.attr</code> - setiap instance memiliki nilai sendiri.\n<strong>Class Attributes</strong>: <code>ClassName.attr</code> atau <code>self.__class__.attr</code> - dikelola bersama semua instance.</p><p><strong>Atribut precedence</strong>: Jika instance memiliki attribute dengan nama yang sama dengan class attribute, instance attribute akan diutamakan.</p><p><strong>Types of Methods</strong>:\n- <strong>Instance method</strong>: <code>def</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L02.md"
        "defaultCode": "class Animal:\n    def __init__(self, nama):\n        self.nama = nama\n    def speak(self):\n        return f\"{self.nama} bersuara\"\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.nama} menggonggong!\"\n\nprint(Dog(\"Buddy\").speak())",
        "expectedOutput": "Buddy menggonggong!",
        "hint": "class Child(Parent): ... = inheritance.",
        "quiz": {
            "question": "Apa yang dipelajari di Inheritance?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 23,
        "title": "23. Lesson M05-L03",
        "description": "<p><strong>Inheritance and Method Resolution Order (MRO)</strong></p><h4>🎯 Tujuan:</h4><p>Create subclass relationships, use super(), understand multiple inheritance and MRO.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Inheritance</strong>: Subclass mewarisi atribut dan methods dari superclass. Memungkinkan code reuse dan polymorphism.</p><p><strong>Syntax</strong>:\n``<code>python\nclass SubClass(SuperClass):\n    # override atau tambah methods\n</code>`<code></p><p><strong>super()</strong>: Memanggil method dari superclass.\n</code>`<code>python\nclass Sub(Super):\n    def method(self):\n        super().method()  # panggil Super.method\n</code>`<code></p><p><strong>Multiple Inheritance</stron</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L03.md"
        "defaultCode": "print(\"Belajar Lesson M05-L03 di Python!\")",
        "expectedOutput": "Belajar Lesson M05-L03 di Python!",
        "hint": "Pelajari lesson m05-l03.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M05-L03?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 24,
        "title": "24. Lesson M05-L04",
        "description": "<p><strong>Encapsulation: Public, Private, and Protected</strong></p><h4>🎯 Tujuan:</h4><p>Use naming conventions (_protected, __private), understand name mangling.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython tidak memiliki strict private/protected modifiers seperti Java/C++. Sebagai gantinya, menggunakan naming conventions:</p><p>- <strong>Public</strong>: <code>name</code> - bisa diakses dari mana saja\n- <strong>Protected</strong>: <code>_name</code> - convention: \"internal use, treat as non-public\" (masih bisa diakses, tapi berhati-hati)\n- <strong>Private</strong>: <code>__name</code> (double underscore) - name mangling: Python mengubah nama menjadi <code>_ClassName__name</</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L04.md"
        "defaultCode": "print(\"Belajar Lesson M05-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M05-L04 di Python!",
        "hint": "Pelajari lesson m05-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M05-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 25,
        "title": "25. Lesson M05-L05",
        "description": "<p><strong>Properties, Getters, and Setters</strong></p><h4>🎯 Tujuan:</h4><p>Implement computed properties with @property, create getter/setter decorators.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython menggunakan <code>@property</code> decorator untuk membuat computed attributes dan encapsulation tanpa perlu explicit getter/setter methods.</p><p><strong>Property</strong>:\n``<code>python\nclass Celsius:\n    def __init__(self, temperature):\n        self._temperature = temperature</p><p>    @property\n    def fahrenheit(self):\n        return (self._temperature * 9/5) + 32</p><p>    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._temperature = (value - 32) </p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L05.md"
        "defaultCode": "print(\"Belajar Lesson M05-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M05-L05 di Python!",
        "hint": "Pelajari lesson m05-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M05-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 5,
        "module": "OOP"
    },
    {
        "id": 26,
        "title": "26. Lesson M05-L06",
        "description": "<p><strong>Special (Dunder) Methods</strong></p><h4>🎯 Tujuan:</h4><p>Implement __str__, __repr__, __len__, __getitem__, __setitem__, and other magic methods.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nDunder (double underscore) methods adalah special methods yang mengizinkan class Python berperilaku seperti built-in types. Dikenali dengan nama <code>__nama__</code>.</p><p><strong>Common Dunder Methods</strong>:\n- <code>__str__(self)</code>: string untuk user (print(obj))\n- <code>__repr__(self)</code>: string untuk developer (representasi unambiguous, ideal untuk debugging)\n- <code>__len__(self)</code>: untuk <code>len(obj)</code> (harus return int >= 0)\n- <code>__getitem__(se</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L06.md"
        "defaultCode": "print(\"Belajar Lesson M05-L06 di Python!\")",
        "expectedOutput": "Belajar Lesson M05-L06 di Python!",
        "hint": "Pelajari lesson m05-l06.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M05-L06?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 27,
        "title": "27. Lesson M05-L07",
        "description": "<p><strong>Polymorphism and Duck Typing</strong></p><h4>🎯 Tujuan:</h4><p>Understand polymorphism in Python, embrace duck typing, and use abstract base classes (ABC).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Polymorphism</strong>: Ability to use a unified interface for different types. Python achieves polymorphism through duck typing and inheritance.</p><p><strong>Duck Typing</strong>: \"If it walks like a duck and quacks like a duck, it must be a duck.\" Artinya, kita tidak perlu cek tipe formal; kita hanya perlu memastikan objek memiliki methods yang kita butuhkan.</p><p>``<code>python\ndef make_sound(animal):\n    print(animal.speak())  # asumsi animal punya method speak()\n</</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L07.md"
        "defaultCode": "print(\"Belajar Lesson M05-L07 di Python!\")",
        "expectedOutput": "Belajar Lesson M05-L07 di Python!",
        "hint": "Pelajari lesson m05-l07.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M05-L07?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 28,
        "title": "28. Lesson M06-L01",
        "description": "<p><strong>Exceptions: try, except, else, finally</strong></p><h4>🎯 Tujuan:</h4><p>Catch and handle exceptions, understand the exception hierarchy, use else and finally blocks.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nExceptions adalah mekanisme Python untuk menangani errors dan situasi tidak terduga. Gunakan <code>try-except</code> untuk menangkap dan menangani exceptions.</p><p><strong>Basic Structure</strong>:\n```python\ntry:\n    # kode yang mungkin raise exception\n    result = 10 / 0\nexcept ZeroDivisionError:\n    # handle exception tertentu\n    print(\"Cannot divide by zero\")\nexcept (TypeError, ValueError) as e:\n    # handle multiple exceptions\n    print(f\"Error: {e}\")\nexcept Exception as e</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L01.md"
        "defaultCode": "print(\"Belajar Lesson M06-L01 di Python!\")",
        "expectedOutput": "Belajar Lesson M06-L01 di Python!",
        "hint": "Pelajari lesson m06-l01.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M06-L01?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 29,
        "title": "29. Lesson M06-L02",
        "description": "<p><strong>Raising Exceptions and Custom Exceptions</strong></p><h4>🎯 Tujuan:</h4><p>Raise exceptions with raise, define custom exception classes by inheriting from Exception.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Raising Exceptions</strong>: Gunakan <code>raise</code> untuk memicu exception.\n``<code>python\nraise ValueError(\"Invalid value\")\nraise MyCustomError(\"Something went wrong\")\n</code>`<code></p><p><strong>Custom Exceptions</strong>: Buat class sendiri yang inherit dari </code>Exception<code> (atau subclass lain).\n</code>`<code>python\nclass MyError(Exception):\n    def __init__(self, message, code=None):\n        super().__init__(message)\n        self.code = code\n</code>`<code</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L02.md"
        "defaultCode": "print(\"Belajar Lesson M06-L02 di Python!\")",
        "expectedOutput": "Belajar Lesson M06-L02 di Python!",
        "hint": "Pelajari lesson m06-l02.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M06-L02?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 30,
        "title": "30. Lesson M06-L03",
        "description": "<p><strong>Context Managers and the with Statement</strong></p><h4>🎯 Tujuan:</h4><p>Use with for resource management, create custom context managers with __enter__ and __exit__.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nContext managers mengelola resource (seperti file, lock, koneksi) dengan memastikan cleanup dilakukan meskipun ada exception. Digunakan dengan <code>with</code> statement.</p><p><strong>Built-in Context Managers</strong>: <code>open()</code>, <code>threading.Lock()</code>, <code>sqlite3.connect()</code>, dll.</p><p><strong>Syntax</strong>:\n``<code>python\nwith context_manager as variable:\n    # block code\n# otomatis cleanup (exit) terjadi di sini\n</code>`<code></p><p>### Custom C</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L03.md"
        "defaultCode": "print(\"Belajar Lesson M06-L03 di Python!\")",
        "expectedOutput": "Belajar Lesson M06-L03 di Python!",
        "hint": "Pelajari lesson m06-l03.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M06-L03?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 31,
        "title": "31. Lesson M06-L04",
        "description": "<p><strong>Exception Chaining and Best Practices</strong></p><h4>🎯 Tujuan:</h4><p>Preserve traceback with raise from, follow Pythonic error handling patterns.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Exception Chaining</strong>: Ketika menangkap exception dan raise exception baru, gunakan <code>raise NewException(...) from original_exception</code> untuk mempertahankan traceback asli. Ini membantu debugging karena menunjukkan akar masalah.</p><p>``<code>python\ntry:\n    risky_operation()\nexcept SomeError as e:\n    raise MyError(\"Higher-level failure\") from e\n</code>`<code></p><p>Output traceback akan menunjukkan Both exceptions:\n</code>``\nTraceback (most recent call l</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L04.md"
        "defaultCode": "print(\"Belajar Lesson M06-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M06-L04 di Python!",
        "hint": "Pelajari lesson m06-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M06-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 32,
        "title": "32. Lesson M07-L01",
        "description": "<p><strong>Reading and Writing Text Files</strong></p><h4>🎯 Tujuan:</h4><p>Open files with open(), use read/write modes, context managers, and encoding parameters.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nFile I/O di Python menggunakan built-in function <code>open()</code>.</p><p><strong>Modes</strong>:\n- <code>'r'</code>: read (default)\n- <code>'w'</code>: write (truncate, create jika tidak ada)\n- <code>'a'</code>: append (create jika tidak ada)\n- <code>'x'</code>: exclusive creation (error jika file exists)\n- <code>'b'</code>: binary mode\n- <code>'t'</code>: text mode (default)\n- <code>'+'</code>: update (read and write)</p><p>Contoh: <code>'rb'</code> (read binary), <code>'w+'</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L01.md"
        "defaultCode": "print(\"Belajar Lesson M07-L01 di Python!\")",
        "expectedOutput": "Belajar Lesson M07-L01 di Python!",
        "hint": "Pelajari lesson m07-l01.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M07-L01?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 33,
        "title": "33. Lesson M07-L02",
        "description": "<p><strong>Working with CSV and JSON Data</strong></p><h4>🎯 Tujuan:</h4><p>Parse CSV files with csv module, serialize/deserialize JSON with json module.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>CSV Module</strong>:\n```python\nimport csv</p><p># Reading\nwith open('file.csv', newline='') as f:\n    reader = csv.reader(f)  # returns iterator of lists\n    for row in reader:\n        print(row)  # list of strings</p><p># DictReader (more convenient)\nwith open('file.csv') as f:\n    reader = csv.DictReader(f)  # each row is dict dengan keys dari header\n    for row in reader:\n        print(row['name'])</p><p># Writing\nwith open('out.csv', 'w', newline='') as f:\n    writer</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L02.md"
        "defaultCode": "print(\"Belajar Lesson M07-L02 di Python!\")",
        "expectedOutput": "Belajar Lesson M07-L02 di Python!",
        "hint": "Pelajari lesson m07-l02.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M07-L02?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 34,
        "title": "34. Lesson M07-L03",
        "description": "<p><strong>Pickle and Binary Serialization</strong></p><h4>🎯 Tujuan:</h4><p>Use pickle for Python object serialization, understand security implications.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Pickle</strong>: Module untuk serialization (mengubah objek Python menjadi byte stream) dan deserialization (membalikkan). Bisa menyimpan hampir semua objek Python (termasuk functions, classes, dll) tetapi <strong>tidak aman</strong> untuk data dari sumber tidak tepercaya.</p><p><strong>Serialization (Pickling)</strong>:\n``<code>python\nimport pickle</p><p>data = {'a': [1, 2.0, 3+4j], 'b': ('string', u'unicode string'), 'c': None}\nwith open('data.pkl', 'wb') as f:\n    pic</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L03.md"
        "defaultCode": "print(\"Belajar Lesson M07-L03 di Python!\")",
        "expectedOutput": "Belajar Lesson M07-L03 di Python!",
        "hint": "Pelajari lesson m07-l03.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M07-L03?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 35,
        "title": "35. Lesson M07-L04",
        "description": "<p><strong>Working with Paths: os.path and pathlib</strong></p><h4>🎯 Tujuan:</h4><p>Manipulate file paths with os.path and the modern pathlib API.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>os.path</strong>: Module untuk operasi path berbasis string.\n``<code>python\nimport os.path</p><p>path = '/home/user/file.txt'\nos.path.join('dir', 'subdir', 'file.txt')\nos.path.split(path)          # ('/home/user', 'file.txt')\nos.path.dirname(path)       # '/home/user'\nos.path.basename(path)      # 'file.txt'\nos.path.splitext(path)      # ('/home/user/file', '.txt')\nos.path.exists(path)\nos.path.isfile(path)\nos.path.isdir(path)\nos.path.getsize(path)\n</code>`<code></p><p><s</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L04.md"
        "defaultCode": "print(\"Belajar Lesson M07-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M07-L04 di Python!",
        "hint": "Pelajari lesson m07-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M07-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 36,
        "title": "36. Lesson M07-L05",
        "description": "<p><strong>File System Operations</strong></p><h4>🎯 Tujuan:</h4><p>List directories, check file existence, create/remove files and directories.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nOperasi file system menggunakan modul <code>os</code> dan <code>shutil</code>.</p><p><strong>os module</strong>:\n```python\nimport os</p><p>os.listdir(path='.')          # list direktori (names only)\nos.scandir(path='.')          # iterator of DirEntry (lebih efisien, punya atribut)\nos.getcwd()\nos.chdir(path)\nos.mkdir(path)               # buat satu level\nos.makedirs(path, exist_ok=True)  # buat recursively\nos.rmdir(path)               # hapus direktori kosong\nos.remove(path)    </p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L05.md"
        "defaultCode": "print(\"Belajar Lesson M07-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M07-L05 di Python!",
        "hint": "Pelajari lesson m07-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M07-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 37,
        "title": "37. Lesson M08-L01",
        "description": "<p><strong>Iterators and the Iterator Protocol</strong></p><h4>🎯 Tujuan:</h4><p>Understand iter() and next(), create custom iterator classes, use iterators efficiently.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Iterator</strong>: Objek yang mengimplementasikan <code>__iter__()</code> (mengembalikan iterator itu sendiri) dan <code>__next__()</code> (mengembalikan next element atau raise <code>StopIteration</code>).</p><p><strong>Iterable</strong>: Objek yang bisa di-iterasi (mempunyai <code>__iter__()</code> yang mengembalikan iterator). Contoh: list, tuple, dict, set, string, range, dan custom class dengan <code>__iter__</code>.</p><p><strong>Iteration Process</strong>:\n``<code</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L01.md"
        "defaultCode": "print(\"Belajar Lesson M08-L01 di Python!\")",
        "expectedOutput": "Belajar Lesson M08-L01 di Python!",
        "hint": "Pelajari lesson m08-l01.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M08-L01?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 38,
        "title": "38. Lesson M08-L02",
        "description": "<p><strong>Generators and yield</strong></p><h4>🎯 Tujuan:</h4><p>Write generator functions, use yield for lazy evaluation, understand generator expressions.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Generator</strong>: Type iterator yang dibuat dengan fungsi yang menggunakan <code>yield</code>. Lebih sederhana daripada custom iterator class.</p><p>``<code>python\ndef count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1</p><p>for x in count_up_to(5):\n    print(x)  # 0 1 2 3 4\n</code>`<code></p><p><strong>Generator Expression</strong>: Mirip list comprehension tapi dengan parentheses, menghasilkan generator (lazy).\n</code>`<code>python\ngen = (x*x f</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L02.md"
        "defaultCode": "print(\"Belajar Lesson M08-L02 di Python!\")",
        "expectedOutput": "Belajar Lesson M08-L02 di Python!",
        "hint": "Pelajari lesson m08-l02.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M08-L02?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 39,
        "title": "39. Lesson M08-L03",
        "description": "<p><strong>Decorators: Functions That Wrap Functions</strong></p><h4>🎯 Tujuan:</h4><p>Create function decorators, use @ syntax, understand closure and functools.wraps.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Decorator</strong>: Fungsi yang menerima fungsi sebagai argumen dan mengembalikan fungsi baru (biasanya menambahkan fungsionalitas tanpa modifikasi fungsi asli). Sintaks sugar: <code>@decorator</code> di atas definisi fungsi.</p><p>``<code>python\ndef my_decorator(func):\n    def wrapper(*args, **kwargs):\n        # pre-processing\n        result = func(*args, <strong>kwargs)\n        # post-processing\n        return result\n    return wrapper</p><p>@my_decorator\ndef say_hello</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L03.md"
        "defaultCode": "print(\"Belajar Lesson M08-L03 di Python!\")",
        "expectedOutput": "Belajar Lesson M08-L03 di Python!",
        "hint": "Pelajari lesson m08-l03.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M08-L03?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 40,
        "title": "40. Lesson M08-L04",
        "description": "<p><strong>Contextlib and Advanced Context Managers</strong></p><h4>🎯 Tujuan:</h4><p>Use contextmanager decorator, suppress, redirect_stdout, and other utilities.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>contextlib</strong>: Module yang menyediakan utilities untuk bekerja dengan context managers.</p><p><strong>@contextmanager</strong>: Decorator untuk membuat context manager dari generator function.\n``<code>python\nfrom contextlib import contextmanager</p><p>@contextmanager\ndef my_context():\n    # setup\n    resource = acquire_resource()\n    try:\n        yield resource\n    finally:\n        # cleanup\n        release_resource(resource)\n</code>`<code>\nGenerator harus </code>y</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L04.md"
        "defaultCode": "print(\"Belajar Lesson M08-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M08-L04 di Python!",
        "hint": "Pelajari lesson m08-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M08-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 41,
        "title": "41. Lesson M08-L05",
        "description": "<p><strong>Descriptors and the Descriptor Protocol</strong></p><h4>🎯 Tujuan:</h4><p>Implement __get__, __set__, __delete__ for custom attribute behavior.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Descriptor</strong>: Objek yang mengimplementasikan salah satu dari <code>__get__</code>, <code>__set__</code>, atau <code>__delete__</code>. Digunakan untuk custom attribute access pada class.</p><p><strong>Types</strong>:\n- <strong>Data descriptor</strong>: Mengimplementasikan <code>__set__</code> dan <code>__get__</code> (dan/atau <code>__delete__</code>). Memiliki precedence lebih tinggi daripada instance dictionary.\n- <strong>Non-data descriptor</strong>: Hanya <cod</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L05.md"
        "defaultCode": "print(\"Belajar Lesson M08-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M08-L05 di Python!",
        "hint": "Pelajari lesson m08-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M08-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 42,
        "title": "42. Lesson M08-L06",
        "description": "<p><strong>Metaclasses and Class Creation</strong></p><h4>🎯 Tujuan:</h4><p>Understand type(), create custom metaclasses, and know when to use them (rarely).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Metaclass</strong>: Class dari class. Class adalah instance dari metaclass. Default metaclass adalah <code>type</code>.</p><p>``<code>python\nclass MyClass:\n    pass\n# Di balik layar: MyClass = type('MyClass', (object,), {})\n</code>`<code></p><p><strong>type()</strong> bisa digunakan untuk membuat class secara dinamis:\n</code>`<code>python\nMyClass = type('MyClass', (base1, base2), {'attr': value, 'method': lambda self: ...})\n</code>`<code></p><p><strong>Custom Metaclass</</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L06.md"
        "defaultCode": "print(\"Belajar Lesson M08-L06 di Python!\")",
        "expectedOutput": "Belajar Lesson M08-L06 di Python!",
        "hint": "Pelajari lesson m08-l06.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M08-L06?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 43,
        "title": "43. Lesson M09-L01",
        "description": "<p><strong>Threading: Running Code Concurrently</strong></p><h4>🎯 Tujuan:</h4><p>Create threads with threading.Thread, understand GIL, and use thread synchronization (Lock, RLock, Event).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Threading</strong>: Eksekusi concurrent dalam satu process (threads berbagi memory). Berguna untuk I/O-bound tasks (network, file). Python memiliki GIL (Global Interpreter Lock) yang membatasi eksekusi parallel pada CPU-bound code.</p><p><strong>Creating Threads</strong>:\n``<code>python\nimport threading</p><p>def worker():\n    print(\"Working\")</p><p>t = threading.Thread(target=worker, args=(...), kwargs={...})\nt.start()   # start thread\nt.join()    # wait until finished\n</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L01.md"
        "defaultCode": "print(\"Belajar Lesson M09-L01 di Python!\")",
        "expectedOutput": "Belajar Lesson M09-L01 di Python!",
        "hint": "Pelajari lesson m09-l01.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M09-L01?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 44,
        "title": "44. Lesson M09-L02",
        "description": "<p><strong>Multiprocessing: True Parallel Execution</strong></p><h4>🎯 Tujuan:</h4><p>Spawn processes with multiprocessing, share data with Queue and Pipe, bypass GIL for CPU-bound tasks.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Multiprocessing</strong>: Membuat multiple processes, masing-masing memiliki memory space sendiri. Bypass GIL, memungkinkan true parallel execution untuk CPU-bound tasks.</p><p><strong>Creating Processes</strong>:\n``<code>python\nfrom multiprocessing import Process</p><p>def worker(name):\n    print(f\"Hello from {name}\")</p><p>p = Process(target=worker, args=(\"Alice\",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L02.md"))\np.start()\np.join()\n</code>`<code></p><p><strong>Process Pool</strong>: </code>multiprocessing.Pool<code></p>",
        "defaultCode": "print(\"Belajar Lesson M09-L02 di Python!\")",
        "expectedOutput": "Belajar Lesson M09-L02 di Python!",
        "hint": "Pelajari lesson m09-l02.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M09-L02?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 45,
        "title": "45. Lesson M09-L03",
        "description": "<p><strong>Asyncio: Asynchronous I/O</strong></p><h4>🎯 Tujuan:</h4><p>Write async functions with async/await, use Event Loop, understand coroutines and tasks.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Asyncio</strong>: Library untuk concurrent programming menggunakan event loop dan coroutines. Cocok untuk I/O-bound tasks dengan many concurrent connections (e.g., web servers, network clients).</p><p><strong>async/await</strong>:\n``<code>python\nimport asyncio</p><p>async def fetch_data():\n    print(\"Start\")\n    await asyncio.sleep(1)  # simulasi I/O\n    print(\"Done\")\n    return {\"data\": 123}</p><p>async def main():\n    result = await fetch_data()\n    print(result)</p><p</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L03.md"
        "defaultCode": "print(\"Belajar Lesson M09-L03 di Python!\")",
        "expectedOutput": "Belajar Lesson M09-L03 di Python!",
        "hint": "Pelajari lesson m09-l03.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M09-L03?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 46,
        "title": "46. Lesson M09-L04",
        "description": "<p><strong>Concurrent Futures: ThreadPoolExecutor and ProcessPoolExecutor</strong></p><h4>🎯 Tujuan:</h4><p>Simplify concurrent code with high-level executors, map tasks to pools.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>concurrent.futures</strong>: Module yang menyediakan interface tingkat tinggi untuk asynchronous execution. Dua executor utama:\n- <code>ThreadPoolExecutor</code>: untuk I/O-bound tasks (threads)\n- <code>ProcessPoolExecutor</code>: untuk CPU-bound tasks (processes)</p><p><strong>Executor Interface</strong>:\n```python\nfrom concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor\nimport time</p><p>def task(n):\n    time.sleep(1)\n    return n * n</p><p>with ThreadPoo</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L04.md"
        "defaultCode": "print(\"Belajar Lesson M09-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M09-L04 di Python!",
        "hint": "Pelajari lesson m09-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M09-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 47,
        "title": "47. Lesson M09-L05",
        "description": "<p><strong>Choosing the Right Concurrency Model</strong></p><h4>🎯 Tujuan:</h4><p>Decide between threading, multiprocessing, and asyncio based on I/O vs CPU bound tasks.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\nPython menawarkan beberapa model concurrency:\n- <strong>Threading</strong>: threads dalam satu process, GIL membatasi CPU-bound parallelism, baik untuk I/O-bound.\n- <strong>Multiprocessing</strong>: multiple processes, bypass GIL, baik untuk CPU-bound.\n- <strong>Asyncio</strong>: single-threaded event loop, cooperative multitasking, sangat baik untuk I/O-bound dengan many concurrent connections.</p><p><strong>Decision Criteria</strong>:\n1. <strong>Task Type</strong>:\n   - I/O-bo</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L05.md"
        "defaultCode": "print(\"Belajar Lesson M09-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M09-L05 di Python!",
        "hint": "Pelajari lesson m09-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M09-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 48,
        "title": "48. Lesson M10-L01",
        "description": "<p><strong>Writing Tests with unittest and pytest</strong></p><h4>🎯 Tujuan:</h4><p>Write unit tests, use assertions, fixtures, and parametrize tests with pytest.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Testing</strong>: Memastikan kode berfungsi sesuai yang diharapkan. Unit testing menguji komponen kecil (functions, classes) secara terisolasi.</p><p><strong>unittest</strong> (built-in):\n``<code>python\nimport unittest</p><p>def add(a, b):\n    return a + b</p><p>class TestAdd(unittest.TestCase):\n    def test_add_positive(self):\n        self.assertEqual(add(2, 3), 5)</p><p>    def test_add_negative(self):\n        self.assertEqual(add(-1, -1), -2)</p><p>if __name__ == '__m</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L01.md"
        "defaultCode": "print(\"Belajar Lesson M10-L01 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L01 di Python!",
        "hint": "Pelajari lesson m10-l01.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L01?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 49,
        "title": "49. Lesson M10-L02",
        "description": "<p><strong>Test-Driven Development (TDD) Workflow</strong></p><h4>🎯 Tujuan:</h4><p>Follow Red-Green-Refactor cycle, write tests before implementation.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>TDD</strong>: Development process di mana kita menulis test terlebih dahulu sebelum implementasi kode. Cycle:\n1. <strong>Red</strong>: Tulis test yang gagal (belum ada implementasi).\n2. <strong>Green</strong>: Tulis minimal kode agar test berhasil (pass).\n3. <strong>Refactor</strong>: Perbaiki kode tanpa mengubah behavior (pastikan test tetap pass).</p><p><strong>Benefits</strong>:\n- Desain API dari sudut pandang pengguna\n- Confidence dalam refactoring\n- Documentation vi</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L02.md"
        "defaultCode": "print(\"Belajar Lesson M10-L02 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L02 di Python!",
        "hint": "Pelajari lesson m10-l02.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L02?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 50,
        "title": "50. Lesson M10-L03",
        "description": "<p><strong>Debugging with pdb and IDE Debuggers</strong></p><h4>🎯 Tujuan:</h4><p>Set breakpoints, step through code, inspect variables, use post-mortem debugging.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Debugging</strong>: Proses menemukan dan memperbaiki bugs. Python memiliki debugger bawaan <code>pdb</code> (Python Debugger) dan semua IDE modern memiliki debugger GUI.</p><p><strong>pdb Commands</strong>:\n- <code>l</code> (list): tampilkan kode di sekitar posisi saat ini\n- <code>n</code> (next): eksekusi baris berikutnya (step over)\n- <code>s</code> (step): step into function call\n- <code>c</code> (continue): lanjutkan sampai breakpoint berikutnya atau selesai\n- <code></p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L03.md"
        "defaultCode": "print(\"Belajar Lesson M10-L03 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L03 di Python!",
        "hint": "Pelajari lesson m10-l03.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L03?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 51,
        "title": "51. Lesson M10-L04",
        "description": "<p><strong>Logging: The Right Way to Print</strong></p><h4>🎯 Tujuan:</h4><p>Configure logging module, use different log levels, format logs, and file handlers.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Logging</strong> menggantikan <code>print()</code> untuk production. Memungkinkan level keparahan, output ke file/console, formatting, dan rotasi.</p><p><strong>Basic Usage</strong>:\n``<code>python\nimport logging</p><p>logging.debug(\"Debug message\")\nlogging.info(\"Info message\")\nlogging.warning(\"Warning message\")\nlogging.error(\"Error message\")\nlogging.critical(\"Critical message\")\n</code>`<code>\nDefault level adalah </code>WARNING<code>, jadi </code>debug<code> dan </code></p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L04.md"
        "defaultCode": "print(\"Belajar Lesson M10-L04 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L04 di Python!",
        "hint": "Pelajari lesson m10-l04.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L04?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 52,
        "title": "52. Lesson M10-L05",
        "description": "<p><strong>Code Quality: PEP 8, Linters, and Formatters</strong></p><h4>🎯 Tujuan:</h4><p>Follow PEP 8, use flake8/pylint, and auto-format with black and isort.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>PEP 8</strong>: Style guide untuk Python code. Menjaga konsistensi readability.</p><p><strong>Key PEP 8 Rules</strong>:\n- Indentation: 4 spaces per level (no tabs)\n- Maximum line length: 79 characters (PEP 8) or 99 (many modern projects)\n- Blank lines: 2 between top-level functions/classes, 1 between methods\n- Imports: grouped (standard library, third-party, local), each group separated by blank line; within group sorted alphabetically\n- Naming: <code>snake_case</code> f</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L05.md"
        "defaultCode": "print(\"Belajar Lesson M10-L05 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L05 di Python!",
        "hint": "Pelajari lesson m10-l05.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L05?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 53,
        "title": "53. Lesson M10-L06",
        "description": "<p><strong>Type Checking with mypy</strong></p><h4>🎯 Tujuan:</h4><p>Run static type checking, understand common mypy errors, improve code reliability.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>mypy</strong>: Static type checker untuk Python. Memeriksa kode berdasarkan type hints (PEP 484) tanpa menjalankannya. Menemukan potential type errors sebelum runtime.</p><p><strong>Installation</strong>:\n``<code>bash\npip install mypy\n</code>`<code></p><p><strong>Basic Usage</strong>:\n</code>`<code>bash\nmypy my_module.py\n</code>`<code>\nOutput: error messages dengan baris dan kolom.</p><p><strong>Type Hints</strong>: Tambahkan </code>: type<code> untuk parameters dan </co</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L06.md"
        "defaultCode": "print(\"Belajar Lesson M10-L06 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L06 di Python!",
        "hint": "Pelajari lesson m10-l06.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L06?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 54,
        "title": "54. Lesson M10-L07",
        "description": "<p><strong>Profiling and Performance Optimization</strong></p><h4>🎯 Tujuan:</h4><p>Profile code with cProfile, timeit, and line_profiler; identify bottlenecks.</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Profiling</strong>: Mengukur performance code (waktu eksekusi, function calls) untuk menemukan bottleneck.</p><p><strong>cProfile</strong>: Built-in deterministic profiler (mengukur function calls dan waktu).\n``<code>bash\npython -m cProfile -o profile.out my_script.py\n</code>`<code>\nAtau dalam kode:\n</code>`<code>python\nimport cProfile\nimport pstats</p><p>profiler = cProfile.Profile()\nprofiler.enable()\n# code to profile\nprofiler.create_stats()\nstats = pstats.Stats(profil</p>",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L07.md"
        "defaultCode": "print(\"Belajar Lesson M10-L07 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L07 di Python!",
        "hint": "Pelajari lesson m10-l07.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L07?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    },
    {
        "id": 55,
        "title": "55. Lesson M10-L08",
        "description": "<p><strong>Packaging and Distributing Python Packages</strong></p><h4>🎯 Tujuan:</h4><p>Create setup.py/pyproject.toml, build distributions, and publish to PyPI (optional).</p><h4>📚 Materi:</h4><p>### Konsep Dasar\n<strong>Packaging</strong>: Mengorganisir kode menjadi package yang bisa diinstall via <code>pip</code>. Package adalah direktori dengan <code>__init__.py</code> dan modul-modul lainnya, plus file metadata.</p><p><strong>pyproject.toml</strong> (modern, direkomendasikan):\n```toml\n[build-system]\nrequires = [\"setuptools>=61.0\",,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L08.md" \"wheel\"]\nbuild-backend = \"setuptools.build_meta\"</p><p>[project]\nname = \"mypackage\"\nversion = \"0.1.0\"\ndescription = \"Short description\"\nauthors = [{name=\"Y</p>",
        "defaultCode": "print(\"Belajar Lesson M10-L08 di Python!\")",
        "expectedOutput": "Belajar Lesson M10-L08 di Python!",
        "hint": "Pelajari lesson m10-l08.",
        "quiz": {
            "question": "Apa yang dipelajari di Lesson M10-L08?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        },
        "moduleId": 6,
        "module": "Lanjutan"
    }
];

// State
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
        const result = logs.join('\n');
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
