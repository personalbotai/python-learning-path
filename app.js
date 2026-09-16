// Python Learning Path — Modern Interactive Engine (auto-generated)
const MODULES = [
  {
    "id": 1,
    "title": "Pengenalan Python",
    "icon": "fab fa-python"
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
    "title": "Fungsi & Modul",
    "icon": "fas fa-cube"
  },
  {
    "id": 5,
    "title": "Object-Oriented Programming",
    "icon": "fas fa-object-group"
  },
  {
    "id": 6,
    "title": "Error Handling",
    "icon": "fas fa-shield-halved"
  },
  {
    "id": 7,
    "title": "File I/O & Data",
    "icon": "fas fa-file-code"
  },
  {
    "id": 8,
    "title": "Konsep Lanjutan",
    "icon": "fas fa-bolt"
  },
  {
    "id": 9,
    "title": "Konkurensi & Paralelisme",
    "icon": "fas fa-arrows-split-up-and-left"
  },
  {
    "id": 10,
    "title": "Testing & Best Practices",
    "icon": "fas fa-vial-circle-check"
  }
];

const lessons = [
  {
    "id": 1,
    "moduleId": 1,
    "module": "Pengenalan Python",
    "title": "1. Installing Python and Setting Up Development Environment",
    "codeName": "M01-L01",
    "mdFile": "lessons/M01-L01.md",
    "defaultCode": "import sys\nimport platform\n\ndef info_environment():\n    print(\"=== Python Execution Environment ===\")\n    print(f\"Python Version : {sys.version.split()[0]}\")\n    print(f\"Platform       : {platform.platform()}\")\n    print(f\"Byteorder      : {sys.byteorder}\")\n    print(f\"Max Integer    : {sys.maxsize}\")\n    print(\"Environment siap untuk pembelajaran Python modern!\")\n\nif __name__ == \"__main__\":\n    info_environment()",
    "quiz": {
      "question": "What is the correct file extension for Python scripts?",
      "options": [
        ".py",
        ".python",
        ".pyt",
        ".pt"
      ],
      "answer": 0,
      "explanation": "Python scripts use the .py file extension."
    }
  },
  {
    "id": 2,
    "moduleId": 1,
    "module": "Pengenalan Python",
    "title": "2. First Steps: Hello World and Basic Syntax",
    "codeName": "M01-L02",
    "mdFile": "lessons/M01-L02.md",
    "defaultCode": "def demo_syntax():\n    greeting = \"Hello, Pythonista!\"\n    version = 3.12\n    is_awesome = True\n    print(greeting)\n    print(f\"Belajar Python versi {version}\")\n    print(f\"Apakah Python powerful? -> {is_awesome}\")\n    print(\"\\nPola Segitiga Bintang:\")\n    for i in range(1, 6):\n        print(\"*\" * i)\n\nif __name__ == \"__main__\":\n    demo_syntax()",
    "quiz": {
      "question": "Which command creates a virtual environment in Python?",
      "options": [
        "python -m venv venv",
        "pip install venv",
        "python create venv",
        "virtualenv create"
      ],
      "answer": 0,
      "explanation": "The standard way is 'python -m venv venv' (or 'python3 -m venv venv')."
    }
  },
  {
    "id": 3,
    "moduleId": 1,
    "module": "Pengenalan Python",
    "title": "3. Variables, Data Types, and Type System",
    "codeName": "M01-L03",
    "mdFile": "lessons/M01-L03.md",
    "defaultCode": "def demo_types():\n    nama: str = \"Budi Santoso\"\n    umur: int = 24\n    tinggi_m: float = 1.75\n    is_active: bool = True\n    skills: list[str] = [\"Python\", \"AsyncIO\", \"FastAPI\"]\n    print(f\"Nama    : {nama} (type: {type(nama).__name__})\")\n    print(f\"Umur    : {umur} (type: {type(umur).__name__})\")\n    print(f\"Tinggi  : {tinggi_m} m (type: {type(tinggi_m).__name__})\")\n    print(f\"Aktif   : {is_active} (type: {type(is_active).__name__})\")\n    print(f\"Skills  : {skills} (type: {type(skills).__name__})\")\n    umur_str = str(umur)\n    print(f\"Konversi umur ke string: {repr(umur_str)}\")\n\nif __name__ == \"__main__\":\n    demo_types()",
    "quiz": {
      "question": "What is the output of: print('Hello' + 'World')?",
      "options": [
        "HelloWorld",
        "Hello World",
        "Hello+World",
        "Error"
      ],
      "answer": 0,
      "explanation": "String concatenation with + joins without spaces."
    }
  },
  {
    "id": 4,
    "moduleId": 1,
    "module": "Pengenalan Python",
    "title": "4. Basic Input/Output and String Formatting",
    "codeName": "M01-L04",
    "mdFile": "lessons/M01-L04.md",
    "defaultCode": "def format_showcase():\n    item = \"Laptop Pro\"\n    harga = 18500000.75\n    diskon = 0.15\n    harga_akhir = harga * (1 - diskon)\n    print(f\"Produk      : {item}\")\n    print(f\"Harga Asli  : Rp {harga:,.2f}\")\n    print(f\"Diskon      : {diskon:.0%}\")\n    print(f\"Harga Akhir : Rp {harga_akhir:,.2f}\")\n    x = 42\n    y = 58\n    print(f\"\\nDebug: {x=}, {y=}, {x+y=}\")\n\nif __name__ == \"__main__\":\n    format_showcase()",
    "quiz": {
      "question": "Which of these is a valid variable name in Python?",
      "options": [
        "1var",
        "var-name",
        "_var",
        "var name"
      ],
      "answer": 2,
      "explanation": "Underscore-starting names are valid; others have syntax errors."
    }
  },
  {
    "id": 5,
    "moduleId": 2,
    "module": "Kontrol Alur",
    "title": "5. Conditional Statements: if, elif, else",
    "codeName": "M02-L01",
    "mdFile": "lessons/M02-L01.md",
    "defaultCode": "def cek_kelayakan(nilai: float, kehadiran: float) -> str:\n    if nilai >= 85 and kehadiran >= 90:\n        return \"Grade A - Lulus dengan Pujian (Cum Laude)\"\n    elif nilai >= 70 and kehadiran >= 75:\n        return \"Grade B - Lulus Reguler\"\n    elif nilai >= 55:\n        return \"Grade C - Lulus Bersyarat (Tugas Tambahan)\"\n    else:\n        return \"Grade D/E - Tidak Lulus (Wajib Mengulang)\"\n\nif __name__ == \"__main__\":\n    for n, k in [(92, 95), (78, 80), (62, 70), (45, 60)]:\n        print(f\"Nilai: {n}, Presensi: {k}% -> {cek_kelayakan(n, k)}\")",
    "quiz": {
      "question": "What does 'elif' stand for?",
      "options": [
        "Else If",
        "Else In",
        "Elastic If",
        "None"
      ],
      "answer": 0,
      "explanation": "'elif' is short for 'else if'."
    }
  },
  {
    "id": 6,
    "moduleId": 2,
    "module": "Kontrol Alur",
    "title": "6. Loops: while and for",
    "codeName": "M02-L02",
    "mdFile": "lessons/M02-L02.md",
    "defaultCode": "def demo_loops():\n    print(\"1. For Loop dengan enumerate & range:\")\n    for idx, item in enumerate([\"Apel\", \"Jeruk\", \"Mangga\", \"Pisang\"], start=1):\n        print(f\"  {idx}. {item}\")\n    print(\"\\n2. While Loop dengan break & continue:\")\n    angka = 0\n    while angka < 10:\n        angka += 1\n        if angka % 2 == 0:\n            continue\n        if angka > 7:\n            break\n        print(f\"  Ganjil ditemukan: {angka}\")\n    else:\n        print(\"  Loop selesai normal\")\n\nif __name__ == \"__main__\":\n    demo_loops()",
    "quiz": {
      "question": "Which loop executes at least once?",
      "options": [
        "for",
        "while",
        "do-while",
        "None (Python has no do-while)"
      ],
      "answer": 3,
      "explanation": "Python has no built-in do-while; while/for may execute zero times."
    }
  },
  {
    "id": 7,
    "moduleId": 2,
    "module": "Kontrol Alur",
    "title": "7. Logical Operators and Boolean Expressions",
    "codeName": "M02-L03",
    "mdFile": "lessons/M02-L03.md",
    "defaultCode": "def validasi_akses(role: str, is_active: bool, level: int) -> bool:\n    is_admin = (role == \"admin\" or role == \"superuser\")\n    return is_active and (is_admin or level >= 5)\n\nif __name__ == \"__main__\":\n    for role, active, lvl in [(\"admin\", True, 1), (\"editor\", True, 6), (\"editor\", False, 8), (\"guest\", True, 2)]:\n        print(f\"Role: {role:<10} Aktif: {str(active):<5} Level: {lvl} -> {validasi_akses(role, active, lvl)}\")",
    "quiz": {
      "question": "What does 'break' do?",
      "options": [
        "Skips to next iteration",
        "Exits loop",
        "Pauses loop",
        "Restarts loop"
      ],
      "answer": 1,
      "explanation": "'break' immediately exits the nearest enclosing loop."
    }
  },
  {
    "id": 8,
    "moduleId": 2,
    "module": "Kontrol Alur",
    "title": "8. Match-Case Statements (Python 3.10+)",
    "codeName": "M02-L04",
    "mdFile": "lessons/M02-L04.md",
    "defaultCode": "def handle_command(command: str | list[str]):\n    tokens = command.split() if isinstance(command, str) else command\n    match tokens:\n        case [\"quit\" | \"exit\"]:\n            print(\"Sistem dimatikan.\")\n        case [\"load\", filename]:\n            print(f\"Memuat berkas: '{filename}'\")\n        case [\"save\", filename, \"--force\"]:\n            print(f\"Paksa menyimpan ke: '{filename}'\")\n        case [\"save\", filename]:\n            print(f\"Menyimpan ke: '{filename}'\")\n        case [\"move\", (\"up\" | \"down\" | \"left\" | \"right\") as direction, steps]:\n            print(f\"Bergerak {direction} sejauh {steps} langkah.\")\n        case _:\n            print(f\"Perintah tidak dikenali: {command}\")\n\nif __name__ == \"__main__\":\n    for p in [\"load config.json\", \"save data.db --force\", \"move up 10\", \"quit\", \"invalid cmd\"]:\n        handle_command(p)",
    "quiz": {
      "question": "What is the result of: True and False?",
      "options": [
        "True",
        "False",
        "Error",
        "None"
      ],
      "answer": 1,
      "explanation": "Logical AND returns False if any operand is False."
    }
  },
  {
    "id": 9,
    "moduleId": 3,
    "module": "Struktur Data",
    "title": "9. Lists: Creation, Indexing, and Basic Operations",
    "codeName": "M03-L01",
    "mdFile": "lessons/M03-L01.md",
    "defaultCode": "def demo_list_operations():\n    angka = [10, 20, 30, 40, 50]\n    print(f\"List awal      : {angka}\")\n    print(f\"Tiga pertama   : {angka[:3]}\")\n    print(f\"Reverse (balik): {angka[::-1]}\")\n    angka.append(60)\n    angka.insert(1, 15)\n    print(f\"Setelah append & insert: {angka}\")\n    print(f\"Popped element : {angka.pop()}\")\n    print(f\"List akhir     : {angka}\")\n\nif __name__ == \"__main__\":\n    demo_list_operations()",
    "quiz": {
      "question": "Which data structure is mutable?",
      "options": [
        "tuple",
        "list",
        "str",
        "frozenset"
      ],
      "answer": 1,
      "explanation": "Lists are mutable; tuples, strings, and frozensets are immutable."
    }
  },
  {
    "id": 10,
    "moduleId": 3,
    "module": "Struktur Data",
    "title": "10. List Comprehensions and Advanced Manipulation",
    "codeName": "M03-L02",
    "mdFile": "lessons/M03-L02.md",
    "defaultCode": "def demo_comprehensions():\n    angka = range(1, 11)\n    genap_kuadrat = [x**2 for x in angka if x % 2 == 0]\n    print(f\"Kuadrat genap (1-10): {genap_kuadrat}\")\n    matriks = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n    flattened = [val for baris in matriks for val in baris]\n    print(f\"Flatten matriks     : {flattened}\")\n    clean_nama = [n.capitalize() for n in [\"alice\", \"BOB\", \"cHaRLie\"]]\n    print(f\"Format nama         : {clean_nama}\")\n\nif __name__ == \"__main__\":\n    demo_comprehensions()",
    "quiz": {
      "question": "How do you access the last element of a list 'arr'?",
      "options": [
        "arr[-1]",
        "arr.last()",
        "arr[0]",
        "arr[end]"
      ],
      "answer": 0,
      "explanation": "Negative indices count from the end: -1 is last element."
    }
  },
  {
    "id": 11,
    "moduleId": 3,
    "module": "Struktur Data",
    "title": "11. Tuples: Immutable Sequences",
    "codeName": "M03-L03",
    "mdFile": "lessons/M03-L03.md",
    "defaultCode": "def demo_tuples():\n    koordinat = (3.14, -7.25, 100.0)\n    x, y, z = koordinat\n    print(f\"Koordinat: x={x}, y={y}, z={z}\")\n    def get_user_stats():\n        return \"andi\", 95, \"A\"\n    username, score, grade = get_user_stats()\n    print(f\"User: {username} | Skor: {score} | Grade: {grade}\")\n    grid = {(0, 0): \"Start\", (1, 2): \"Checkpoint\", (5, 5): \"Finish\"}\n    print(f\"Isi grid di (1,2): {grid[(1, 2)]}\")\n\nif __name__ == \"__main__\":\n    demo_tuples()",
    "quiz": {
      "question": "What does a set do?",
      "options": [
        "Stores ordered elements",
        "Stores unique elements",
        "Stores key-value pairs",
        "Stores immutable sequence"
      ],
      "answer": 1,
      "explanation": "Sets store unique, unordered elements."
    }
  },
  {
    "id": 12,
    "moduleId": 3,
    "module": "Struktur Data",
    "title": "12. Dictionaries: Key-Value Mappings",
    "codeName": "M03-L04",
    "mdFile": "lessons/M03-L04.md",
    "defaultCode": "def demo_dict():\n    user = {\"id\": 101, \"name\": \"Sarah Connor\", \"roles\": [\"admin\", \"editor\"], \"is_active\": True}\n    print(f\"User: {user['name']} (ID: {user['id']})\")\n    print(f\"Email: {user.get('email', 'email_tidak_diatur@domain.com')}\")\n    print(\"\\nDetail User:\")\n    for k, v in user.items():\n        print(f\"  - {k:<10}: {v}\")\n\nif __name__ == \"__main__\":\n    demo_dict()",
    "quiz": {
      "question": "Which method removes and returns the last element of a list?",
      "options": [
        "remove()",
        "pop()",
        "del",
        "discard"
      ],
      "answer": 1,
      "explanation": "pop() removes and returns the last (or specified) element."
    }
  },
  {
    "id": 13,
    "moduleId": 3,
    "module": "Struktur Data",
    "title": "13. Dictionary Comprehensions and Dict Methods",
    "codeName": "M03-L05",
    "mdFile": "lessons/M03-L05.md",
    "defaultCode": "from collections import defaultdict\ndef demo_dict_methods():\n    names = [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"]\n    print(f\"Panjang nama: {{name: len(name) for name in names}}\")\n    grouped = defaultdict(list)\n    for word in [\"apple\", \"banana\", \"avocado\", \"blueberry\", \"cherry\"]:\n        grouped[word[0]].append(word)\n    print(\"\\nPengelompokan kata:\")\n    for letter, items in sorted(grouped.items()):\n        print(f\"  '{letter}': {items}\")\n\nif __name__ == \"__main__\":\n    demo_dict_methods()",
    "quiz": {
      "question": "What is the output of: dict([('a',1),('b',2)])?",
      "options": [
        "[('a',1),('b',2)]",
        "{'a':1, 'b':2}",
        "('a',1,'b',2)",
        "Error"
      ],
      "answer": 1,
      "explanation": "dict() constructor creates a dictionary from an iterable of key-value pairs."
    }
  },
  {
    "id": 14,
    "moduleId": 3,
    "module": "Struktur Data",
    "title": "14. Sets: Unordered Unique Collections",
    "codeName": "M03-L06",
    "mdFile": "lessons/M03-L06.md",
    "defaultCode": "def demo_sets():\n    frontend = {\"HTML\", \"CSS\", \"JavaScript\", \"TypeScript\", \"Python\"}\n    backend = {\"Python\", \"Go\", \"PostgreSQL\", \"Docker\", \"JavaScript\"}\n    print(f\"Frontend: {frontend}\")\n    print(f\"Backend : {backend}\")\n    print(f\"Irisan (Keduanya)        : {frontend & backend}\")\n    print(f\"Gabungan (Semua Skill)   : {frontend | backend}\")\n    print(f\"Frontend saja (Selisih)  : {frontend - backend}\")\n    print(f\"Symmetric Difference     : {frontend ^ backend}\")\n    unik = sorted(set([1, 2, 2, 3, 4, 4, 4, 5]))\n    print(f\"\\nDeduplikasi: {unik}\")\n\nif __name__ == \"__main__\":\n    demo_sets()",
    "quiz": {
      "question": "Which data structure is mutable?",
      "options": [
        "tuple",
        "list",
        "str",
        "frozenset"
      ],
      "answer": 1,
      "explanation": "Lists are mutable; tuples, strings, and frozensets are immutable."
    }
  },
  {
    "id": 15,
    "moduleId": 4,
    "module": "Fungsi & Modul",
    "title": "15. Defining and Calling Functions",
    "codeName": "M04-L01",
    "mdFile": "lessons/M04-L01.md",
    "defaultCode": "def hitung_diskon(total: float, tier: str = \"bronze\") -> float:\n    diskon_map = {\"bronze\": 0.05, \"silver\": 0.10, \"gold\": 0.20, \"platinum\": 0.30}\n    return total * (1.0 - diskon_map.get(tier.lower(), 0.0))\n\nif __name__ == \"__main__\":\n    for t in [\"bronze\", \"silver\", \"gold\", \"platinum\"]:\n        print(f\"Tier {t.title():<10} | Bayar: Rp {hitung_diskon(500000.0, tier=t):,.0f}\")",
    "quiz": {
      "question": "What keyword defines a function?",
      "options": [
        "func",
        "def",
        "function",
        "define"
      ],
      "answer": 1,
      "explanation": "Python uses 'def' to define functions."
    }
  },
  {
    "id": 16,
    "moduleId": 4,
    "module": "Fungsi & Modul",
    "title": "16. Arguments: Positional, Keyword, Default, and *args/**kwargs",
    "codeName": "M04-L02",
    "mdFile": "lessons/M04-L02.md",
    "defaultCode": "def build_query(table: str, *columns, **filters) -> str:\n    cols = \", \".join(columns) if columns else \"*\"\n    query = f\"SELECT {cols} FROM {table}\"\n    if filters:\n        conditions = [f\"{k} = '{v}'\" if isinstance(v, str) else f\"{k} = {v}\" for k, v in filters.items()]\n        query += \" WHERE \" + \" AND \".join(conditions)\n    return query + \";\"\n\nif __name__ == \"__main__\":\n    print(\"Q1:\", build_query(\"users\"))\n    print(\"Q2:\", build_query(\"employees\", \"id\", \"name\", \"salary\", department=\"Engineering\", active=1))",
    "quiz": {
      "question": "What does *args allow?",
      "options": [
        "Keyword arguments",
        "Variable positional arguments",
        "Variable keyword arguments",
        "Arbitrary expressions"
      ],
      "answer": 1,
      "explanation": "*args collects extra positional arguments as a tuple."
    }
  },
  {
    "id": 17,
    "moduleId": 4,
    "module": "Fungsi & Modul",
    "title": "17. Lambda Functions and Higher-Order Functions",
    "codeName": "M04-L03",
    "mdFile": "lessons/M04-L03.md",
    "defaultCode": "def demo_lambdas_hof():\n    karyawan = [{\"name\": \"Budi\", \"age\": 30, \"salary\": 12000000}, {\"name\": \"Siti\", \"age\": 25, \"salary\": 15000000}, {\"name\": \"Dewi\", \"age\": 28, \"salary\": 11000000}]\n    for k in sorted(karyawan, key=lambda x: x[\"salary\"], reverse=True):\n        print(f\"  - {k['name']:<6}: Rp {k['salary']:,}\")\n    angka = [1, 2, 3, 4, 5, 6]\n    print(f\"Filter genap & kuadrat: {list(filter(lambda x: x % 2 == 0, angka))} -> {list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, angka)))}\")\n\nif __name__ == \"__main__\":\n    demo_lambdas_hof()",
    "quiz": {
      "question": "What is the purpose of __name__ == '__main__'?",
      "options": [
        "Import module",
        "Define main function",
        "Check if script is run directly",
        "None"
      ],
      "answer": 2,
      "explanation": "It allows code to run only when the file is executed as a script, not when imported."
    }
  },
  {
    "id": 18,
    "moduleId": 4,
    "module": "Fungsi & Modul",
    "title": "18. Docstrings, Type Hints, and Function Annotations",
    "codeName": "M04-L04",
    "mdFile": "lessons/M04-L04.md",
    "defaultCode": "def transfer_dana(pengirim: str, penerima: str, jumlah: float) -> dict:\n    if jumlah <= 0:\n        return {\"sukses\": False, \"pesan\": \"Jumlah harus > 0\"}\n    return {\"sukses\": True, \"pengirim\": pengirim, \"penerima\": penerima, \"jumlah\": jumlah, \"ref\": f\"TRX-{hash((pengirim, penerima, jumlah)) & 0xFFFFFF:06X}\"}\n\nif __name__ == \"__main__\":\n    print(transfer_dana(\"ACC-001\", \"ACC-002\", 750000.0))",
    "quiz": {
      "question": "Which statement imports a specific function from a module?",
      "options": [
        "import module",
        "from module import function",
        "include module",
        "use module.function"
      ],
      "answer": 1,
      "explanation": "'from module import function' imports just that function."
    }
  },
  {
    "id": 19,
    "moduleId": 4,
    "module": "Fungsi & Modul",
    "title": "19. Modules and Packages",
    "codeName": "M04-L05",
    "mdFile": "lessons/M04-L05.md",
    "defaultCode": "import math, random\nfrom datetime import datetime\ndef demo_modules():\n    print(f\"Waktu Sekarang : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\")\n    print(f\"Konstanta Pi   : {math.pi:.5f}\")\n    print(f\"Akar dari 144  : {math.isqrt(144)}\")\n    print(f\"Pilihan Acak   : {random.choice(['Python','Golang','Rust','TypeScript'])}\")\n\nif __name__ == \"__main__\":\n    demo_modules()",
    "quiz": {
      "question": "What is a docstring?",
      "options": [
        "String literal as first statement in function/class/module",
        "Comment",
        "Type hint",
        "None"
      ],
      "answer": 0,
      "explanation": "A docstring is a string literal that appears as the first statement in a function, class, or module."
    }
  },
  {
    "id": 20,
    "moduleId": 4,
    "module": "Fungsi & Modul",
    "title": "20. The if __name__ == '__main__' Pattern",
    "codeName": "M04-L06",
    "mdFile": "lessons/M04-L06.md",
    "defaultCode": "def greeting(nama: str) -> str:\n    return f\"Halo {nama}, selamat datang di Python LP!\"\ndef main():\n    print(\"Script dieksekusi secara langsung (entrypoint utama).\")\n    print(greeting(\"Developer\"))\nif __name__ == \"__main__\":\n    main()",
    "quiz": {
      "question": "What keyword defines a function?",
      "options": [
        "func",
        "def",
        "function",
        "define"
      ],
      "answer": 1,
      "explanation": "Python uses 'def' to define functions."
    }
  },
  {
    "id": 21,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "21. Classes and Objects: Basics of OOP",
    "codeName": "M05-L01",
    "mdFile": "lessons/M05-L01.md",
    "defaultCode": "class Mobil:\n    def __init__(self, merk: str, model: str, tahun: int):\n        self.merk, self.model, self.tahun, self.kecepatan = merk, model, tahun, 0\n    def akselerasi(self, tambah: int):\n        self.kecepatan += tambah\n        print(f\" {self.merk} {self.model}: {self.kecepatan} km/jam\")\n    def rem(self, kurangi: int):\n        self.kecepatan = max(0, self.kecepatan - kurangi)\n        print(f\" Rem: {self.kecepatan} km/jam\")\nif __name__ == \"__main__\":\n    m = Mobil(\"Toyota\", \"GR Yaris\", 2023)\n    m.akselerasi(60); m.akselerasi(40); m.rem(30)",
    "quiz": {
      "question": "What is the first parameter of instance methods by convention?",
      "options": [
        "self",
        "this",
        "obj",
        "instance"
      ],
      "answer": 0,
      "explanation": "Python uses 'self' as the first parameter of instance methods."
    }
  },
  {
    "id": 22,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "22. Instance Variables, Class Variables, and Methods",
    "codeName": "M05-L02",
    "mdFile": "lessons/M05-L02.md",
    "defaultCode": "class RekeningBank:\n    bunga_tahunan = 0.04\n    total_nasabah = 0\n    def __init__(self, pemilik: str, saldo_awal: float):\n        self.pemilik, self.saldo = pemilik, saldo_awal\n        RekeningBank.total_nasabah += 1\n    def setor(self, nominal: float):\n        self.saldo += nominal\n        print(f\"[+] {self.pemilik} setor Rp {nominal:,.0f} | Saldo: Rp {self.saldo:,.0f}\")\n    @classmethod\n    def ubah_bunga(cls, baru: float):\n        cls.bunga_tahunan = baru\n        print(f\"[*] Bunga: {cls.bunga_tahunan:.1%}\")\nif __name__ == \"__main__\":\n    r1 = RekeningBank(\"Ahmad\", 1000000)\n    r2 = RekeningBank(\"Budi\", 2500000)\n    r1.setor(500000)\n    print(f\"Total Nasabah: {RekeningBank.total_nasabah}\")\n    RekeningBank.ubah_bunga(0.05)",
    "quiz": {
      "question": "What does super() do?",
      "options": [
        "Calls parent method",
        "Creates subclass",
        "Checks inheritance",
        "None"
      ],
      "answer": 0,
      "explanation": "super() returns a temporary object of the parent class to allow method calls."
    }
  },
  {
    "id": 23,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "23. Inheritance and Method Resolution Order (MRO)",
    "codeName": "M05-L03",
    "mdFile": "lessons/M05-L03.md",
    "defaultCode": "class Animal:\n    def __init__(self, name: str): self.name = name\n    def speak(self) -> str: return \"Some sound\"\nclass Dog(Animal):\n    def speak(self) -> str: return f\"{self.name} says: Woof!\"\nclass Cat(Animal):\n    def speak(self) -> str: return f\"{self.name} says: Meow!\"\nif __name__ == \"__main__\":\n    for a in [Dog(\"Buddy\"), Cat(\"Luna\")]:\n        print(a.speak())\n    print(f\"Dog MRO: {[c.__name__ for c in Dog.__mro__]}\")",
    "quiz": {
      "question": "Which method is called when an object is converted to string with str()?",
      "options": [
        "__str__",
        "__repr__",
        "__toString__",
        "__string__"
      ],
      "answer": 0,
      "explanation": "__str__ is called by str() and print() for user-friendly string representation."
    }
  },
  {
    "id": 24,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "24. Encapsulation: Public, Private, and Protected",
    "codeName": "M05-L04",
    "mdFile": "lessons/M05-L04.md",
    "defaultCode": "class SecureAccount:\n    def __init__(self, username: str, pin: str, saldo: float):\n        self.username, self._level, self.__pin, self.__saldo = username, \"Silver\", pin, saldo\n    def get_saldo(self, pin: str):\n        return self.__saldo if pin == self.__pin else \"Akses Ditolak: PIN Salah\"\n    def verify(self, pin: str) -> bool: return self.__pin == pin\nif __name__ == \"__main__\":\n    acc = SecureAccount(\"citra\", \"1234\", 5000000.0)\n    print(f\"User: {acc.username}\")\n    print(f\"Cek Saldo benar: Rp {acc.get_saldo('1234'):,}\")\n    print(f\"Cek Saldo salah: {acc.get_saldo('0000')}\")",
    "quiz": {
      "question": "What does a property decorator do?",
      "options": [
        "Makes method static",
        "Creates getter/setter for attribute",
        "Hides attribute",
        "None"
      ],
      "answer": 1,
      "explanation": "@property turns a method into a read-only attribute; can pair with setter."
    }
  },
  {
    "id": 25,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "25. Properties, Getters, and Setters",
    "codeName": "M05-L05",
    "mdFile": "lessons/M05-L05.md",
    "defaultCode": "class Temperature:\n    def __init__(self, celsius: float = 0.0): self._celsius = celsius\n    @property\n    def celsius(self) -> float: return self._celsius\n    @celsius.setter\n    def celsius(self, value: float):\n        if value < -273.15: raise ValueError(\"Suhu di bawah nol mutlak\")\n        self._celsius = value\n    @property\n    def fahrenheit(self) -> float: return (self._celsius * 9/5) + 32\nif __name__ == \"__main__\":\n    t = Temperature(25)\n    print(f\"{t.celsius}C == {t.fahrenheit}F\")\n    t.celsius = 100\n    print(f\"Titik didih: {t.celsius}C == {t.fahrenheit}F\")",
    "quiz": {
      "question": "What is duck typing?",
      "options": [
        "Type checking at compile time",
        "Type checking at runtime",
        "'If it walks like a duck...'",
        "None"
      ],
      "answer": 2,
      "explanation": "Duck typing means object suitability is determined by presence of methods/attributes, not explicit type."
    }
  },
  {
    "id": 26,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "26. Special (Dunder) Methods",
    "codeName": "M05-L06",
    "mdFile": "lessons/M05-L06.md",
    "defaultCode": "class Vector2D:\n    def __init__(self, x: float, y: float): self.x, self.y = x, y\n    def __repr__(self) -> str: return f\"Vector2D(x={self.x}, y={self.y})\"\n    def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y)\n    def __eq__(self, other): return isinstance(other, Vector2D) and self.x == other.x and self.y == other.y\nif __name__ == \"__main__\":\n    v1, v2 = Vector2D(2, 4), Vector2D(3, 1)\n    print(f\"{v1} + {v2} = {v1+v2}\")\n    print(f\"Equal? {v1+v2 == Vector2D(5,5)}\")",
    "quiz": {
      "question": "What is the first parameter of instance methods by convention?",
      "options": [
        "self",
        "this",
        "obj",
        "instance"
      ],
      "answer": 0,
      "explanation": "Python uses 'self' as the first parameter of instance methods."
    }
  },
  {
    "id": 27,
    "moduleId": 5,
    "module": "Object-Oriented Programming",
    "title": "27. Polymorphism and Duck Typing",
    "codeName": "M05-L07",
    "mdFile": "lessons/M05-L07.md",
    "defaultCode": "class PDFExporter:\n    def export(self, data: str) -> str: return f\"[PDF] {data}\"\nclass HTMLExporter:\n    def export(self, data: str) -> str: return f\"<html><body>{data}</body></html>\"\ndef render_document(exporter, content: str): print(exporter.export(content))\nif __name__ == \"__main__\":\n    for exp in [PDFExporter(), HTMLExporter()]:\n        render_document(exp, \"Laporan Keuangan Q3\")",
    "quiz": {
      "question": "What does super() do?",
      "options": [
        "Calls parent method",
        "Creates subclass",
        "Checks inheritance",
        "None"
      ],
      "answer": 0,
      "explanation": "super() returns a temporary object of the parent class to allow method calls."
    }
  },
  {
    "id": 28,
    "moduleId": 6,
    "module": "Error Handling",
    "title": "28. Exceptions: try, except, else, finally",
    "codeName": "M06-L01",
    "mdFile": "lessons/M06-L01.md",
    "defaultCode": "def bagi_angka(a: float, b: float):\n    try: hasil = a / b\n    except ZeroDivisionError as err: print(f\"Error: Pembagian nol! ({err})\")\n    except TypeError as err: print(f\"Error: Tipe salah! ({err})\")\n    else: print(f\"Sukses: {a} / {b} = {hasil:.2f}\")\n    finally: print(\"   -> finally selalu dieksekusi\")\nif __name__ == \"__main__\":\n    bagi_angka(10, 2)\n    print(\"---\")\n    bagi_angka(10, 0)",
    "quiz": {
      "question": "Which keyword is used to catch exceptions?",
      "options": [
        "catch",
        "except",
        "handle",
        "try"
      ],
      "answer": 1,
      "explanation": "'except' is used to catch and handle exceptions."
    }
  },
  {
    "id": 29,
    "moduleId": 6,
    "module": "Error Handling",
    "title": "29. Raising Exceptions and Custom Exceptions",
    "codeName": "M06-L02",
    "mdFile": "lessons/M06-L02.md",
    "defaultCode": "class InsufficientFundsError(Exception):\n    def __init__(self, saldo: float, tarik: float):\n        super().__init__(f\"Saldo Rp {saldo:,.0f} kurang untuk tarik Rp {tarik:,.0f}\")\n        self.saldo, self.tarik = saldo, tarik\ndef tarik_tunai(saldo: float, jumlah: float) -> float:\n    if jumlah > saldo: raise InsufficientFundsError(saldo, jumlah)\n    return saldo - jumlah\nif __name__ == \"__main__\":\n    try: tarik_tunai(50000.0, 100000.0)\n    except InsufficientFundsError as e: print(f\"Tertangkap: {e}\")",
    "quiz": {
      "question": "What does 'finally' do in a try-except block?",
      "options": [
        "Runs only if no exception",
        "Runs only if exception occurs",
        "Always runs regardless",
        "None"
      ],
      "answer": 2,
      "explanation": "'finally' executes whether an exception occurs or not, typically for cleanup."
    }
  },
  {
    "id": 30,
    "moduleId": 6,
    "module": "Error Handling",
    "title": "30. Context Managers and the with Statement",
    "codeName": "M06-L03",
    "mdFile": "lessons/M06-L03.md",
    "defaultCode": "class TimerBlock:\n    def __enter__(self):\n        import time; self.start = time.perf_counter(); print(\"Mulai ukur...\"); return self\n    def __exit__(self, *a):\n        import time; print(f\"Selesai dalam {(time.perf_counter()-self.start)*1000:.3f} ms\"); return False\nif __name__ == \"__main__\":\n    with TimerBlock():\n        print(sum(x**2 for x in range(100000)))",
    "quiz": {
      "question": "How do you raise a custom exception?",
      "options": [
        "throw Exception()",
        "raise Exception()",
        "error Exception()",
        "except Exception()"
      ],
      "answer": 1,
      "explanation": "Use 'raise' followed by an exception instance or class."
    }
  },
  {
    "id": 31,
    "moduleId": 6,
    "module": "Error Handling",
    "title": "31. Exception Chaining and Best Practices",
    "codeName": "M06-L04",
    "mdFile": "lessons/M06-L04.md",
    "defaultCode": "def query_database(sql: str):\n    if \"DR\" + \"OP\" in sql: raise PermissionError(\"Operasi dilarang\")\n    return \"Data berhasil dimuat\"\ndef load_user_report():\n    try: query_database(\"DR\" + \"OP TABLE users;\")\n    except PermissionError as orig_err: raise RuntimeError(\"Gagal laporan\") from orig_err\nif __name__ == \"__main__\":\n    try: load_user_report()\n    except RuntimeError as e: print(f\"Error: {e} | cause: {e.__cause__}\")",
    "quiz": {
      "question": "What is the base class for all built-in exceptions?",
      "options": [
        "BaseException",
        "Exception",
        "Error",
        "RuntimeError"
      ],
      "answer": 1,
      "explanation": "Most built-in exceptions inherit from 'Exception' (BaseException is the absolute root)."
    }
  },
  {
    "id": 32,
    "moduleId": 7,
    "module": "File I/O & Data",
    "title": "32. Reading and Writing Text Files",
    "codeName": "M07-L01",
    "mdFile": "lessons/M07-L01.md",
    "defaultCode": "import io\ndef demo_file_io():\n    buf = io.StringIO()\n    buf.write(\"Baris 1: Halo Python File I/O!\\n\")\n    buf.write(\"Baris 2: Menyimpan data teks.\\n\")\n    buf.seek(0)\n    for line in buf: print(\" ->\", line.strip())\nif __name__ == \"__main__\":\n    demo_file_io()",
    "quiz": {
      "question": "Which mode opens a file for reading text?",
      "options": [
        "'r'",
        "'w'",
        "'a'",
        "'x'"
      ],
      "answer": 0,
      "explanation": "'r' is read mode (default). 'w' write, 'a' append, 'x' exclusive creation."
    }
  },
  {
    "id": 33,
    "moduleId": 7,
    "module": "File I/O & Data",
    "title": "33. Working with CSV and JSON Data",
    "codeName": "M07-L02",
    "mdFile": "lessons/M07-L02.md",
    "defaultCode": "import json, csv, io\ndef demo_json_csv():\n    data = {\"course\": \"Python LP\", \"lessons\": 55, \"topics\": [\"Basics\", \"OOP\", \"Async\"]}\n    print(json.dumps(data, indent=2))\n    csv_data = \"nama,peran,skor\\nBudi,Backend,90\\nSiti,Frontend,95\"\n    for row in csv.DictReader(io.StringIO(csv_data)): print(row)\nif __name__ == \"__main__\":\n    demo_json_csv()",
    "quiz": {
      "question": "What is the safest way to open a file?",
      "options": [
        "open(); close()",
        "with open() as f:",
        "try: open(); finally: close()",
        "Using os.open()"
      ],
      "answer": 1,
      "explanation": "'with' statement ensures proper cleanup even if exceptions occur."
    }
  },
  {
    "id": 34,
    "moduleId": 7,
    "module": "File I/O & Data",
    "title": "34. Pickle and Binary Serialization",
    "codeName": "M07-L03",
    "mdFile": "lessons/M07-L03.md",
    "defaultCode": "import pickle\ndef demo_pickle():\n    data = {\"user_id\": 42, \"username\": \"developer\", \"preferences\": {\"theme\": \"dark\"}}\n    b = pickle.dumps(data)\n    print(f\"bytes: {len(b)}, restored: {pickle.loads(b) == data}\")\nif __name__ == \"__main__\":\n    demo_pickle()",
    "quiz": {
      "question": "Which module is used for JSON serialization?",
      "options": [
        "csv",
        "json",
        "pickle",
        "yaml"
      ],
      "answer": 1,
      "explanation": "The 'json' module provides json.load() and json.dump()."
    }
  },
  {
    "id": 35,
    "moduleId": 7,
    "module": "File I/O & Data",
    "title": "35. Working with Paths: os.path and pathlib",
    "codeName": "M07-L04",
    "mdFile": "lessons/M07-L04.md",
    "defaultCode": "from pathlib import Path\ndef demo_pathlib():\n    p = Path(\"src/modules/submodule/app.py\")\n    print(f\"Path: {p}, name: {p.name}, parent: {p.parent}, new: {p.with_suffix('.min.js')}\")\n    print(f\"Join: {Path('/data') / 'logs' / 'server.log'}\")\nif __name__ == \"__main__\":\n    demo_pathlib()",
    "quiz": {
      "question": "How do you read all lines of a file into a list?",
      "options": [
        "f.read()",
        "f.readlines()",
        "f.read().splitlines()",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "readlines() returns list with newlines; read().splitlines() removes newlines. Both are valid."
    }
  },
  {
    "id": 36,
    "moduleId": 7,
    "module": "File I/O & Data",
    "title": "36. File System Operations",
    "codeName": "M07-L05",
    "mdFile": "lessons/M07-L05.md",
    "defaultCode": "import os, tempfile\ndef demo_filesystem():\n    print(f\"CWD: {os.getcwd()}\")\n    print(f\"Temp: {tempfile.gettempdir()}\")\n    print(f\"sep: {repr(os.sep)}\")\nif __name__ == \"__main__\":\n    demo_filesystem()",
    "quiz": {
      "question": "What does 'rb' mode do?",
      "options": [
        "Read binary",
        "Read both",
        "Read with backup",
        "None"
      ],
      "answer": 0,
      "explanation": "'rb' opens file in binary read mode (for images, etc.)."
    }
  },
  {
    "id": 37,
    "moduleId": 8,
    "module": "Konsep Lanjutan",
    "title": "37. Iterators and the Iterator Protocol",
    "codeName": "M08-L01",
    "mdFile": "lessons/M08-L01.md",
    "defaultCode": "class CountDown:\n    def __init__(self, start: int): self.current = start\n    def __iter__(self): return self\n    def __next__(self) -> int:\n        if self.current <= 0: raise StopIteration\n        val = self.current; self.current -= 1; return val\nif __name__ == \"__main__\":\n    for num in CountDown(5): print(f\"T-minus {num}...\")\n    print(\"Liftoff!\")",
    "quiz": {
      "question": "What file marks a directory as a Python package?",
      "options": [
        "package.py",
        "main.py",
        "__init__.py",
        "setup.py"
      ],
      "answer": 2,
      "explanation": "__init__.py (can be empty) marks a directory as a package."
    }
  },
  {
    "id": 38,
    "moduleId": 8,
    "module": "Konsep Lanjutan",
    "title": "38. Generators and yield",
    "codeName": "M08-L02",
    "mdFile": "lessons/M08-L02.md",
    "defaultCode": "def fibonacci_gen(limit: int):\n    a, b = 0, 1\n    for _ in range(limit): yield a; a, b = b, a + b\nif __name__ == \"__main__\":\n    print(list(fibonacci_gen(10)))",
    "quiz": {
      "question": "What is the difference between 'import module' and 'from module import *'?",
      "options": [
        "No difference",
        "First imports all, second imports specific",
        "First keeps namespace, second pollutes",
        "Second is faster"
      ],
      "answer": 2,
      "explanation": "from module import * brings all names into current namespace, which can cause conflicts."
    }
  },
  {
    "id": 39,
    "moduleId": 8,
    "module": "Konsep Lanjutan",
    "title": "39. Decorators: Functions That Wrap Functions",
    "codeName": "M08-L03",
    "mdFile": "lessons/M08-L03.md",
    "defaultCode": "import functools, time\ndef timer_decorator(func):\n    @functools.wraps(func)\n    def wrapper(*a, **kw):\n        t0 = time.perf_counter(); r = func(*a, **kw)\n        print(f\"{func.__name__} {(time.perf_counter()-t0)*1000:.3f} ms\"); return r\n    return wrapper\n@timer_decorator\ndef hitung_faktorial(n: int) -> int:\n    import math; return math.factorial(n)\nif __name__ == \"__main__\":\n    print(len(str(hitung_faktorial(500))))",
    "quiz": {
      "question": "How do you import a module from a parent package?",
      "options": [
        "import parent.module",
        "from .. import module",
        "import ..module",
        "None"
      ],
      "answer": 1,
      "explanation": "Relative imports use dots: 'from .. import module' goes up one level."
    }
  },
  {
    "id": 40,
    "moduleId": 8,
    "module": "Konsep Lanjutan",
    "title": "40. Contextlib and Advanced Context Managers",
    "codeName": "M08-L04",
    "mdFile": "lessons/M08-L04.md",
    "defaultCode": "from contextlib import contextmanager\n@contextmanager\ndef temporary_flag(obj, attr, val):\n    old = getattr(obj, attr); setattr(obj, attr, val)\n    try: yield obj\n    finally: setattr(obj, attr, old)\nclass AppConfig: debug_mode = False\nif __name__ == \"__main__\":\n    cfg = AppConfig()\n    print(cfg.debug_mode)\n    with temporary_flag(cfg, \"debug_mode\", True): print(cfg.debug_mode)\n    print(cfg.debug_mode)",
    "quiz": {
      "question": "What does sys.path control?",
      "options": [
        "System path",
        "Module search paths",
        "Executable path",
        "None"
      ],
      "answer": 1,
      "explanation": "sys.path is a list of directories Python searches for modules."
    }
  },
  {
    "id": 41,
    "moduleId": 8,
    "module": "Konsep Lanjutan",
    "title": "41. Descriptors and the Descriptor Protocol",
    "codeName": "M08-L05",
    "mdFile": "lessons/M08-L05.md",
    "defaultCode": "class NonNegative:\n    def __init__(self, name: str): self.name = name\n    def __get__(self, inst, owner): return inst.__dict__.get(self.name, 0) if inst else self\n    def __set__(self, inst, value):\n        if value < 0: raise ValueError(f\"{self.name} negatif!\")\n        inst.__dict__[self.name] = value\nclass Product:\n    price = NonNegative(\"price\"); stock = NonNegative(\"stock\")\n    def __init__(self, n, p, s): self.name, self.price, self.stock = n, p, s\nif __name__ == \"__main__\":\n    print(Product(\"Keyboard\", 850000, 15).price)",
    "quiz": {
      "question": "What is __all__ used for?",
      "options": [
        "Define all modules",
        "Control 'from module import *' exports",
        "List all functions",
        "None"
      ],
      "answer": 1,
      "explanation": "__all__ in a module defines which names are exported with 'import *'."
    }
  },
  {
    "id": 42,
    "moduleId": 8,
    "module": "Konsep Lanjutan",
    "title": "42. Metaclasses and Class Creation",
    "codeName": "M08-L06",
    "mdFile": "lessons/M08-L06.md",
    "defaultCode": "class AutoMethodMeta(type):\n    def __new__(cls, name, bases, dct):\n        dct[\"created_by\"] = \"AutoMethodMeta\"; dct[\"registry_name\"] = name.lower()\n        return super().__new__(cls, name, bases, dct)\nclass BasePlugin(metaclass=AutoMethodMeta): pass\nclass AudioPlugin(BasePlugin):\n    def process(self): return \"Memproses audio...\"\nif __name__ == \"__main__\":\n    p = AudioPlugin(); print(p.registry_name, p.created_by, p.process())",
    "quiz": {
      "question": "What file marks a directory as a Python package?",
      "options": [
        "package.py",
        "main.py",
        "__init__.py",
        "setup.py"
      ],
      "answer": 2,
      "explanation": "__init__.py (can be empty) marks a directory as a package."
    }
  },
  {
    "id": 43,
    "moduleId": 9,
    "module": "Konkurensi & Paralelisme",
    "title": "43. Threading: Running Code Concurrently",
    "codeName": "M09-L01",
    "mdFile": "lessons/M09-L01.md",
    "defaultCode": "import threading, time\ndef worker(i, results):\n    time.sleep(0.05); results.append(f\"Hasil {i}\")\ndef demo_threading():\n    hasil = []\n    threads = [threading.Thread(target=worker, args=(i, hasil)) for i in range(1, 4)]\n    for t in threads: t.start()\n    for t in threads: t.join()\n    print(hasil)\nif __name__ == \"__main__\":\n    demo_threading()",
    "quiz": {
      "question": "What command creates a virtual environment?",
      "options": [
        "pip install venv",
        "python -m venv venv",
        "virtualenv create",
        "conda create"
      ],
      "answer": 1,
      "explanation": "Standard library: 'python -m venv venv'. virtualenv is third-party, conda is Anaconda."
    }
  },
  {
    "id": 44,
    "moduleId": 9,
    "module": "Konkurensi & Paralelisme",
    "title": "44. Multiprocessing: True Parallel Execution",
    "codeName": "M09-L02",
    "mdFile": "lessons/M09-L02.md",
    "defaultCode": "def hitung_kuadrat(n: int) -> int: return n * n\ndef demo_multiprocessing():\n    data = [10, 20, 30, 40, 50]\n    print([hitung_kuadrat(x) for x in data])\nif __name__ == \"__main__\":\n    demo_multiprocessing()",
    "quiz": {
      "question": "How do you activate a virtual environment on Linux/macOS?",
      "options": [
        "activate",
        "venv activate",
        "source venv/bin/activate",
        "start venv"
      ],
      "answer": 2,
      "explanation": "On POSIX systems: 'source venv/bin/activate'. On Windows: 'venv\\Scripts\\activate'."
    }
  },
  {
    "id": 45,
    "moduleId": 9,
    "module": "Konkurensi & Paralelisme",
    "title": "45. Asyncio: Asynchronous I/O",
    "codeName": "M09-L03",
    "mdFile": "lessons/M09-L03.md",
    "defaultCode": "import asyncio\nasync def fetch_api(endpoint: str, delay: float) -> dict:\n    await asyncio.sleep(delay); return {\"endpoint\": endpoint, \"status\": 200}\nasync def main_async():\n    results = await asyncio.gather(fetch_api(\"/users\", 0.05), fetch_api(\"/products\", 0.08), fetch_api(\"/orders\", 0.03))\n    for r in results: print(r)\nif __name__ == \"__main__\":\n    asyncio.run(main_async())",
    "quiz": {
      "question": "What command installs packages from requirements.txt?",
      "options": [
        "pip install requirements.txt",
        "pip install -r requirements.txt",
        "pip install all",
        "pip install ."
      ],
      "answer": 1,
      "explanation": "'pip install -r requirements.txt' installs all listed dependencies."
    }
  },
  {
    "id": 46,
    "moduleId": 9,
    "module": "Konkurensi & Paralelisme",
    "title": "46. Concurrent Futures: ThreadPoolExecutor and ProcessPoolExecutor",
    "codeName": "M09-L04",
    "mdFile": "lessons/M09-L04.md",
    "defaultCode": "from concurrent.futures import ThreadPoolExecutor\ndef fetch_url_simulasi(url: str) -> str: return f\"200 OK {url}\"\ndef demo_futures():\n    urls = [\"https://api.site.com/a\",\"https://api.site.com/b\",\"https://api.site.com/c\"]\n    print(list(ThreadPoolExecutor(max_workers=3).map(fetch_url_simulasi, urls)))\nif __name__ == \"__main__\":\n    demo_futures()",
    "quiz": {
      "question": "What does 'pip freeze' do?",
      "options": [
        "Shows outdated packages",
        "Lists all installed packages with versions",
        "Uninstalls packages",
        "None"
      ],
      "answer": 1,
      "explanation": "'pip freeze' outputs installed packages in requirements format."
    }
  },
  {
    "id": 47,
    "moduleId": 9,
    "module": "Konkurensi & Paralelisme",
    "title": "47. Choosing the Right Concurrency Model",
    "codeName": "M09-L05",
    "mdFile": "lessons/M09-L05.md",
    "defaultCode": "def concurrency_guide():\n    for s, sol, n in [(\"I/O Bound\",\"asyncio / ThreadPool\",\"non-blocking\"),(\"CPU Bound\",\"multiprocessing\",\"bypass GIL\"),(\"Simple\",\"Sync\",\"debug mudah\")]:\n        print(f\"{s}: {sol} ({n})\")\nif __name__ == \"__main__\":\n    concurrency_guide()",
    "quiz": {
      "question": "What is the purpose of a virtual environment?",
      "options": [
        "Speed up Python",
        "Isolate project dependencies",
        "Create new Python version",
        "None"
      ],
      "answer": 1,
      "explanation": "Virtual environments isolate dependencies per project, avoiding conflicts."
    }
  },
  {
    "id": 48,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "48. Writing Tests with unittest and pytest",
    "codeName": "M10-L01",
    "mdFile": "lessons/M10-L01.md",
    "defaultCode": "import unittest, io, sys\ndef multiply(a: int, b: int) -> int: return a*b\nclass TestMathOperations(unittest.TestCase):\n    def test_multiply_positive(self): self.assertEqual(multiply(3,4),12)\n    def test_multiply_zero(self): self.assertEqual(multiply(5,0),0)\n    def test_multiply_negative(self): self.assertEqual(multiply(-2,3),-6)\nif __name__ == \"__main__\":\n    buf = io.StringIO()\n    runner = unittest.TextTestRunner(stream=buf, verbosity=2)\n    suite = unittest.TestLoader().loadTestsFromTestCase(TestMathOperations)\n    res = runner.run(suite)\n    print(buf.getvalue()); print(f\"Tests:{res.testsRun} Fail:{len(res.failures)}\")",
    "quiz": {
      "question": "Which style guide is the official Python convention?",
      "options": [
        "Google Style",
        "PEP 8",
        "Airbnb Style",
        "None"
      ],
      "answer": 1,
      "explanation": "PEP 8 is the official Python style guide."
    }
  },
  {
    "id": 49,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "49. Test-Driven Development (TDD) Workflow",
    "codeName": "M10-L02",
    "mdFile": "lessons/M10-L02.md",
    "defaultCode": "def is_palindrome(text: str) -> bool: return \"\".join(c.lower() for c in text if c.isalnum()) == \"\".join(c.lower() for c in text if c.isalnum())[::-1]\ndef test_suite():\n    assert is_palindrome(\"radar\") == True\n    assert is_palindrome(\"Kasur rusak\") == True\n    assert is_palindrome(\"python\") == False\n    print(\"Semua test TDD lolos!\")\nif __name__ == \"__main__\":\n    test_suite()",
    "quiz": {
      "question": "What is a good practice for managing project dependencies?",
      "options": [
        "Use system Python packages",
        "Use virtual environments and requirements.txt",
        "Install globally",
        "Avoid dependencies"
      ],
      "answer": 1,
      "explanation": "Isolate dependencies with venv and pin versions in requirements.txt."
    }
  },
  {
    "id": 50,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "50. Debugging with pdb and IDE Debuggers",
    "codeName": "M10-L03",
    "mdFile": "lessons/M10-L03.md",
    "defaultCode": "def debug_demo():\n    total = 0\n    for i, x in enumerate([10,20,30,40]):\n        total += x; print(f\"Step {i+1}: +{x} total={total}\")\n    return total\nif __name__ == \"__main__\":\n    print(f\"Hasil: {debug_demo()}\")",
    "quiz": {
      "question": "Which tool is commonly used for Python package publishing?",
      "options": [
        "npm",
        "pip",
        "twine",
        "conda"
      ],
      "answer": 2,
      "explanation": "twine is used to upload packages to PyPI."
    }
  },
  {
    "id": 51,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "51. Logging: The Right Way to Print",
    "codeName": "M10-L04",
    "mdFile": "lessons/M10-L04.md",
    "defaultCode": "import logging, sys\ndef demo_logging():\n    logger = logging.getLogger(\"PythonLP\"); logger.setLevel(logging.INFO)\n    if not logger.handlers:\n        h = logging.StreamHandler(sys.stdout); h.setFormatter(logging.Formatter(\"[%(levelname)s] %(message)s\")); logger.addHandler(h)\n    logger.info(\"Server mulai...\")\n    logger.warning(\"Memori 75%\")\n    logger.error(\"Backup gagal\")\nif __name__ == \"__main__\":\n    demo_logging()",
    "quiz": {
      "question": "What is the recommended way to share a Python script with others?",
      "options": [
        "Send .py file",
        "Create a package with setup.py/pyproject.toml",
        "Send via email",
        "Use Google Drive"
      ],
      "answer": 1,
      "explanation": "Proper packaging with pyproject.toml or setup.py makes sharing and installation easy."
    }
  },
  {
    "id": 52,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "52. Code Quality: PEP 8, Linters, and Formatters",
    "codeName": "M10-L05",
    "mdFile": "lessons/M10-L05.md",
    "defaultCode": "def hitung_rata_rata(nums: list[float]) -> float: return sum(nums)/len(nums) if nums else 0.0\nif __name__ == \"__main__\":\n    print(f\"{hitung_rata_rata([85.5,90,78.5,92]):.2f}\")",
    "quiz": {
      "question": "Which community resource is best for Python documentation?",
      "options": [
        "Wikipedia",
        "docs.python.org",
        "Stack Overflow",
        "GitHub Issues"
      ],
      "answer": 1,
      "explanation": "docs.python.org is the official Python documentation."
    }
  },
  {
    "id": 53,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "53. Type Checking with mypy",
    "codeName": "M10-L06",
    "mdFile": "lessons/M10-L06.md",
    "defaultCode": "from typing import TypeAlias\nUserId: TypeAlias = int\nUserData: TypeAlias = dict[str, str | int]\ndef find_user(uid: UserId) -> UserData | None:\n    db: dict[UserId, UserData] = {1: {\"username\": \"alice\",\"age\":28},2: {\"username\":\"bob\",\"age\":34}}\n    return db.get(uid)\nif __name__ == \"__main__\":\n    print(find_user(1)); print(find_user(99))",
    "quiz": {
      "question": "Which style guide is the official Python convention?",
      "options": [
        "Google Style",
        "PEP 8",
        "Airbnb Style",
        "None"
      ],
      "answer": 1,
      "explanation": "PEP 8 is the official Python style guide."
    }
  },
  {
    "id": 54,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "54. Profiling and Performance Optimization",
    "codeName": "M10-L07",
    "mdFile": "lessons/M10-L07.md",
    "defaultCode": "import cProfile, pstats, io\ndef task_komputasi(): return sum(i*i for i in range(10000))\ndef run_profiler():\n    pr = cProfile.Profile(); pr.enable(); task_komputasi(); pr.disable()\n    s = io.StringIO(); pstats.Stats(pr, stream=s).sort_stats('cumulative').print_stats(5)\n    print(s.getvalue())\nif __name__ == \"__main__\":\n    run_profiler()",
    "quiz": {
      "question": "What is a good practice for managing project dependencies?",
      "options": [
        "Use system Python packages",
        "Use virtual environments and requirements.txt",
        "Install globally",
        "Avoid dependencies"
      ],
      "answer": 1,
      "explanation": "Isolate dependencies with venv and pin versions in requirements.txt."
    }
  },
  {
    "id": 55,
    "moduleId": 10,
    "module": "Testing & Best Practices",
    "title": "55. Packaging and Distributing Python Packages",
    "codeName": "M10-L08",
    "mdFile": "lessons/M10-L08.md",
    "defaultCode": "def info_packaging():\n    meta = {\"name\": \"python-learning-suite\",\"version\":\"1.0.0\",\"author\":\"personalbotai\",\"license\":\"MIT\"}\n    for k,v in meta.items(): print(f\"{k}: {v}\")\nif __name__ == \"__main__\":\n    info_packaging()",
    "quiz": {
      "question": "Which tool is commonly used for Python package publishing?",
      "options": [
        "npm",
        "pip",
        "twine",
        "conda"
      ],
      "answer": 2,
      "explanation": "twine is used to upload packages to PyPI."
    }
  }
];

// State
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('python_progress') || '{}');
let pyodideInstance = null;
let pyodideReady = false;

