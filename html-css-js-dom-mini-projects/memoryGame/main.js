let clickCounter = 0
let unClicked = true
let firstDiv = undefined
let currentImgSource = undefined
let cardsFoundsCount = 0
let boardSize = 8;
let doubleArray = [];

let imagesArray = ["images/A_C_Milan_logo_PNG1.png"
    , "images/Leicester_city_logo_PNG1.png"
    , "images/PSV_logo_PNG1.png"
    , "images/barcelona_logo_PNG1.png"
    , "images/Atletico_Madrid_logo_PNG2.png"
    , "images/Aston_Villa_Logo_PNG.png"
    , "images/arsenal_logo_PNG1.png"
    , "images/Hapoel_Tel_Aviv_Logo.png"
    , "images/Chelsea_logo_PNG1.png"
    , "images/liverpool_logo_PNG1.png"
    , "images/Internazionale_logo_PNG2.png"
    , "images/manchester_city_logo_PNG2.png"
    , "images/Olympique_Lyonnais_logo_PNG1.png"
    , "images/PSG_logo_PNG14.png"
    , "images/RB_Leipzig_logo_PNG2.png"
    // , "images/Real_madrid_logo_PNG1.png"
    // , "images/Roma_logo_PNG1.png"
    // , "images/Sevilla_logo_PNG2.png"
    // , "images/Stoke_City_logo_PNG1.png"
    // , "images/Strasbourg_logo_PNG3.png"
    // , "images/tottenham_hotspur_logo_PNG1.png"
    // , "images/Valencia_logo_PNG1.png"
];

const boardContainer = document.querySelector('.board-container');

const grid = document.querySelector('.board-container');

generateRandomPhotos(boardSize);

function changeBoardSize(numberOfCards) {
    boardSize = numberOfCards;
    if (boardSize == 6) {
        grid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
        grid.style.gridTemplateRows = '1fr 1fr 1fr';
        grid.style.gridGap = '2px';
    }
    else if (boardSize == 8) {
        grid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
        grid.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
        grid.style.gridGap = '2px';
    }
    else if (boardSize == 10) {
        grid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
        grid.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr';
        grid.style.gridGap = '2px';
    }
    if (boardSize == 15) {
        grid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
        grid.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr';
        grid.style.gridGap = '2px';
    }
    return boardSize;
}
function shuffleArray() {
    let slicedArray = imagesArray.slice(0, boardSize)
    doubleArray = slicedArray.concat(slicedArray)
    for (let i = doubleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = doubleArray[i];
        doubleArray[i] = doubleArray[j];
        doubleArray[j] = temp;
    }
    return doubleArray;
}

function generateRandomPhotos(numberOfCards) {
    changeBoardSize(numberOfCards);
    boardContainer.innerHTML = '';
    const shuffledArray = shuffleArray()
    for (const photo of shuffledArray) {
        let div = document.createElement('div');
        div.classList.add('card');
        let img = document.createElement('img');
        img.src = photo;
        div.appendChild(img);
        div.addEventListener("click", () => {
            if (unClicked === true) {
                firstDisplayToggle(div);
            }
            else {
                secondDisplayToggle(div);
            }
        });
        boardContainer.appendChild(div);
    }
}
function firstDisplayToggle(clickedDiv) {
    if (clickedDiv.classList.contains('revealed') === false && clickCounter < 2) {
        currentImgSource = clickedDiv.querySelector('img').src
        unClicked = false
        firstDiv = clickedDiv
        clickedDiv.classList.toggle('revealed')
        clickCounter++
    }
}

function secondDisplayToggle(clickedDiv) {
    if (clickedDiv.classList.contains('revealed') === false && clickCounter < 2) {
        unClicked = true
        clickedDiv.classList.toggle('revealed')
        clickCounter++
        setTimeout(function () {
            isSame(clickedDiv);
        }, 500);
    }
}

function isSame(clickedDiv) {
    clickCounter = 0
    if (currentImgSource == clickedDiv.querySelector('img').src) {
        cardsFoundsCount++
        isWin()

    }
    else {
        clickedDiv.classList.toggle('revealed')
        firstDiv.classList.toggle('revealed')
    }
}

function isWin() {
    if (cardsFoundsCount == doubleArray.length / 2) {
        console.log(doubleArray.length);
        let elemWinMessage = document.querySelector(".winning-message");
        elemWinMessage.innerHTML += "<h2>You won!!!</h2>";
    }
}