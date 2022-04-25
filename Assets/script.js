function buildQuiz() {

    document.getElementById("showQuiz").style.visibility = "hidden"
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}


var quizContainer = document.getElementById("quiz");
var myQuestions = [{
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the best dog ever created?",
        answers: {
            a: "French Bulldogs",
            b: "English Bulldogs",
            c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
    }
];
var el = document.getElementById('showQuiz')
if (el) {
    addEventListener('click', buildQuiz);
}