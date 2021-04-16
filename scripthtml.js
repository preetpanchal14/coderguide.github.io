const quizDB = [
    {
        question:"Q1:  HTML stands for - ",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans:"ans3"
    },
    {
        question:"Q2:  Which of the following tag is used for inserting the largest heading in HTML? ",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans:"ans2"
    },
    {
        question:"Q3: Which of the following tag is used to insert a line-break in HTML? ",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans:"ans1"
    },
    {
        question:"Q4: How to create a hyperlink in HTML? ",
        a: "<a href = \"www.javatpoint.com\"> javaTpoint.com </a>",
        b: "<a url = \"www.javatpoint.com\" javaTpoint.com /a>",
        c: "<a link = \"www.javatpoint.com\"> javaTpoint.com </a>",
        d: "<a> www.javatpoint.com <javaTpoint.com /a>",
        ans:"ans1"
    },
    {
        question:"Q5:Which of the following element is responsible for making the text italic in HTML? ",
        a: "<i>",
        b: "<italic>",
        c: "<it>",
        d: "<pre>",
        ans:"ans2"
    }

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b; 
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () =>{
       let answer;
       answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
       })
       return answer;
}
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> You Scored ${score} / ${quizDB.length} &#9996.</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})