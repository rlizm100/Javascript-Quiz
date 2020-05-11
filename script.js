
//start the timer
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time is Up!");
    }

  }, 1000);
}

setTime();

//Function to change the question

var qdiv = document.getElementById("#question")
var switchques = document.querySelector(".switch")

function changeQuestion(event) {
        event.preventDefault();
        qdiv.innerhtml = "<h2>How do you add a comment in javascript?</h2>"
        
      }

switchques.addEventListener("click", changeQuestion);

//Inside which HTML element do you put the javascript
// <javascript>
//<js>
//<scripting>
//<script>

//what is the correct syntax for referring to an external script aaa.js
//<script aref = "aaa.js">
//<script src = "aaa.js">
//<script source = "aaa.js">
//<script name = "aaa.js">

//How do you have "Welcome" appear in an alert box?
//msgbox("Welcome")
//msg("Welcome")
//alert("Welcome")
//alertbox("Welcome")

//How do you create a function in javascript
//function = myFunction()
//function myFunction()
//function:myFunction()
//function; myFunction()

//How do you add a comment in javascript?
//<!--This is a comment-->
//'This is a comment
//(This is a comment)
////This is a comment
