//console.log("Hello everybody");
var chalk=require('chalk');

var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question(chalk.white.bgBlue.bold("May I know your name? "));

console.log(chalk.red.bgBlue.bold("Welcome "+ userName + " lets see how well you know me"));

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Nice!");
    score = score + 1;
    
  } else { 
    console.log("uhh oh!");
   
  }

  console.log("current score: ", score);
  console.log(chalk.blue.bgWhite.bold("-+-+-+-+-+-+-+-"))
}

// array of objects
var questions = [{
  question: "What is Palash's favourite social media platform instagram/youtube",
  answer: "Youtube"
}, {
  question: "What's his favouriate color? ",
  answer: "Red"
},
{
  question: "What's his favouriate food? ",
  answer: "Biryani"
},
{ 
  question: "What was his goto hangout place in Mumbai? ",
  answer: "Fun Republic"
}
];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You SCORED: ", score);
console.log("Feel free to mail me similar ques at paludhwani@gmail.com ");