// Fallback Runtime
class SimplePythonRuntime {
    run(code) {
        const lines = code.split('\n');
        const output = [];
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith('#')) continue;
            const pm = line.match(/^print\s*\((.*)\)$/);
            if (pm) {
                let arg = pm[1].trim();
                if ((arg.startsWith('f"') || arg.startsWith("f'"))) {
                    arg = arg.slice(2, -1).replace(/\{([^}]+)\}/g, (m, expr) => { try { return eval(expr); } catch(e) { return m; } });
                    output.push(arg);
                } else if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
                    output.push(arg.slice(1, -1));
                } else {
                    try { output.push(String(eval(arg))); } catch(e) { output.push(arg); }
                }
            } else if (line.includes('=') && !line.includes('==') && !line.includes('!=') && !line.includes('>=')) {
                const eq = line.indexOf('=');
                const lhs = line.slice(0, eq).trim();
                const rhs = line.slice(eq+1).trim();
                if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(lhs)) {
                    try { eval('var ' + lhs + ' = ' + rhs); } catch(e) {}
                }
            }
        }
        return output.join('\n');
    }
}
const fallbackRuntime = new SimplePythonRuntime();

let pyodidePromise = null;

function setPyStatus(text, color) {
    const el = document.getElementById('py-runtime-status');
    if (el) { el.textContent = text; el.className = 'text-[11px] font-mono ' + color; }
}

