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
        "title": "1. M01 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M01 L01?",
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
        "title": "2. M01 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M01 L02?",
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
        "title": "3. M01 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M01 L03?",
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
        "title": "4. M01 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M01-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M01 L04?",
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
        "title": "5. M02 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M02 L01?",
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
        "title": "6. M02 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M02 L02?",
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
        "title": "7. M02 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M02 L03?",
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
        "title": "8. M02 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M02-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M02 L04?",
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
        "title": "9. M03 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M03 L01?",
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
        "title": "10. M03 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M03 L02?",
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
        "title": "11. M03 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M03 L03?",
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
        "title": "12. M03 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M03 L04?",
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
        "title": "13. M03 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M03 L05?",
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
        "title": "14. M03 L06",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M03-L06.md",
        "quiz": {
            "question": "Apa yang dipelajari di M03 L06?",
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
        "title": "15. M04 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M04 L01?",
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
        "title": "16. M04 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M04 L02?",
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
        "title": "17. M04 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M04 L03?",
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
        "title": "18. M04 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M04 L04?",
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
        "title": "19. M04 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M04 L05?",
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
        "title": "20. M04 L06",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M04-L06.md",
        "quiz": {
            "question": "Apa yang dipelajari di M04 L06?",
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
        "title": "21. M05 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L01?",
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
        "title": "22. M05 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L02?",
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
        "title": "23. M05 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L03?",
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
        "title": "24. M05 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L04?",
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
        "title": "25. M05 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L05?",
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
        "title": "26. M05 L06",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L06.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L06?",
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
        "title": "27. M05 L07",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M05-L07.md",
        "quiz": {
            "question": "Apa yang dipelajari di M05 L07?",
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
        "title": "28. M06 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M06 L01?",
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
        "title": "29. M06 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M06 L02?",
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
        "title": "30. M06 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M06 L03?",
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
        "title": "31. M06 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M06-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M06 L04?",
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
        "title": "32. M07 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M07 L01?",
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
        "title": "33. M07 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M07 L02?",
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
        "title": "34. M07 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M07 L03?",
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
        "title": "35. M07 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M07 L04?",
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
        "title": "36. M07 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M07-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M07 L05?",
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
        "title": "37. M08 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M08 L01?",
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
        "title": "38. M08 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M08 L02?",
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
        "title": "39. M08 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M08 L03?",
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
        "title": "40. M08 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M08 L04?",
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
        "title": "41. M08 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M08 L05?",
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
        "title": "42. M08 L06",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M08-L06.md",
        "quiz": {
            "question": "Apa yang dipelajari di M08 L06?",
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
        "title": "43. M09 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M09 L01?",
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
        "title": "44. M09 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M09 L02?",
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
        "title": "45. M09 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M09 L03?",
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
        "title": "46. M09 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M09 L04?",
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
        "title": "47. M09 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M09-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M09 L05?",
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
        "title": "48. M10 L01",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L01.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L01?",
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
        "title": "49. M10 L02",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L02.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L02?",
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
        "title": "50. M10 L03",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L03.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L03?",
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
        "title": "51. M10 L04",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L04.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L04?",
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
        "title": "52. M10 L05",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L05.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L05?",
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
        "title": "53. M10 L06",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L06.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L06?",
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
        "title": "54. M10 L07",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L07.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L07?",
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
        "title": "55. M10 L08",
        "description": "<p>Loading...</p>",
        "defaultCode": "print(\"Hello, Python!\")",
        "expectedOutput": "Hello, Python!",
        "hint": "Pelajari materi dan coba kode di editor.",
        "mdFile": "https://raw.githubusercontent.com/personalbotai/python-learning-path/main/lessons/M10-L08.md",
        "quiz": {
            "question": "Apa yang dipelajari di M10 L08?",
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

async function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    const contentHtml = await loadMarkdownContent(lesson, index);
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


// Load and render markdown content
async function loadMarkdownContent(lesson, index) {
    if (!lesson.mdFile) return lesson.description || '';
    try {
        const response = await fetch(lesson.mdFile);
        const mdContent = await response.text();
        return marked.parse(mdContent);
    } catch (e) {
        console.error('Error loading markdown:', e);
        return lesson.description || 'Error loading content';
    }
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
