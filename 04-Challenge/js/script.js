// get a handle on all html tags,objects,classes,identifiers
var welcomeScreen = document.getElementById("welcome");
var question = document.getElementById("questionBox");
var start = document.getElementById("startBtn"); 
var restart = document.getElementById("restartBtn");              
var highscore = document.querySelector(".userinit");
var questionEl = document.getElementById("question");
var answerbtn = document.getElementById("answer-buttons");
var timer = document.querySelector(".time");
var result = document.getElementById("result");
var resetGame = document.getElementById("resetGame");
var gameOver = document.getElementById("game-over");
var initialsInput = document.querySelector("#user-initials");
var scoreInfo = document.querySelector("#high-score");
var finScore = document.getElementById("final-score");
var playAgain = document.getElementById("play-again");
var submitBtn = document.getElementById("submit");
// start timer
var secondsLeft = 60;

function startTime() {
  var timeInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " left till end of quiz";

    if(secondsLeft <= 0 || qInd === questions.length) {
      clearInterval(timeInterval);
        reset();}
    }, 1000);  
       
}

// create questions and answers object

var questions = [{
        que: "How does a WHILE loop start?",
        ans: [
        { text: "while{i<=10}", isCorrect: false },
        { text: "while(i<=10)", isCorrect: true },
        { text: "while i<=10", isCorrect: false }]
},
{
        que: "How to write an IF statement for executing some code IF 'i' is NOT equal to 5?",
        ans:[
        { text: "if i =! 5 then", isCorrect: false },
        { text: "if i !> 5", isCorrect: false },
        { text: "if(i !=5", isCorrect:  true }]
},
{
        que: "How can you add a comment in JavaScript?",
        ans:[
        { text: "//this is a comment", isCorrect: true },
        { text: "'this is a comment'", isCorrect: false },
        { text: "<--this is a comment-->", isCorrect:false }]
},
{
        que: "What is the correct way to write an JavaScript array?",
        ans:[
        { text: "var colors = ['red','green','blue']", isCorrect: true },
        { text: "var colors = {'red','green','blue'}", isCorrect: false },
        { text: "var colors = ['red'],['green'],['blue']", isCorrect:false }]
},
{
        que: "How do you round the number 7.25 to the nearest integer?",
        ans:[
        { text: "Math.round(7.25)", isCorrect: true },
        { text: "Round.math(7.25)", isCorrect: false },
        { text: "Math.round = (7.25)", isCorrect:false }]
},
{
        que: "Javascript is the sama as Java?",
        ans:[
        { text: "True", isCorrect: false },
        { text: "False", isCorrect: true },
        { text: "I dont know", isCorrect:false }]
}
]
var qInd = 0;
var score = 0;

// function to start the whole quiz/welcome screen
startBtn.addEventListener("click", startQuiz)
function startQuiz(){
        welcomeScreen.classList.add("hide");
        question.classList.remove("hide");
        showQuestions();
        startTime();
}

// restartBtn.addEventListener("click", welcomeScreen)
        
 
// function to show questions
function showQuestions() {
        reset ();
        var currentQuestion = questions[qInd];
        questionEl.innerHTML = currentQuestion.que;

        currentQuestion.ans.forEach(answer => {
                var button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerbtn.appendChild(button);  

                // event listner for button click
        button.addEventListener("click", function() {    
                var ansButton = answer.isCorrect;
        if (ansButton === true) {
        result.innerHTML = "correct";
       score++;
             
        } else{
        result.innerHTML = "incorrect"; 
        secondsLeft = secondsLeft - 5;}      
             
           });
      });
   }

// next question to come up after last question

function nextQuestion() {
        qInd++;
        if(qInd < questions.length) {
        showQuestions();
        } else {
        showScore();}

    }
        // event listner for the next question
 answerbtn.addEventListener("click", () =>{
        if (qInd < questions.length) {
                nextQuestion();}
    }) 

// save answers to local storage calculate score
        // high scores page with initials
function showScore (){

        var finalScore = Math.round((score/6)*100);
        question.classList.add("hide");
        gameOver.classList.remove("hide");

       finScore.innerHTML = "your score is " + finalScore;
       localStorage.setItem("high-score", finalScore);

        submitBtn.addEventListener("click", function(event) {
                event.preventDefault();
                var ints = initialsInput.value;
                localStorage.setItem("user-initials", ints);
                gameOver.classList.add("hide");
                playAgain.classList.remove("hide");
                scoreInfo.innerHTML = localStorage.getItem("user-initials") + " _ " + localStorage.getItem("high-score")
       
                resetGame.addEventListener("click", function(){
                        playAgain.classList.add("hide");
                        welcomeScreen.classList.remove("hide");        
                    });
      
     });   
       
    }

    resetGame.addEventListener("click", function(){
        playAgain.classList.add("hide");
        welcomeScreen.classList.remove("hide"); 
        qInd = 0
        score = 0  
        secondsLeft = 60;     
    });
//      function to reset 
function reset() {
        while(answerbtn.firstChild){
                answerbtn.removeChild(answerbtn.firstChild); }
                
    }
    

   
     

        



// create a timer 5 sec per question
        // make timer go down by 2 sec when answered incorrectly
// create a game over tag
//  function to show the score
// create a restart or try again button


