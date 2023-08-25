const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");

const questions = [
    {
        question: "What is JavaScript?",
        options: [
            "A markup language",
            "A programming language",
            "A stylesheet language",
            "A database management language"
        ],
        answer: 1
    },
    {
        question: "What is the correct way to include a JavaScript file in an HTML document?",
        options: [
            "<script href='script.js'></script>",
            "<script src='script.js'></script>",
            "<javascript src='script.js'></javascript>",
            "<link rel='javascript' href='script.js'>"
        ],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a constant variable?",
        options: ["let", "var", "const", "variable"],
        answer: 2
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        options: [
            "To break out of a loop",
            "To declare a new variable",
            "To log data to the console",
            "To specify the value the function should return"
        ],
        answer: 3
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        answer: 0
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        options: ["&", "+", "*", "|"],
        answer: 1
    },
    {
        question: "What does the 'DOM' stand for?",
        options: [
            "Document Object Model",
            "Dynamic Oriented Model",
            "Data Oriented Model",
            "Document Order Model"
        ],
        answer: 0
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: ["boolean", "string", "number", "float"],
        answer: 3
    },
    {
        question: "What does NaN stand for in JavaScript?",
        options: [
            "Not a Node",
            "New as Number",
            "No Algorithm Needed",
            "Not a Number"
        ],
        answer: 3
    },
    {
        question: "Which keyword is used to declare a constant variable?",
        options: ["let", "var", "const", "variable"],
        answer: 2
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["boolean", "string", "number", "function"],
        answer: 3
    },
    {
        question: "Which loop is used to iterate over the properties of an object?",
        options: ["for", "while", "do...while", "for...in"],
        answer: 3
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.addEventListener("click", () => checkAnswer(index));
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        // Provide feedback for correct answer
        alert("Correct!");
    } else {
        // Provide feedback for wrong answer
        alert("Wrong answer. Try again.");
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
});

loadQuestion();
