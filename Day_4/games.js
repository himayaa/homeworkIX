
class Answer {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    static QuestionArray = [5];
    static i = 0;
    addTo() {
        QuestionArray[i] = this;
        i++;
    }
}

let questionCounter = 0;

const myFirstQuestion = new Answer('this is my question', 'this is my answer');
myFirstQuestion.addTo();

let guess = document.getElementById('guess');
let output = document.getElementById('output');

function verifyGuess () {

    let text = guess.value;

    if (text === QuestionArray[questionCounter].answer) {
        console.log("You got it");
        output.innerHTML = `You got it, it is ${text}`;
    } else {
        console.log("Nope");
        output.innerHTML = `Try again`;
    }
 
    newGame();
}

function newGame () {
    //questionCounter = generate random number 0-5
    //display new element below heading
    //guess field = ' ';
}