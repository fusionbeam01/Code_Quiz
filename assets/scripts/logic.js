var time = questions.length *15;
var currentQuestionIndex = 0;

var startBtn = document.querySelector("#start");
var questionsElements = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var titleElement = document.querySelector("#question-title");

function displayQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    titleElement.textContent = currentQuestion.title;
//questionChoices.textContent = currentQuestion.choice;

    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.classList.add("choices");
        choiceNode.setAttribute("value", currentQuestion.choice[i]);
        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];
        choiceNode.addEventListener('click', function(event) {
            if(event.target.value === currentQuestion.answer){
               //GOT ANSWER RIGHT
               currentQuestionIndex++
               displayQuestion()

            } else {
                //GOT IT WRONG
                time -= 5
                
            }
        })


        questionChoices.appendChild(choiceNode);
    }
}

function startQuiz() {
    startScreen.classList.toggle("hide");
    questionsElements.classList.toggle('hide')
    displayQuestion()
}


startBtn.addEventListener("click", startQuiz);