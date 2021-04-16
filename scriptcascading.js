const quizDB = [
    {
        question:"Q1: CSS stands for - ",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of these",
        ans:"ans3"
    },
    {
        question:"Q2: The property in CSS used to change the background color of an element is - ",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        ans:"ans3"
    },
    {
        question:"Q3: The CSS property used to control the element's font-size is -",
        a: "text-style",
        b: "font-size",
        c: "text-size",
        d: "None of the Above",
        ans:"ans2"
    },
    {
        question:"Q4: Which of the following CSS property is used to set the background image of an element?",
        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        ans:"ans2"
    },
    {
        question:"Q5:The CSS property used to make the text bold is - ",
        a: "font-weight : bold",
        b: "weight: bold",
        c: "font: bold",
        d: "style: bold",
        ans:"ans1"
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