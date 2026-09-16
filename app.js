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
    "defaultCode": "import sys\nimport pkg_resources\n\ndef latihan_2():\n    print(f\"Python version: {sys.version}\")\n    print(\"\\nInstalled packages:\")\n    for dist in sorted(pkg_resources.working_set, key=lambda x: x.project_name.lower()):\n        print(f\"{dist.project_name}=={dist.version}\")\n\nif __name__ == \"__main__\":\n    latihan_2()",
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
    "defaultCode": "def latihan_1():\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    latihan_1()",
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
    "defaultCode": "def latihan_1():\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    latihan_1()",
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
    "defaultCode": "def latihan_1():\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    latihan_1()",
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
    "defaultCode": "if kondisi:\n    # kode jika True\nelif kondisi_lain:\n    # kode jika True\nelse:\n    # kode jika semua False",
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
    "defaultCode": "while kondisi:\n    # kode di sini diulang",
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
    "defaultCode": "def latihan_1(username):\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    print(latihan_1(\"alice\"))      # True\n    print(latihan_1(\"a\"))          # False (too short)\n    print(latihan_1(\"alice smith\")) # False (contains space)\n    print(latihan_1(\"alice@123\"))  # False (contains @)",
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
    "defaultCode": "match subject:\n    case pattern1:\n        # kode\n    case pattern2 if guard:\n        # kode dengan kondisi (guard)\n    case _:\n        # default (catch-all)",
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
    "defaultCode": "def latihan_1(angka):\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    data = [1, 2, 3, 4]\n    hasil = latihan_1(data)\n    print(hasil)",
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
    "defaultCode": "[expression for item in iterable]\n[expression for item in iterable if condition]\n[expression for item1 in iterable1 for item2 in iterable2]  # nested loops",
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
    "defaultCode": "def latihan_1(a, b):\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    x, y = 10, 20\n    hasil = latihan_1(x, y)\n    print(hasil)  # (20, 10)",
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
    "defaultCode": "def latihan_1():\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    pb = latihan_1()\n    print(pb)",
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
    "defaultCode": "{key_expr: value_expr for item in iterable}\n{key_expr: value_expr for item in iterable if condition}",
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
    "defaultCode": "{expr for item in iterable if condition}",
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
    "defaultCode": "def nama_fungsi(parameter1, parameter2, ...):\n    \"\"\"docstring optional\"\"\"\n    # body\n    return nilai  # optional, default None",
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
    "defaultCode": "def f(a, b):\n    return a + b\nf(1, 2)  # a=1, b=2",
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
    "defaultCode": "lambda arguments: expression",
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
    "defaultCode": "def func(arg1, arg2):\n    \"\"\"Short description.\n\n    Longer description explaining details.\n\n    Args:\n        arg1 (int): description\n        arg2 (str): description\n\n    Returns:\n        bool: description\n    \"\"\"",
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
    "defaultCode": "import module_name\nimport package.module_name\nfrom module_name import name1, name2\nfrom package.module_name import something\nfrom module_name import *\nimport module_name as alias",
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
    "defaultCode": "def main():\n    # kode utama program\n    pass\n\nif __name__ == \"__main__\":\n    main()",
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
    "defaultCode": "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f\"Hello, I'm {self.name}\"",
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
    "defaultCode": "class Counter:\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    c1 = Counter()\n    c2 = Counter()\n    c1.increment()\n    c1.increment()\n    c2.increment()\n    print(c1.get_instance_count())  # 2\n    print(c2.get_instance_count())  # 1\n    print(Counter.get_total_class_count())  # 2",
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
    "defaultCode": "class SubClass(SuperClass):\n    # override atau tambah methods",
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
    "defaultCode": "class MyClass:\n    def __init__(self):\n        self.__private = 42  # becomes _MyClass__private",
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
    "defaultCode": "class Celsius:\n    def __init__(self, temperature):\n        self._temperature = temperature\n\n    @property\n    def fahrenheit(self):\n        return (self._temperature * 9/5) + 32\n\n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._temperature = (value - 32) * 5/9",
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
    "defaultCode": "class SimpleVector:\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    v = SimpleVector([1, 2, 3])\n    print(len(v))       # 3\n    print(v[0])         # 1\n    print(v[1:])        # [2, 3]\n    print(str(v))       # Vector(1, 2, 3)\n    print(repr(v))      # Vector([1, 2, 3])",
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
    "defaultCode": "def make_sound(animal):\n    print(animal.speak())  # asumsi animal punya method speak()",
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
    "defaultCode": "try:\n    # kode yang mungkin raise exception\n    result = 10 / 0\nexcept ZeroDivisionError:\n    # handle exception tertentu\n    print(\"Cannot divide by zero\")\nexcept (TypeError, ValueError) as e:\n    # handle multiple exceptions\n    print(f\"Error: {e}\")\nexcept Exception as e:\n    # catch所有 exceptions (tapi lebih baik spesifik)\n    print(f\"Unexpected error: {e}\")\nelse:\n    # dieksekusi jika tidak ada exception\n    print(\"Operation successful\")\nfinally:\n    # selalu dieksekusi (ada exception atau tidak)\n    print(\"Cleanup\")",
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
    "defaultCode": "raise ValueError(\"Invalid value\")\nraise MyCustomError(\"Something went wrong\")",
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
    "defaultCode": "with context_manager as variable:\n    # block code\n# otomatis cleanup (exit) terjadi di sini",
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
    "defaultCode": "try:\n    risky_operation()\nexcept SomeError as e:\n    raise MyError(\"Higher-level failure\") from e",
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
    "defaultCode": "def latihan_1(src, dst):\n    # Tulis kode kamu di sini\n    pass\n\nif __name__ == \"__main__\":\n    latihan_1(\"input.txt\", \"output.txt\")",
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
    "defaultCode": "import csv\n\n# Reading\nwith open('file.csv', newline='') as f:\n    reader = csv.reader(f)  # returns iterator of lists\n    for row in reader:\n        print(row)  # list of strings\n\n# DictReader (more convenient)\nwith open('file.csv') as f:\n    reader = csv.DictReader(f)  # each row is dict dengan keys dari header\n    for row in reader:\n        print(row['name'])\n\n# Writing\nwith open('out.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['name', 'age'])  # header\n    writer.writerow(['Alice', 25])\n\n# DictWriter\nwith open('out.csv', 'w', newline='') as f:\n    fieldnames = ['name', 'age']\n    writer = csv.DictWriter(f, fieldnames=fieldnames)\n    writer.writeheader()\n    writer.writerow({'name': 'Bob', 'age': 30})",
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
    "defaultCode": "import pickle\n\ndata = {'a': [1, 2.0, 3+4j], 'b': ('string', u'unicode string'), 'c': None}\nwith open('data.pkl', 'wb') as f:\n    pickle.dump(data, f)                # default protocol tertinggi yang tersedia\n    pickle.dump(data, f, protocol=pickle.HIGHEST_PROTOCOL)  # explicit",
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
    "defaultCode": "import os.path\n\npath = '/home/user/file.txt'\nos.path.join('dir', 'subdir', 'file.txt')\nos.path.split(path)          # ('/home/user', 'file.txt')\nos.path.dirname(path)       # '/home/user'\nos.path.basename(path)      # 'file.txt'\nos.path.splitext(path)      # ('/home/user/file', '.txt')\nos.path.exists(path)\nos.path.isfile(path)\nos.path.isdir(path)\nos.path.getsize(path)",
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
    "defaultCode": "import os\n\nos.listdir(path='.')          # list direktori (names only)\nos.scandir(path='.')          # iterator of DirEntry (lebih efisien, punya atribut)\nos.getcwd()\nos.chdir(path)\nos.mkdir(path)               # buat satu level\nos.makedirs(path, exist_ok=True)  # buat recursively\nos.rmdir(path)               # hapus direktori kosong\nos.remove(path)              # hapus file\nos.removedirs(path)          # hapus recursively (jika kosong)\nos.rename(src, dst)\nos.replace(src, dst)         # atomic rename\nos.scandir() untuk atribut: entry.name, entry.path, entry.is_file(), entry.is_dir()",
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
    "defaultCode": "iterator = iter(iterable)  # panggil __iter__()\nwhile True:\n    try:\n        item = next(iterator)  # panggil __next__()\n        # process item\n    except StopIteration:\n        break",
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
    "defaultCode": "def count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nfor x in count_up_to(5):\n    print(x)  # 0 1 2 3 4",
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
    "defaultCode": "def my_decorator(func):\n    def wrapper(*args, **kwargs):\n        # pre-processing\n        result = func(*args, **kwargs)\n        # post-processing\n        return result\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello\")\n\nsay_hello()  # sebenarnya memanggil wrapper",
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
    "defaultCode": "from contextlib import contextmanager\n\n@contextmanager\ndef my_context():\n    # setup\n    resource = acquire_resource()\n    try:\n        yield resource\n    finally:\n        # cleanup\n        release_resource(resource)",
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
    "defaultCode": "class Descriptor:\n    def __init__(self, name):\n        self.name = name\n\n    def __get__(self, instance, owner):\n        # instance: objek yang memiliki attribute, atau None jika diakses via class\n        # owner: class yang own descriptor\n        return instance.__dict__[self.name]\n\n    def __set__(self, instance, value):\n        instance.__dict__[self.name] = value\n\n    def __delete__(self, instance):\n        del instance.__dict__[self.name]\n\nclass MyClass:\n    attr = Descriptor('attr')",
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
    "defaultCode": "class MyClass:\n    pass\n# Di balik layar: MyClass = type('MyClass', (object,), {})",
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
    "defaultCode": "import threading\n\ndef worker():\n    print(\"Working\")\n\nt = threading.Thread(target=worker, args=(...), kwargs={...})\nt.start()   # start thread\nt.join()    # wait until finished",
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
    "defaultCode": "from multiprocessing import Process\n\ndef worker(name):\n    print(f\"Hello from {name}\")\n\np = Process(target=worker, args=(\"Alice\",))\np.start()\np.join()",
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
    "defaultCode": "import asyncio\n\nasync def fetch_data():\n    print(\"Start\")\n    await asyncio.sleep(1)  # simulasi I/O\n    print(\"Done\")\n    return {\"data\": 123}\n\nasync def main():\n    result = await fetch_data()\n    print(result)\n\nasyncio.run(main())  # Python 3.7+",
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
    "defaultCode": "from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor\nimport time\n\ndef task(n):\n    time.sleep(1)\n    return n * n\n\nwith ThreadPoolExecutor(max_workers=4) as executor:\n    # Submit single task\n    future = executor.submit(task, 5)\n    result = future.result()  # blocking\n\n    # Map multiple tasks\n    results = executor.map(task, [1,2,3,4,5])\n    for r in results:\n        print(r)",
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
    "defaultCode": "loop = asyncio.get_event_loop()\nresult = await loop.run_in_executor(None, blocking_func, arg)",
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
    "defaultCode": "import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestAdd(unittest.TestCase):\n    def test_add_positive(self):\n        self.assertEqual(add(2, 3), 5)\n\n    def test_add_negative(self):\n        self.assertEqual(add(-1, -1), -2)\n\nif __name__ == '__main__':\n    unittest.main()",
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
    "defaultCode": "# test_calculator.py\ndef test_add():\n    assert add(2, 3) == 5\n\n# calculator.py\ndef add(a, b):\n    return a + b  # implementasi paling sederhana",
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
    "defaultCode": "import pdb\n\ndef buggy_function(x):\n    pdb.set_trace()  # breakpoint\n    result = x / (x - 5)\n    return result\n\nbuggy_function(10)",
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
    "defaultCode": "import logging\n\nlogging.debug(\"Debug message\")\nlogging.info(\"Info message\")\nlogging.warning(\"Warning message\")\nlogging.error(\"Error message\")\nlogging.critical(\"Critical message\")",
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
    "defaultCode": "def add(a,b):\n    return a+b",
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
    "defaultCode": "def greet(name: str) -> str:\n    return \"Hello \" + name",
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
    "defaultCode": "import cProfile\nimport pstats\n\nprofiler = cProfile.Profile()\nprofiler.enable()\n# code to profile\nprofiler.create_stats()\nstats = pstats.Stats(profiler)\nstats.sort_stats('cumulative').print_stats(10)  # top 10 by cumulative time",
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
    "defaultCode": "from setuptools import setup, find_packages\n\nsetup(\n    name=\"mypackage\",\n    version=\"0.1.0\",\n    packages=find_packages(),\n    install_requires=[\"requests>=2.0\"],\n    python_requires=\">=3.8\",\n    entry_points={\n        \"console_scripts\": [\n            \"mycmd=mypackage.cli:main\",\n        ],\n    },\n)",
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

