var startBtn = document.querySelector('.start-button',)
var questionContainer = document.getElementById('question-container')
var questionIntro = document.querySelector('.quiz-intro')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var randomQuestion, currentQuestionIndex


// // if start button is "clicked"

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

// then screen changes to questions screen 
function setNextQuestion(){
    showQuestion(randomQuestion[currentQuestionIndex])
}


// function to generate random question
// with 4 different answers
function showQuestion(myQuestions) {
    questionElement.innerText = question.question
}

// array of questions
var myQuestions = [
    {
        //beta question to try and get the function working
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

// timer starts in right hand corner
// if (startbtn pressed){
    //then timer starts
//}

// when answer is selected it is either correct or incorrect
//correct answers are stored to high score
// when questions and timer run out player inputs initials for high score
// then are asked to play again "while loop"