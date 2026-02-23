# 🐍 Python Learning Path: From Fundamentals to Advanced

Selamat datang di **Python Learning Path** — course komprehensif yang dirancang untuk mengubah kamu dari pemula menjadi pemrogram Python yang mahir dan profesional.

## 📋 Daftar Modul

### Modul 1: Python Fundamentals & Environment Setup
- [M01-L01: Installing Python and Setting Up Development Environment](./lessons/M01-L01.md)
- [M01-L02: First Steps: Hello World and Basic Syntax](./lessons/M01-L02.md)
- [M01-L03: Variables, Data Types, and Type System](./lessons/M01-L03.md)
- [M01-L04: Basic Input/Output and String Formatting](./lessons/M01-L04.md)

### Modul 2: Control Flow and Logic
- [M02-L01: Conditional Statements: if, elif, else](./lessons/M02-L01.md)
- [M02-L02: Loops: while and for](./lessons/M02-L02.md)
- [M02-L03: Logical Operators and Boolean Expressions](./lessons/M02-L03.md)
- [M02-L04: Match-Case Statements (Python 3.10+)](./lessons/M02-L04.md)

### Modul 3: Data Structures: Lists, Tuples, Dictionaries, Sets
- [M03-L01: Lists: Creation, Indexing, and Basic Operations](./lessons/M03-L01.md)
- [M03-L02: List Comprehensions and Advanced Manipulation](./lessons/M03-L02.md)
- [M03-L03: Tuples: Immutable Sequences](./lessons/M03-L03.md)
- [M03-L04: Dictionaries: Key-Value Mappings](./lessons/M03-L04.md)
- [M03-L05: Dictionary Comprehensions and Dict Methods](./lessons/M03-L05.md)
- [M03-L06: Sets: Unordered Unique Collections](./lessons/M03-L06.md)

### Modul 4: Functions and Modular Programming
- [M04-L01: Defining and Calling Functions](./lessons/M04-L01.md)
- [M04-L02: Arguments: Positional, Keyword, Default, and *args/**kwargs](./lessons/M04-L02.md)
- [M04-L03: Lambda Functions and Higher-Order Functions](./lessons/M04-L03.md)
- [M04-L04: Docstrings, Type Hints, and Function Annotations](./lessons/M04-L04.md)
- [M04-L05: Modules and Packages](./lessons/M04-L05.md)
- [M04-L06: The if __name__ == '__main__' Pattern](./lessons/M04-L06.md)

### Modul 5: Object-Oriented Programming (OOP) in Python
- [M05-L01: Classes and Objects: Basics of OOP](./lessons/M05-L01.md)
- [M05-L02: Instance Variables, Class Variables, and Methods](./lessons/M05-L02.md)
- [M05-L03: Inheritance and Method Resolution Order (MRO)](./lessons/M05-L03.md)
- [M05-L04: Encapsulation: Public, Private, and Protected](./lessons/M05-L04.md)
- [M05-L05: Properties, Getters, and Setters](./lessons/M05-L05.md)
- [M05-L06: Special (Dunder) Methods](./lessons/M05-L06.md)
- [M05-L07: Polymorphism and Duck Typing](./lessons/M05-L07.md)

### Modul 6: Error Handling and Exceptions
- [M06-L01: Exceptions: try, except, else, finally](./lessons/M06-L01.md)
- [M06-L02: Raising Exceptions and Custom Exceptions](./lessons/M06-L02.md)
- [M06-L03: Context Managers and the with Statement](./lessons/M06-L03.md)
- [M06-L04: Exception Chaining and Best Practices](./lessons/M06-L04.md)

### Modul 7: File I/O and Serialization
- [M07-L01: Reading and Writing Text Files](./lessons/M07-L01.md)
- [M07-L02: Working with CSV and JSON Data](./lessons/M07-L02.md)
- [M07-L03: Pickle and Binary Serialization](./lessons/M07-L03.md)
- [M07-L04: Working with Paths: os.path and pathlib](./lessons/M07-L04.md)
- [M07-L05: File System Operations](./lessons/M07-L05.md)

### Modul 8: Advanced Python Concepts
- [M08-L01: Iterators and the Iterator Protocol](./lessons/M08-L01.md)
- [M08-L02: Generators and yield](./lessons/M08-L02.md)
- [M08-L03: Decorators: Functions That Wrap Functions](./lessons/M08-L03.md)
- [M08-L04: Contextlib and Advanced Context Managers](./lessons/M08-L04.md)
- [M08-L05: Descriptors and the Descriptor Protocol](./lessons/M08-L05.md)
- [M08-L06: Metaclasses and Class Creation](./lessons/M08-L06.md)

### Modul 9: Concurrency and Parallelism
- [M09-L01: Threading: Running Code Concurrently](./lessons/M09-L01.md)
- [M09-L02: Multiprocessing: True Parallel Execution](./lessons/M09-L02.md)
- [M09-L03: Asyncio: Asynchronous I/O](./lessons/M09-L03.md)
- [M09-L04: Concurrent Futures: ThreadPoolExecutor and ProcessPoolExecutor](./lessons/M09-L04.md)
- [M09-L05: Choosing the Right Concurrency Model](./lessons/M09-L05.md)

### Modul 10: Testing, Debugging, and Best Practices
- [M10-L01: Writing Tests with unittest and pytest](./lessons/M10-L01.md)
- [M10-L02: Test-Driven Development (TDD) Workflow](./lessons/M10-L02.md)
- [M10-L03: Debugging with pdb and IDE Debuggers](./lessons/M10-L03.md)
- [M10-L04: Logging: The Right Way to Print](./lessons/M10-L04.md)
- [M10-L05: Code Quality: PEP 8, Linters, and Formatters](./lessons/M10-L05.md)
- [M10-L06: Type Checking with mypy](./lessons/M10-L06.md)
- [M10-L07: Profiling and Performance Optimization](./lessons/M10-L07.md)
- [M10-L08: Packaging and Distributing Python Packages](./lessons/M10-L08.md)

---

## 🚀 Quick Start

1. **Mulai dari Modul 1** jika kamu baru belajar Python
2. **Lewati modul** jika sudah Familiar dengan topik tersebut
3. **Kerjakan Latihan** di setiap lesson untuk praktik langsung
4. **Baca Referensi** untuk mendalami materi

---

## 📁 Struktur Proyek

```
python-learning-path/
├── README.md                 # File ini - panduan navigasi
├── modules.json              # Data struktur course (source of truth)
├── generate_lessons.py       # Script generator template
├── templates/
│   └── lesson-template.md    # Template untuk setiap lesson
└── lessons/
    ├── M01-L01.md
    ├── M01-L02.md
    └── ... (55 lesson files)
```

---

## 🛠️ Regenerating Lessons

Jika perlu mengubah struktur course atau template:

1. Edit `modules.json` untuk menambah/mengubah lessons
2. Edit `templates/lesson-template.md` untuk mengubah format
3. Jalankan: `python3 generate_lessons.py`

---

## 📝 Catatan

- Setiap lesson masih dalam bentuk **template** yang perlu diisi dengan konten sebenarnya
- Template mencakup: objectives, materi, latihan, referensi, dan next steps
- Gunakan **Tone: Santai dan langsung** sesuai preferensi user
- Format: Markdown dengan code blocks Python

---

## 🤝 Kontribusi

Course ini dikembangkan untuk pembelajaran pribadi. Feel free to adapt sesuai kebutuhan!

---

**Selamat belajar!** 🎯