async function initPyodideRuntime() {
    const output = document.getElementById('output');
    if (pyodideReady) return;
    try {
        if (typeof loadPyodide === 'function') {
            if (output) output.innerHTML = '<span class="text-amber-400">Menyiapkan Python (Pyodide WebAssembly)...</span>';
            pyodideInstance = await loadPyodide();
            pyodideReady = true;
            if (output) output.innerHTML = '<span class="text-emerald-400">Python runtime siap. Tekan Run untuk mengeksekusi.</span>';
        } else { throw new Error('loadPyodide not found'); }
    } catch (e) {
        console.warn('Pyodide init failed:', e);
        pyodideReady = true;
        if (output) output.innerHTML = '<span class="text-sky-400">Mode fallback aktif (fitur eksekusi terbatas).</span>';
    }
}

async function runCode() {
    const output = document.getElementById('output');
    const code = document.getElementById('code-editor').value;
    if (!pyodideReady) await initPyodideRuntime();
    if (output) output.innerHTML = '<span class="text-amber-400">Menjalankan...</span>';
    try {
        let res = '';
        if (pyodideInstance) {
            pyodideInstance.runPython('import sys\nfrom io import StringIO\nsys.stdout = StringIO()\nsys.stderr = sys.stdout');
            pyodideInstance.runPython(code);
            res = pyodideInstance.runPython('sys.stdout.getvalue()');
        } else {
            res = fallbackRuntime.run(code);
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
    const m = document.getElementById('complete-btn-mobile');
    if (isDone) {
        if (a) { a.classList.add('hidden'); a.classList.remove('sm:flex'); }
        if (b) { b.classList.remove('hidden'); b.classList.add('flex'); }
        if (m) m.style.display = 'none';
    } else {
        if (a) { a.classList.remove('hidden'); a.classList.add('sm:flex'); }
        if (b) { b.classList.add('hidden'); b.classList.remove('flex'); }
        if (m) m.style.display = 'flex';
    }
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

document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    loadLesson(0);
    updateProgress();
    initPyodideRuntime();
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
