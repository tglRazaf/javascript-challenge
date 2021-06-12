class Quiz{
    constructor(question, answers, realAnswer){
        this.question = question
        this.answers = answers
        this.realAnswer = realAnswer
    }
}
const quiz1 = new Quiz('Mon pseudo sur PUBG', ['tgl', 'noelle', 'lostSeXy', 'tglSaMa'], 'lostSeXy')
const quiz2 = new Quiz('qui est solenna', ['crush', 'personne', 'copine', 'autre'], 'personne')
let quizs = [quiz1, quiz2]

const answers_div = document.querySelector('.answers')

let i=0
while (i < quizs.length) {
    document.querySelector('.question').innerText = quizs[i].question
    for (let index = 0; index < quizs[i].answers.length; index++) {
        let answers_btn = document.createElement('button')
        answers_btn.innerText = quizs[i].answers[index]
        answers_div.appendChild(answers_btn)
        answers_btn.addEventListener('click', function(){
            console.log(this.innerText)
            if (this.innerText == quizs[i-1].realAnswer) {
                console.log(i)
            }
        })
    }
    i++
}


console.log(quizs)