var time = 10;
var timeRemaining = document.getElementById('timeRemaining');
var strtBtn = document.getElementById('strtBtn');
var instructions = document.getElementById('instructions');
var headTxt = document.getElementById('headTxt');
var quizContainer = document.getElementById('quiz');
var questionTxt = document.getElementById('questionTxt');
var answerBtn1 = document.getElementById('answerBtn1');
var answerBtn2 = document.getElementById('answerBtn2');
var answerBtn3 = document.getElementById('answerBtn3');
var nxtBtn = document.getElementById('nxtBtn');
var index = -1;
var testScore = 10
var score = document.getElementById('score').innerText 
var correct = 'Correct!'
var incorrect = "Incorrect!"
var result = document.getElementById('result').innerText
var endBtn = document.getElementById('endBtn')

var setScore = function(){
  document.getElementById('score').innerText = testScore;
}
setScore();


const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "npm"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint"
    },
    correctAnswer: "ESLint"
  }
];

var timer = function(){
  timeRemaining.innerText = time;
  time--;
  
}

var runTimer = function(){
  setInterval(function(){
    timeRemaining.innerText = time;
    time--;
    if(time===0){
      clearInterval(runTimer);
    }
  }, 1000);


}

var addScore = function(){
  testScore +=5;
  console.log(testScore)
  score = testScore;
  setScore();
  document.getElementById('result').innerText = correct;
};

var subScore = function(){
  testScore -=5
  console.log(testScore)
  score = testScore;
  setScore();
  document.getElementById('result').innerText = incorrect;
}

var test = function(e){
  console.log(e.target.innerText)
  var userAnswer = e.target.innerText
  if(userAnswer===myQuestions[index].correctAnswer){
    addScore();
  }
  else{
    subScore();
  }

}

var setQuestionEls = function(){
  index++
  console.log('INDEX!'+ index)

questionTxt.innerText = myQuestions[index].question
answerBtn1.innerText = myQuestions[index].answers.a
answerBtn2.innerText = myQuestions[index].answers.b
answerBtn3.innerText = myQuestions[index].answers.c

answerBtn1.addEventListener('click', test);
answerBtn2.addEventListener('click', test);
answerBtn3.addEventListener('click', test);

if(index>myQuestions.length-1){
quizContainer.classList.add('hide');
}

}





var startQuiz = function(){
  runTimer();
  instructions.classList.add('hide');
  headTxt.innerHTML = "Quiz Started!"
  quizContainer.classList.remove('hide');
  let i = 0;
  console.log(i)
  setQuestionEls();
  nxtBtn.addEventListener('click', function(){
    setQuestionEls();
  })
  

}

strtBtn.addEventListener('click', startQuiz)

// var endQuiz = function(){
//   clearInterval(runTimer);
// }

//my questions
// const quizContainer =document.querySelector('#quiz');
// const resultsContainer =document.querySelector('#results');
// const submitButton=document.querySelector('#submit');
