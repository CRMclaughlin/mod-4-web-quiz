
var startBtn = document.querySelector('.start-button')


var questions = ["What does a compiler do?", "Which of the following is not a type of computer code related to Program Execution?", "Which of the following is not a programming language?"]

var question


function renderQuestions() {
    
}

// if start button is "clicked"

function startRound() {
    var randomIndex = Math.floor(Math.random() * questions.length)
    question = questions[randomIndex]
    renderQuestions()


}

startBtn.addEventListener("click", startRound)











// then screen changes to questions screen 
// document.getElementById("inner-container").style.visibility = "hidden";


// timer starts in right hand corner
// questions are randomly selected
// with 4 different answers
// when answer is selected it is either correct or incorrect
//correct answers are stored to high score
// when questions and timer run out player inputs initials for high score
// then are asked to play again "while loop"