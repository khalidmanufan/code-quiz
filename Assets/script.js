const startButton = document.getElementById(`start-btn`)
const nextButton = document.getElementById(`next-btn`)
const questionContainerElement = document.getElementById
(`question-container`)
const questionElement = document.getElementById(`question`)
const answerButtonElement = document.getElementById(`answer-buttons`)
let time = document.querySelector(`#time`)
let index = 0;
let timer = 0;
let interval = 0;

let countDown = () => {
    if(timer === 20){
        clearInterval(interval);
    } else{
        timer++;
        console.log(timer);
    }
}
setInterval(countDown, 1000);

let loudData =() => {
    question.innerText = index + 1 ;

    timer = 0;

}
loudData();


let shuffledQuestion, currentQuestionIndex


startButton.addEventListener(`click`, startGame)
nextButton.addEventListener(`click`, () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log(`started`);
    startButton.classList.add(`hide`)
    shuffledQuestion = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove(`hide`)
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])


}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer =>{
        const button = document.createElement(`button`)
        button.innerText = answer.text
        button.classList.add(`btn`)
        if(answer.correct)  {
            button.dataset.correct = answer.correct
        }
        button.addEventListener(`click`,selectAnswer)
        answerButtonElement.appendChild(button)
 
    } )


}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add(`hide`)
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }


}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestion.length > currentQuestionIndex +1){
    nextButton.classList.remove(`hide`)
    } else{
        startButton.innerText = `restart`
        startButton.classList.remove(`hide`)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add(`correct`)
    } else {
        element.classList.add(`wrong`)
    }
}
function clearStatusClass(element) {
    element.classList.remove(`correct`)
    element.classList.remove(`wrong`)
}

const questions = [
    {
        question: `Who won the Man of the Match award in the 2014 World Cup final?`,
        answer: [
            {text: `Mario Goetze`, correct: true},
            {text: `Sergio Aguero`, correct: false},
            {text: `Lionel Messi`, correct: false},
            {text: `Bastian Schweinsteiger`, correct: false}
        ]
        
    },
    {
        question: `Against which country did Wayne Rooney break the England goalscoring record?`,
        answer: [
            {text: `Switzerland`, correct: true},
            {text: `San Marino`, correct: false},
            {text: `Lithuania`, correct: false},
            {text: `Slovenia`, correct: false}

        ]
        
    },
    {
        question: `After losing a key player in the first game, which team went onto the semi-finals of Euro 2020?`,
        answer: [
            {text: `Denmark`, correct: true},
            {text: `Spain`, correct: false},
            {text: `Wales`, correct: false},
            {text: `England`, correct: false}
        ]
        
    },
    {
        question: `Which footballer holds the record for the highest number of assists in the Premier League?`,
        answer: [
            {text: `Ryan Giggs`, correct: true},
            {text: `Cesc Fabregas`, correct: false},
            {text: `Frank Lampard`, correct: false},
            {text: `Paul Scholes`, correct: false}
        ]
        
    }

]