async function initPyodideRuntime() {
    if (pyodideReady) return pyodideInstance;
    if (pyodidePromise) return pyodidePromise;
    setPyStatus('⏳ Loading WASM…', 'text-amber-400');
    pyodidePromise = (async () => {
        try {
            // Wait for loadPyodide if script still loading
            let retries = 0;
            while (typeof loadPyodide !== 'function' && retries < 50) {
                await new Promise(r => setTimeout(r, 100));
                retries++;
            }
            if (typeof loadPyodide === 'function') {
                pyodideInstance = await loadPyodide();
                try { await pyodideInstance.loadPackage('micropip'); } catch (e2) { console.warn('micropip preload skip:', e2); }
                pyodideReady = true;
                setPyStatus('✓ WASM Ready', 'text-emerald-400');
                console.log('Pyodide WebAssembly siap di background.');
                return pyodideInstance;
            } else {
                throw new Error('loadPyodide script tidak tersedia');
            }
        } catch (e) {
            console.warn('Pyodide WASM background load gagal, cloud fallback aktif:', e);
            setPyStatus('☁ Cloud Ready', 'text-sky-400');
            pyodideReady = false;
            return null;
        }
    })();
    return pyodidePromise;
}

// Pyodide WebAssembly is lazily loaded on first Run to save bandwidth & memory on mobile

