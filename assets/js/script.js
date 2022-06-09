var questionBank= [
    {
        question : 'What is the HTML element do we use to put JavaScript',
        option : ['<JavaScript>','<script>','<js>','<scripting>'],
        answer : '<script>'
    },
    {
        question : 'Where is the correct plaxe to insert JavaScript within your HTML?',
        option : ['In the <head>','both the <head> and <body>','Anywhere you want','end of <body> section'],
        answer : 'end of <body> section'
    },
    {
        question : 'How would you write a "Hello World!" in the console?',
        option : ['console.log("Hello World!")','window.alert("Hello World!")','document.write("Hello World!")'],
        answer : 'console.log("Hello World!)'
    },
    {
        question : 'How to you write an arrow function?',
        option : ['(param1, paramN) => expression', '(=>) (params1, params2)', 'param => {value}' ],
        answer : '(param1, paramN) => expression'
    },
    {
        question : 'What is the proper syntax for var?',
        option : ['var: 3', 'var = 3', 'var => 6', "var(6)"],
        answer : 'var = 3'
    },
    {
        question: 'What is the proper way to write an array?',
        option: ['var: numArry(1,2,3,4)', 'var numArry => {1,2,3,4,5,6}', 'var => numArry{1,2,3,4,5}', 'var numArry = [1,2,3,4,5]'],
        answer: 'var numArry = [1,2,3,4,5]'
    },
    {
        question: 'How do you add a comment in a JavaScript file?',
        option: ['<!--comment-->', '/* comment*/', '//comment'],
        answer: '//comment'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();