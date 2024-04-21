let arrayRandomNumbers = [];
let arrayUserGuess = [];
let guessesCounter = 0;
let elemNum1 = document.querySelector('#num1');   //User Guesses UI
let elemNum2 = document.querySelector('#num2');
let elemNum3 = document.querySelector('#num3');
let elemNum4 = document.querySelector('#num4');
let elemResults = document.querySelector('#resultsBullsAndCows');
let elemGiveUp = document.querySelector('#afterGiveUp');
let elemHistory = document.querySelector('#history');
let startTime = Date.now();
let endTime = 0;
let elapsedTimeInSeconds = 0;
let objHistory = [];
function genereteNewRandomNumber() {
    arrayRandomNumbers = [];
    let firstNumber = Math.floor(Math.random() * 9) + 1;
    arrayRandomNumbers.push(firstNumber);
    while (arrayRandomNumbers.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!arrayRandomNumbers.includes(randomNumber)) {
            arrayRandomNumbers.push(randomNumber);
        }
    }
}
genereteNewRandomNumber();
console.log(arrayRandomNumbers);

function userGuessesPush() {
    arrayUserGuess = [];
    arrayUserGuess.push(Number(elemNum1.value));
    arrayUserGuess.push(Number(elemNum2.value));
    arrayUserGuess.push(Number(elemNum3.value));
    arrayUserGuess.push(Number(elemNum4.value));
    console.log(arrayUserGuess);
}
function validateUserArray() {
    for (let i = 0; i < arrayUserGuess.length; i++) {
        if (arrayUserGuess[i] < 0 || arrayUserGuess[i] > 9 || isNaN(arrayUserGuess[i])) {
            return false;
        }
        for (let j = i + 1; j < arrayUserGuess.length; j++) {
            if (arrayUserGuess[i] === arrayUserGuess[j]) {
                return false;
            }
        }
    }
    return true;
}
function checkUserGuess() {
    let bullsCounter = 0;
    let cowsCounter = 0;
    userGuessesPush();
    if (!validateUserArray()) {
        return alert("Please enter a 4-digit number with unique digits.")
    }
    for (let i = 0; i < arrayRandomNumbers.length; i++) {
        if (arrayRandomNumbers.includes(arrayUserGuess[i])) {
            cowsCounter++;
        }
        if (arrayUserGuess[i] == arrayRandomNumbers[i]) {
            cowsCounter--;
            bullsCounter++;
        }
    }
    console.log(bullsCounter, cowsCounter);
    guessesCounter++;
    if (bullsCounter == 4) {
        endTime = Date.now();
        elapsedTimeInSeconds = (endTime - startTime) / 1000;
        elemResults.innerHTML = `Congratulations! You guessed the number ${arrayRandomNumbers[0]}${arrayRandomNumbers[1]}${arrayRandomNumbers[2]}${arrayRandomNumbers[3]} in ${guessesCounter} attempts and ${elapsedTimeInSeconds} seconds`;
        pushObjHistory();
    }
    else {
        elemResults.innerHTML = `Bulls: ${bullsCounter}, Cows: ${cowsCounter}`;
    }
}

function giveUp() {
    elemGiveUp.innerHTML = `The secret numbers is: ${arrayRandomNumbers[0]}${arrayRandomNumbers[1]}${arrayRandomNumbers[2]}${arrayRandomNumbers[3]}`
    elemResults.innerHTML = " ";
}
function newGame() {
    startTime = Date.now();
    genereteNewRandomNumber();
    console.log(arrayRandomNumbers);
    elemGiveUp.innerHTML = `The secret numbers is: ????`
    elemResults.innerHTML = `Bulls: , Cows: `;
}
// function pushObjHistory() {
//     objHistory.push({ attempts: guessesCounter, gameTime: elapsedTimeInSeconds })
//     console.log(objHistory);
// }
// function showHistory() {
//     for (let i = 0; i < objHistory.length; i++) {
//         let historyMessage = `<tr><td>${objHistory[i]["attempts"]}</td><td>${objHistory[i]["gameTime"]}</td>`;
//         elemHistory.innerHTML += historyMessage

//     }
// }