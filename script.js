const question =[
    {
        question: "How old is Sandee",
        a: "16",
        b: "17",
        c: "18",
        d: "19",
        correct: "c",
    },
    {
        question: "Sandee's favourite thing to drink",
        a: "Soft drink",
        b: "Wine",
        c: "Alcohol",
        d: "Fruit juice",
        correct: "b",
    },
    {
        question: "Sandee's hobby is",
        a: "Sleeping",
        b: "Coding",
        c: "Eating",
        d: "Playing game",
        correct: "b",
    }
];
const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz(){
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText+ currentQuizData.a
    b_text.innerText+ currentQuizData.b
    c_text.innerText+ currentQuizData.c
    d_text.innerText+ currentQuizData.d
}
 function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.ariaChecked = false)
 }
 function getSelected() {
    let answerEls
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer=answerEl.id
        }
    })
    return answer
 }

 submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score ++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        }
        else{
            quiz.innerHTML = '<h2>You answered $(score) complete</h2>'
        }
    }
 })