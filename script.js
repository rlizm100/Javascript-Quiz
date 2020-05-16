
//start the timer
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      scoredisplay()
    }

  }, 1000);
}

//when start button is clicked, start quiz
const start = document.getElementById("start");
start.addEventListener("click", startQuiz)

function startQuiz() {
  start.style.display = "none";
   quiz.style.display = "block";
   timer.style.display = "block";
    setTime();
    changeQuestion();
}


//Function to change the question

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scorepage = document.getElementById("scorepage")
const correctWrong  = document.getElementById("rightWrong")
const scorealert = document.getElementById("scorealert")
const form = document.getElementById("form")
const msg = document.getElementById("rightWrong")


let questions = [
  { question: "what is the correct syntax for referring to an external script aaa.js?",
    choiceA: "&#60script aref = &#34aaa.js&#34&#62",
    choiceB: "&#60script src = &#34aaa.js&#34&#62",
    choiceC: "&#60script source = &#34aaa.js&#34&#62",
    choiceD: "&#60script name = &#34aaa.js&#34&#62",
    correct: "B"
  },
{
  question: "How do you have &#34Welcome&#34 appear in an alert box?",
    choiceA: "msgbox(&#34Welcome&#34)",
    choiceB: "msg(&#34Welcome&#34)",
    choiceC: "alert(&#34Welcome&#34)",
    choiceD: "alertbox(&#34Welcome&#34)",
    correct: "C"
},
{
  question: "How do you create a function in javascript?",
    choiceA: "function = myFunction()",
    choiceB: "function myFunction()", 
    choiceC: "function:myFunction()",
    choiceD: "function; myFunction()",
    correct: "B"
},
{
  question: "How do you add a comment in javascript?",
    choiceA: "&#60!--This is a comment--&#62",
    choiceB: "'This is a comment", 
    choiceC: "(This is a comment)",
    choiceD: "//This is a comment",
    correct: "D"
},
{
  question: "Inside which HTML element do you put the javascript?",
    choiceA: "&#60javascript&#62",
    choiceB: "&#60js&#62", 
    choiceC: "&#60scripting&#62",
    choiceD: "&#60script&#62",
    correct: "D"
}]

const lastQuestion = questions.length - 1;
let currentQuestions = 0;

function changeQuestion() {
        let q = questions[currentQuestions]
        question.innerHTML = "<h2>" + q.question + "</h2>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
        }

let score = 0;

//Check the answer

function checkAnswer(answer){
  if(answer == questions[currentQuestions].correct){
    score++;
    alert("Correct");
    nextQuestion();
    }else{
    secondsLeft = secondsLeft-10;
    alert("Wrong");
    nextQuestion();
    }
  }
  
function nextQuestion() {
  if(currentQuestions < lastQuestion){
    currentQuestions++;
    changeQuestion();
    }else{
    scoredisplay()
  }
}
 
//Display the score page

  function scoredisplay(){
    scorepage.style.display = "block";
    quiz.style.display = "none";
    timer.style.display = "none";
    let scorePercent = Math.round(100 * score/questions.length);
    scorealert.innerHTML = "<h2>" + "Your score is" + " " + scorePercent + "%" + "</h2>";
    record();
   }

 
 
   
   //on score page, enter name and store names and scores
var nameInput = document.getElementById("name");
var scoreForm = document.getElementById("scoreForm");
var scoreList = document.getElementById("score-list");

var scores = [];

function renderScores() {
   
    // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }
}
 // Get stored scores from localStorage
function record() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
 
  if (storedScores !== null) {
    scores = storedScores;
  }
   
}

function storeScores() {
   localStorage.setItem("scores", JSON.stringify(scores));
}

// When name is submitted.
scoreForm.addEventListener("click", function(event) {
  event.preventDefault();

  var scoreText = nameInput.value.trim();

  if (scoreText === "") {
    return;
  }

  let scorePercent = Math.round(100 * score/questions.length);
  scores.push(scoreText + " " + scorePercent + "%");
  nameInput.value = "";

  // Store updated todos in localStorage and show list of scores
  storeScores();
  renderScores();
  });



