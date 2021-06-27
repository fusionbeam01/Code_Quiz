var time = questions.length *15;
var currentquestionIndex = 0;

var startBtn = document.querySelector("#start");
var questionsElements = document.querySelector("#questions");
var timmerElemets = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var titleElement = document.querySelector("#question-title");


function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionsElements.removeAttribute("class");
}

function getCurrentQuestion(){
    var currentQuestion = questions[currentquestionIndex];
    titleElement.textContent =currentQuestion.title;
    questionChoices.textContent = currentQuestion.choice;

    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choices");
        choiceNode.setAttribute("value", currentQuestion.choice[i]);

        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];

        questionChoices.appendChild(choiceNode);
    }
}







startBtn.addEventListener("click", startQuiz);