// Cloud fallback: Judge0 CE (Python 3.12) when Pyodide WASM unavailable
async function runPythonCloud(code) {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 25000);
        const res = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ language_id: 100, source_code: code }),
            signal: controller.signal
        });
        clearTimeout(timer);
        if (!res.ok) return null;
        const j = await res.json();
        if (j.stdout) return j.stdout;
        if (j.stderr) return 'Error: ' + j.stderr;
        if (j.compile_output) return 'Error: ' + j.compile_output;
        if (j.message) return 'Error: ' + j.message;
        const st = j.status && j.status.description ? j.status.description : 'Unknown';
        return 'Error: ' + st;
    } catch (e) { return null; }
}

async function runCode() {
    const output = document.getElementById('output');
    const _edPy=document.getElementById('code-editor'); const code = _edPy ? _edPy.value : '';
    // If still downloading WASM, await background promise
    if (!pyodideReady && pyodidePromise) {
        if (output) output.innerHTML = '<span class="text-amber-400">⏳ Menunggu download WebAssembly selesai...</span>';
        await pyodidePromise;
    } else if (!pyodideReady) {
        await initPyodideRuntime();
    }
    if (output) output.innerHTML = '<span class="text-amber-400">Menjalankan...</span>';
    try {
        let res = '';
        if (pyodideInstance) {
            const runWithCapture = (src) => {
                pyodideInstance.runPython('import sys\nfrom io import StringIO\nsys.stdout = StringIO()\nsys.stderr = sys.stdout');
                pyodideInstance.runPython(src);
                return pyodideInstance.runPython('sys.stdout.getvalue()');
            };
            try {
                res = runWithCapture(code);
            } catch (err) {
                const msg = String((err && err.message) || err);
                const m = msg.match(/The module '([^']+)' is included in the Pyodide distribution/i) || msg.match(/No module named '([^']+)'/i) || msg.match(/ModuleNotFoundError[^'"]*'([^'"]+)'/i);
                const PKG_ALIAS = { pkg_resources: 'setuptools' };
                if (m && pyodideInstance.loadPackage) {
                    let pkg = m[1].split('.')[0];
                    pkg = PKG_ALIAS[pkg] || pkg;
                    if (output) output.innerHTML = '<span class="text-amber-400">&#9203; Installing Pyodide package: ' + escapeHtml(pkg) + '&hellip;</span>';
                    await pyodideInstance.loadPackage(pkg);
                    res = runWithCapture(code);
                } else { throw err; }
            }
        } else {
            res = await runPythonCloud(code);
            if (res === null) res = fallbackRuntime.run(code);
        }
        if (output) output.innerHTML = '<pre class="text-emerald-400 font-mono text-xs sm:text-sm whitespace-pre-wrap">' + escapeHtml(res || '(Selesai tanpa output)') + '</pre>';
        const cur = lessons[currentLesson];
        if (cur && !progress[cur.id]) {
            progress[cur.id] = true;
            localStorage.setItem('python_progress', JSON.stringify(progress));
            updateProgress();
            renderNav();
            updateCompleteButtons();
        }
    } catch (e) {
        if (output) output.innerHTML = '<pre class="text-rose-400 font-mono text-xs sm:text-sm whitespace-pre-wrap">Error: ' + escapeHtml(e.message || String(e)) + '</pre>';
    }
}

function resetCode() {
    const cur = lessons[currentLesson];
    if (cur) document.getElementById('code-editor').value = cur.defaultCode;
}

function renderNav(filter) {
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;
    const q = (filter || '').toLowerCase().trim();
    const curModId = lessons[currentLesson] ? lessons[currentLesson].moduleId : 1;
    nav.innerHTML = MODULES.map(function(mod) {
        const modLessons = lessons.filter(function(l) { return l.moduleId === mod.id; });
        const filtered = q ? modLessons.filter(function(l){ return l.title.toLowerCase().includes(q) || mod.title.toLowerCase().includes(q); }) : modLessons;
        if (q && filtered.length === 0) return '';
        const doneCount = modLessons.filter(function(l) { return !!progress[l.id]; }).length;
        const isCurrentModule = q ? true : mod.id === curModId;
        const lessonRows = filtered.map(function(l) {
            const idx = lessons.findIndex(function(x) { return x.id === l.id; });
            const isActive = idx === currentLesson;
            const isDone = !!progress[l.id];
            const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
            return '<button onclick="loadLesson(' + idx + '); closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 ' + cls + '">' +
                '<span class="text-[11px] shrink-0">' + (isDone ? '&#9989;' : '&#9675;') + '</span>' +
                '<span class="truncate flex-1">' + l.title + '</span></button>';
        }).join('');
        const badgeCls = doneCount === modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
        return '<div class="mb-1">' +
            '<button onclick="toggleModule(' + mod.id + ')" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">' +
            '<span class="flex items-center gap-2 truncate"><i class="' + mod.icon + ' text-amber-400 text-sm w-4 text-center"></i><span class="truncate">' + mod.title + '</span></span>' +
            '<span class="text-[10px] font-mono px-2 py-0.5 rounded-full ' + badgeCls + '">' + doneCount + '/' + modLessons.length + '</span></button>' +
            '<div id="module-' + mod.id + '" class="space-y-0.5 mt-0.5 px-2 ' + (isCurrentModule ? '' : 'hidden') + '">' + lessonRows + '</div></div>';
    }).join('');
}

function toggleModule(id) {
    const el = document.getElementById('module-' + id);
    if (el) el.classList.toggle('hidden');
}

async function loadLesson(index) {
    try { localStorage.setItem('python_last_lesson', String(index)); } catch(e){}
    if (index < 0 || index >= lessons.length) return;
    currentLesson = index;
    const lesson = lessons[index];
    const bc = document.getElementById('breadcrumb');
    const lt = document.getElementById('lesson-title');
    if (bc) bc.textContent = lesson.module + ' \u00b7 Lesson ' + (index + 1) + ' of ' + lessons.length;
    if (lt) lt.textContent = lesson.title;
    const contentEl = document.getElementById('lesson-content');
    if (contentEl) contentEl.innerHTML = '<div class="py-10 text-center text-slate-500"><i class="fas fa-circle-notch fa-spin text-xl mb-2"></i><p class="text-sm">Memuat materi...</p></div>';
    try {
        const res = await fetch(lesson.mdFile);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const mdText = await res.text();
        if (contentEl) {
            if (typeof marked !== 'undefined' && typeof hljs !== 'undefined') {
                marked.setOptions({ gfm: true, breaks: false, highlight: function(code, lang){ try{ if(lang && hljs.getLanguage(lang)) return hljs.highlight(code,{language:lang}).value; return hljs.highlightAuto(code).value; }catch(e){ return code; } } });
            }
            contentEl.innerHTML = marked.parse(mdText);
            if (typeof hljs !== 'undefined') { contentEl.querySelectorAll('pre code').forEach(function(b){ try{ hljs.highlightElement(b); }catch(e){} }); }
        }
    } catch (e) {
        if (contentEl) contentEl.innerHTML = '<h2>' + lesson.title + '</h2><p class="text-slate-400">Materi untuk pelajaran ini.</p>';
    }
    const editor = document.getElementById('code-editor');
    if (editor) editor.value = lesson.defaultCode;
    const out = document.getElementById('output');
    if (out) out.innerHTML = '<span class="text-slate-600">// Tekan Run untuk menjalankan kode</span>';
    const quizSec = document.getElementById('quiz-section');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    if (quizResult) quizResult.innerHTML = '';
    if (lesson.quiz && quizContent && quizSec) {
        quizSec.classList.remove('hidden');
        quizContent.innerHTML = '<p class="text-slate-200 text-sm font-medium mb-3">' + escapeHtml(lesson.quiz.question) + '</p>' +
            '<div class="space-y-2">' + lesson.quiz.options.map(function(opt, i) {
                return '<label class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-white/5 border border-white/5 cursor-pointer transition text-xs sm:text-sm text-slate-300">' +
                    '<input type="radio" name="quiz-opt" value="' + i + '" class="text-indigo-500 focus:ring-0">' +
                    '<span>' + escapeHtml(opt) + '</span></label>';
            }).join('') + '</div>';
    } else if (quizSec) {
        quizSec.classList.add('hidden');
    }
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === lessons.length - 1;
    updateCompleteButtons();
    renderNav();
    const sc = document.getElementById('content-scroll');
    if (sc) sc.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkQuiz() {
    const lesson = lessons[currentLesson];
    if (!lesson || !lesson.quiz) return;
    const selected = document.querySelector('input[name="quiz-opt"]:checked');
    const resEl = document.getElementById('quiz-result');
    if (!selected) {
        if (resEl) resEl.innerHTML = '<div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">Pilih salah satu jawaban dahulu.</div>';
        return;
    }
    const isCorrect = parseInt(selected.value) === lesson.quiz.answer;
    if (isCorrect) {
        if (resEl) resEl.innerHTML = '<div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs"><div class="font-bold flex items-center gap-2 mb-1"><i class="fas fa-check-circle"></i> Jawaban Benar!</div>' + (lesson.quiz.explanation ? '<p class="text-slate-400 mt-1">' + escapeHtml(lesson.quiz.explanation) + '</p>' : '') + '</div>';
        progress[lesson.id] = true;
        localStorage.setItem('python_progress', JSON.stringify(progress));
        updateProgress();
        renderNav();
        updateCompleteButtons();
    } else {
        if (resEl) resEl.innerHTML = '<div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs"><div class="font-bold flex items-center gap-2"><i class="fas fa-times-circle"></i> Belum tepat</div><p class="text-slate-400 mt-1">Coba baca kembali materinya.</p></div>';
    }
}

function markComplete() {
    const cur = lessons[currentLesson];
    if (!cur) return;
    progress[cur.id] = true;
    localStorage.setItem('python_progress', JSON.stringify(progress));
    updateProgress();
    renderNav();
    updateCompleteButtons();
    if (currentLesson < lessons.length - 1) setTimeout(function() { loadLesson(currentLesson + 1); }, 300);
}

function updateCompleteButtons() {
    const cur = lessons[currentLesson];
    const isDone = cur && !!progress[cur.id];
    const a = document.getElementById('complete-btn');
    const b = document.getElementById('completed-btn');
    if (a) a.style.display = isDone ? 'none' : 'inline-flex';
    if (b) b.style.display = isDone ? 'inline-flex' : 'none';
}

function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function updateProgress() {
    const done = Object.keys(progress).filter(function(k){return !!progress[k];}).length;
    const total = lessons.length;
    const pct = Math.round((done / total) * 100);
    const t = document.getElementById('progress-text');
    const f = document.getElementById('progress-fill');
    if (t) t.textContent = pct + '%';
    if (f) f.style.width = pct + '%';
    const mob = document.getElementById('mobile-progress');
    if (mob) mob.textContent = pct + '%';
    const cp = document.getElementById('course-progress');
    if (cp) cp.textContent = pct + '%';
    const bar = document.getElementById('progress-fill-bar');
    if (bar) bar.style.width = pct + '%';
    const sd = document.getElementById('stat-done');
    if (sd) sd.textContent = String(done);
    const cpc = document.getElementById('sidebar-completed-count');
    if (cpc) cpc.textContent = done + '/' + total;
}

function resetProgress() {
    if (!confirm('Yakin reset semua kemajuan?')) return;
    progress = {};
    localStorage.removeItem('python_progress');
    updateProgress();
    renderNav();
    updateCompleteButtons();
}

function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function closeSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebar-overlay');
    const bd = document.getElementById('backdrop');
    if (sb) { sb.classList.remove('sidebar-open'); sb.classList.remove('open'); }
    if (ov) { ov.classList.remove('overlay-open'); ov.classList.add('hidden'); }
    if (bd) { bd.classList.remove('show'); bd.classList.add('hidden'); }
    // ensure lg translate on desktop
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && sb) { sb.classList.remove('-translate-x-full'); }
}

// expose for command palette / inline handlers
if (typeof window !== 'undefined') {
  window.MODULES = MODULES;
  window.lessons = lessons;
  window.LESSONS = lessons;
  window.app = { MODULES, LESSONS: lessons, lessons, loadLesson, runCode, checkQuiz, renderNav, markComplete, resetProgress };
}

document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    const savedLast = parseInt(localStorage.getItem('python_last_lesson') || '0', 10);
    loadLesson(!isNaN(savedLast) && savedLast >= 0 && savedLast < lessons.length ? savedLast : 0);
    updateProgress();
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (toggle && sidebar && overlay) {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('sidebar-open');
            overlay.classList.toggle('overlay-open');
        });
    }
});


