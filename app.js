// Python Learning Path - Application Logic
const lessons = [
    {
        "id": 1,
        "title": "1. Instalasi Python",
        "description": "<p><strong>Instalasi Python</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 2,
        "title": "2. Hello World",
        "description": "<p><strong>Hello World</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 3,
        "title": "3. Variabel dan Tipe Data",
        "description": "<p><strong>Variabel dan Tipe Data</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 4,
        "title": "4. Operator",
        "description": "<p><strong>Operator</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 5,
        "title": "5. If/Else",
        "description": "<p><strong>If/Else</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 6,
        "title": "6. For Loop",
        "description": "<p><strong>For Loop</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 7,
        "title": "7. While Loop",
        "description": "<p><strong>While Loop</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 8,
        "title": "8. Match-Case (Python 3.10+)",
        "description": "<p><strong>Match-Case (Python 3.10+)</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 9,
        "title": "9. List",
        "description": "<p><strong>List</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 10,
        "title": "10. Tuple",
        "description": "<p><strong>Tuple</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 11,
        "title": "11. Dictionary",
        "description": "<p><strong>Dictionary</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 12,
        "title": "12. Set",
        "description": "<p><strong>Set</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 13,
        "title": "13. Lesson M03-L05",
        "description": "<p><strong>Lesson M03-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 14,
        "title": "14. Lesson M03-L06",
        "description": "<p><strong>Lesson M03-L06</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 15,
        "title": "15. Function Dasar",
        "description": "<p><strong>Function Dasar</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 16,
        "title": "16. Lambda dan Higher-Order",
        "description": "<p><strong>Lambda dan Higher-Order</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 17,
        "title": "17. List Comprehension",
        "description": "<p><strong>List Comprehension</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 18,
        "title": "18. Lesson M04-L04",
        "description": "<p><strong>Lesson M04-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 19,
        "title": "19. Lesson M04-L05",
        "description": "<p><strong>Lesson M04-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 20,
        "title": "20. Lesson M04-L06",
        "description": "<p><strong>Lesson M04-L06</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 21,
        "title": "21. Class Dasar",
        "description": "<p><strong>Class Dasar</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 22,
        "title": "22. Inheritance",
        "description": "<p><strong>Inheritance</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 23,
        "title": "23. Lesson M05-L03",
        "description": "<p><strong>Lesson M05-L03</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 24,
        "title": "24. Lesson M05-L04",
        "description": "<p><strong>Lesson M05-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 25,
        "title": "25. Lesson M05-L05",
        "description": "<p><strong>Lesson M05-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 26,
        "title": "26. Lesson M05-L06",
        "description": "<p><strong>Lesson M05-L06</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 27,
        "title": "27. Lesson M05-L07",
        "description": "<p><strong>Lesson M05-L07</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 28,
        "title": "28. Lesson M06-L01",
        "description": "<p><strong>Lesson M06-L01</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 29,
        "title": "29. Lesson M06-L02",
        "description": "<p><strong>Lesson M06-L02</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 30,
        "title": "30. Lesson M06-L03",
        "description": "<p><strong>Lesson M06-L03</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 31,
        "title": "31. Lesson M06-L04",
        "description": "<p><strong>Lesson M06-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 32,
        "title": "32. Lesson M07-L01",
        "description": "<p><strong>Lesson M07-L01</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 33,
        "title": "33. Lesson M07-L02",
        "description": "<p><strong>Lesson M07-L02</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 34,
        "title": "34. Lesson M07-L03",
        "description": "<p><strong>Lesson M07-L03</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 35,
        "title": "35. Lesson M07-L04",
        "description": "<p><strong>Lesson M07-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 36,
        "title": "36. Lesson M07-L05",
        "description": "<p><strong>Lesson M07-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 37,
        "title": "37. Lesson M08-L01",
        "description": "<p><strong>Lesson M08-L01</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 38,
        "title": "38. Lesson M08-L02",
        "description": "<p><strong>Lesson M08-L02</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 39,
        "title": "39. Lesson M08-L03",
        "description": "<p><strong>Lesson M08-L03</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 40,
        "title": "40. Lesson M08-L04",
        "description": "<p><strong>Lesson M08-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 41,
        "title": "41. Lesson M08-L05",
        "description": "<p><strong>Lesson M08-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 42,
        "title": "42. Lesson M08-L06",
        "description": "<p><strong>Lesson M08-L06</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 43,
        "title": "43. Lesson M09-L01",
        "description": "<p><strong>Lesson M09-L01</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 44,
        "title": "44. Lesson M09-L02",
        "description": "<p><strong>Lesson M09-L02</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 45,
        "title": "45. Lesson M09-L03",
        "description": "<p><strong>Lesson M09-L03</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 46,
        "title": "46. Lesson M09-L04",
        "description": "<p><strong>Lesson M09-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 47,
        "title": "47. Lesson M09-L05",
        "description": "<p><strong>Lesson M09-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 48,
        "title": "48. Lesson M10-L01",
        "description": "<p><strong>Lesson M10-L01</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 49,
        "title": "49. Lesson M10-L02",
        "description": "<p><strong>Lesson M10-L02</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 50,
        "title": "50. Lesson M10-L03",
        "description": "<p><strong>Lesson M10-L03</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 51,
        "title": "51. Lesson M10-L04",
        "description": "<p><strong>Lesson M10-L04</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 52,
        "title": "52. Lesson M10-L05",
        "description": "<p><strong>Lesson M10-L05</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 53,
        "title": "53. Lesson M10-L06",
        "description": "<p><strong>Lesson M10-L06</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 54,
        "title": "54. Lesson M10-L07",
        "description": "<p><strong>Lesson M10-L07</strong> adalah konsep penting dalam Python.</p>",
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
        }
    },
    {
        "id": 55,
        "title": "55. Lesson M10-L08",
        "description": "<p><strong>Lesson M10-L08</strong> adalah konsep penting dalam Python.</p>",
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
        }
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
