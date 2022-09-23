var startBtn = document.querySelector('.start-button',)
var questionContainer = document.getElementById('question-container')
var questionIntro = document.querySelector('.quiz-intro')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var randomQuestion, currentQuestionIndex



startBtn.addEventListener("click", startGame)

function startGame() {
    console.log("Started")
    questionIntro.classList.add("hide")
    startBtn.classList.add("hide")
    randomQuestion = myQuestions.sort(() => Math.random() * .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(randomQuestion[currentQuestionIndex])
}

function showQuestion(myQuestions) {
    questionElement.innerText = question.question
}


var myQuestions = [
    {
    question:"What is 2+2?",
    answers: {
        a: '3',
        b: '9',
        c: '4',
        d: '6'
    },
    correctAnswer: 'c'
    }

];

// var question


// function renderQuestions() {
//     var str = ""
//     for (var i = 0; i < question.length; i++){
        
//     }
    
// }

// // if start button is "clicked"

// function startRound() {
//     var randomIndex = Math.floor(Math.random() * questions.length)
//     question = questions[randomIndex]
//     renderQuestions()


// }

// then screen changes to questions screen 
// timer starts in right hand corner
// questions are randomly selected
// with 4 different answers
// when answer is selected it is either correct or incorrect
//correct answers are stored to high score
// when questions and timer run out player inputs initials for high score
// then are asked to play again "while loop"