// ============================================

// ============================================
// Unified Certificate Generator & Gating (100% Completion Only)
// ============================================

window.isCourseFullyCompleted = function() {
    const total = typeof lessons !== 'undefined' ? lessons.length : 55;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const total = typeof lessons !== 'undefined' ? lessons.length : 55;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;

    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');

    if (!isCompleted) {
        // Show Locked State
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');

        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        // Show Unlocked State
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');

        const savedName = localStorage.getItem('user_cert_name') || 'Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;

        setTimeout(() => {
            window.drawCertificate();
        }, 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark Luxury
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Outer Border & Accents
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f59e0b');
    gradient.addColorStop(0.5, '#ea580c');
    gradient.addColorStop(1, '#f59e0b');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Corner ornaments
    const drawCorner = (x, y) => {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);
    
    // Header Tag
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#f59e0b';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    // Title
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Python Learning Path — From Zero to Advanced', width / 2, 175);
    
    // Subtext
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan kepada:', width / 2, 240);
    
    // Student Name
    ctx.font = '700 46px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(studentName, width / 2, 310);
    
    // Underline name
    const textWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((width - textWidth) / 2 - 20, 335);
    ctx.lineTo((width + textWidth) / 2 + 20, 335);
    ctx.stroke();
    
    // Paragraph
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% seluruh kurikulum interaktif, latihan kode praktik,', width / 2, 400);
    ctx.fillText('dan uji pemahaman (quiz) pada platform Python Learning Path dengan predikat Sangat Memuaskan.', width / 2, 430);
    
    // Verification & Date Footer
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const codeId = 'LP-' + Math.abs(studentName.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(8, '0');
    
    ctx.textAlign = 'left';
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Tanggal: ${today}`, 90, 560);
    ctx.fillText(`ID Sertifikat: #${codeId}`, 90, 585);
    ctx.fillText(`Status: Terverifikasi (100% Selesai)`, 90, 610);
    
    // Seal / Badge
    ctx.save();
    ctx.beginPath();
    ctx.arc(width - 150, 570, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.textAlign = 'center';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('🐍', width - 150, 565);
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('VERIFIED', width - 150, 595);
    ctx.restore();
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat diunduh setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    const name = (document.getElementById('cert-name-input')?.value || 'sertifikat').trim().toLowerCase().replace(/\s+/g, '-');
    link.download = `sertifikat-${name}-python.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat dicetak setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(`
            <html>
                <head>
                    <title>Cetak Sertifikat</title>
                    <style>
                        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111; }
                        img { max-width: 95vw; max-height: 95vh; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                        @media print {
                            body { background: transparent; }
                            img { width: 100%; max-width: 100%; }
                        }
                    </style>
                </head>
                <body onload="window.print()">
                    <img src="${dataUrl}">
                </body>
            </html>
        `);
        win.document.close();
    }
};
