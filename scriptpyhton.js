const quizDB = [
    {
        question:"Q1: Which of the following is an invalid variable?",
        a: "my_string_1",
        b: "1st_string",
        c: "foo",
        d: " _",
        ans:"ans2"
    },
    {
        question:"Q2: Which of the following cannot be a variable?",
        a: " __init__",
        b: "in",
        c: "it",
        d: "on",
        ans:"ans2"
    },
    {
        question:"Q3: Which one of these is floor division?",
        a: "/",
        b: "%",
        c: "//",
        d: "None of the Above",
        ans:"ans3"
    },
    {
        question:"Q4: What is the answer to this expression, 22 % 3 is?",
        a: "7",
        b: "5",
        c: "0",
        d: "1",
        ans:"ans4"
    },
    {
        question:"Q5: Which of these in not a core data type?",
        a: "lists",
        b: "dictionary",
        c: "tuples",
        d: "class",
        ans:"ans4"
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