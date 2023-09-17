// get a handle on all html tags,objects,classes,identifiers
// var welcomeScreen = document.querySelector(".welcome");
// var timer = docmuent.querySelector(".time");
// var questions = document.querySelector(".questionBox");
// var start = document.querySelector("#startBtn");

var questionEl = document.getElementById("question");
var answerbtn = document.getElementById("answer-buttons");

                // I can also use this as well var start = document.getElementById("startBtn");
                
// console.log everything to ensure it works
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
function startQuiz(){
        qInd = 0;
        score = 0 
        startBtn.innerHTML = "Start"
        showQuestions()
 
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
              alert("correct");
              score++;
             
          } else{
             alert("incorrect"); }      
             
           });
      });
}

// next question to come up after last question

function nextQuestion() {
        qInd++;
        if(qInd < questions.length) {
        showQuestions();
        } else {
        showScore(); }

}
        // event listner for the next question
 answerbtn.addEventListener("click", () =>{
        if (qInd < questions.length) {
                nextQuestion();}
 }) 
//  function to show the score
function showScore (){
        var finalScore = Math.round((score/6)*100);
        alert("Your score is " + finalScore)
}
//      function to reset 
function reset() {
        while(answerbtn.firstChild){
                answerbtn.removeChild(answerbtn.firstChild); }
    }
}
        startQuiz();

        


// save answers to local storage calculate score
        // high scores page with initials
// create a timer 5 sec per question
        // make timer go down by 2 sec when answered incorrectly
// create a game over tag

// create a restart or try again button


