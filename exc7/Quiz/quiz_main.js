const questionsArray = [[false, false, true, false]];
let ansArray = [];

let answerMarkWrong = document.querySelectorAll(".wrongAnswer")
let answerMarkCorrect = document.querySelectorAll(".correctAnswer")
let resultsPop = document.querySelector(".results")


function paintWrongAnswers() {
    answerMarkWrong.forEach(function (element) {
        element.style.color = 'red';
        element.style.fontWeight = 'bold';
    });
}
function paintCorrectAnswers() {
    answerMarkCorrect.forEach(function (element) {
        element.style.color = 'green';
        element.style.fontWeight = 'bold';
    });
}
function loadToLocalStorage(answer) {
    ansArray.push(document.getElementById(answer).value);
    localStorage.setItem("storageAnswers", ansArray);
    console.log(ansArray);
}
function checkAnswers() {
    let score = 0;
    paintWrongAnswers();
    paintCorrectAnswers();
    for (let question = 0; question < questionsArray.length; question++) {
        for (let answer = 0; answer < questionsArray[question].length; answer++) {
            if (questionsArray[question][answer] == true && document.getElementById(`q${question + 1}a${answer + 1}`).checked == true) {
                score += 10
            }
        }
    }
    resultsPop.innerHTML = score;
}