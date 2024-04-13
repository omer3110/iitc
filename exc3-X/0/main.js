
function buildBoard(boardXO, boardSize) {
    for (y = 0; y < boardSize; y++) {
        boardXO.push([]);
        for (x = 1; x <= boardSize; x++) {
            boardXO[y].push(`${x}`);
        }
    }
    return boardXO;
}
function isTaken(boardXO, row, column) {
    row = row - 1;
    column = column - 1;
    if (boardXO[row][column].toLowerCase() == 'x' || boardXO[row][column].toLowerCase() == 'o') {
        return true;
    }
    return false;
}
function push(boardXO, row, column, XorO) {
    row = row - 1;
    column = column - 1;
    if (XorO.toLowerCase() == 'x') {
        boardXO[row][column] = 'X';
    }
    else {
        boardXO[row][column] = 'O';
    }
}
function winByRow(boardXO, boardSize) {
    let countX = 0, countO = 0;
    for (y = 0; y < boardSize; y++) {
        for (x = 0; x < boardSize; x++) {
            if (boardXO[y][x].toLowerCase() == 'x') {
                countX++;
            }
            if (boardXO[y][x].toLowerCase() == 'o') {
                countO++;
            }
        }
        if (countX == boardSize) {
            return true;
        }
        if (countO == boardSize) {
            return true;
        }
        countX = 0, countO = 0;
    }
    return false;
}

function winByCol(boardXO, boardSize) {
    let countX = 0, countO = 0;
    for (y = 0; y < boardSize; y++) {
        for (x = 0; x < boardSize; x++) {
            if (boardXO[x][y].toLowerCase() == 'x') {
                countX++;
            }
            if (boardXO[x][y].toLowerCase() == 'o') {
                countX++;
            }
        }
        if (countX == boardSize) {
            return true;

        }
        if (countO == boardSize) {
            return true;
        }
        countX = 0, countO = 0;
    }
    return false;
}
function winDiagonal(boardXO, boardSize) {
    let countX = 0, countO = 0;
    let y = 0, x = 0;
    for (i = 0; i < boardSize; i++) {
        if (boardXO[y][x].toLowerCase() == 'x') {
            countX++;
        }
        if (boardXO[y][x].toLowerCase() == 'o') {
            countO++;
        }
        y++;
        x++;
    }
    if (countX == boardSize) {
        return true;
    }
    if (countO == boardSize) {
        return true;
    }
    countX = 0, countO = 0;
    y = boardSize - 1, x = 0;
    for (i = boardSize - 1; i >= 0; i--) {
        if (boardXO[y][x].toLowerCase() == 'x') {
            countX++;
        }
        if (boardXO[y][x].toLowerCase() == 'o') {
            countO++;
        }
        y--;
        x++;
    }
    if (countX == boardSize) {
        return true;
    }
    if (countO == boardSize) {
        return true;
    }
    return false;
}
function draw(boardXO, boardSize) {
    for (y = 0; y < boardSize; y++) {
        for (x = 0; x < boardSize; x++) {
            if (!['X', 'O'].includes(boardXO[y][x])) {
                return false;
            }
        }
    }
    console.log("its a draw");
    return true;
}
function validateNumberInput(input) {
    if (isNaN(input)) {
        return false;
    }
    return true;
}
function validateNewGameInput(input) {
    if (input.toLowerCase() != 'y' && input.toLowerCase() != 'n') {
        return false;
    }
    return true;
}
function printBoard(boardXO, boardSize) {
    for (i = 0; i < boardSize; i++) {
        console.log(boardXO[i]);
    }
}

console.log('Welcome to my X/O game');
let nameX = prompt("Please enter player X name ");
while (nameX == '') {
    nameX = prompt("Can not insert empty name. Please enter player X name ");
}
let nameO = prompt("Please enter player O name ");
while (nameO == '') {
    nameO = prompt("Can not insert empty name. Please enter player O name ");
}
let resultsArray = [0, 0, 0];
let playerXNumOfWins = 0;
let playerONumOfWins = 0;
let numDraws = 0;
let wantNewGame = 'Y';

while (wantNewGame == 'y' || wantNewGame == 'Y') {
    let board = [];
    let boardSizeInput = 0;
    boardSizeInput = +prompt('Please enter a board size');
    while (validateNumberInput(boardSizeInput) == false || boardSizeInput == '') {
        boardSizeInput = +prompt('Please enter a board size in numbers only!!!');
    }
    board = buildBoard(board, boardSizeInput);
    printBoard(board, boardSizeInput);
    console.log("Good luck!");
    while (true) {
        let placeXRow = +prompt(`${nameX} turn: please choose the row to put the X: `);
        let placeXColumn = +prompt(`${nameX} turn: please choose the column to put the X: `);
        while (placeXRow <= 0 || placeXColumn <= 0 || placeXRow > boardSizeInput || placeXColumn > boardSizeInput || isTaken(board, placeXRow, placeXColumn)) {
            console.log(board);
            console.log("This place is taken  or out of range please chose another");
            placeXRow = +prompt(`${nameX} turn: please choose the row to put the X: `);
            placeXColumn = +prompt(`${nameX} turn: please choose the column to put the X: `);
        }
        push(board, placeXRow, placeXColumn, 'X');
        printBoard(board, boardSizeInput);
        console.log("Nice move!");
        if (winByRow(board, boardSizeInput) == true || winByCol(board, boardSizeInput) == true || winDiagonal(board, boardSizeInput) == true) {
            resultsArray[0]++;
            console.log(`${nameX} has won!!!`);
            break;
        }
        else if (draw(board, boardSizeInput)) {
            resultsArray[2]++;
            break;
        }
        let placeORow = +prompt(`${nameO} turn: please choose the row to put the O: `);
        let placeOColumn = +prompt(`${nameO} turn: please choose the column to put the O: `);
        while (placeORow <= 0 || placeOColumn <= 0 || placeORow > boardSizeInput || placeOColumn > boardSizeInput || isTaken(board, placeORow, placeOColumn)) {
            console.log("This place is taken  or out of range please chose another");
            placeORow = +prompt(`${nameO} turn: please choose the row to put the O: `);
            placeOColumn = +prompt(`${nameO} turn: please choose the column to put the O: `);
        }
        push(board, placeORow, placeOColumn, 'O');
        printBoard(board, boardSizeInput);
        console.log("Nice move!");
        if (winByRow(board, boardSizeInput) == true || winByCol(board, boardSizeInput) == true || winDiagonal(board, boardSizeInput) == true) {
            resultsArray[1]++;
            console.log(`${nameO} has won!!!`);
            break;
        }
        else if (draw(board, boardSizeInput)) {
            resultsArray[2]++;
            break;
        }
    }
    console.log(`${nameX} has won ${resultsArray[0]} times`);
    console.log(`${nameO} has won ${resultsArray[1]} times`);
    console.log(`you had draw ${resultsArray[2]} times`);
    wantNewGame = prompt('Do you want to play a new game? Y/N ');
    while (validateNewGameInput(wantNewGame) == false) {
        wantNewGame = prompt('Please insert only Y/N ! Do you want to play a new game? Y/N ');
    }
}




//   console.log(`${row1}\n${row2}\n${row3}`);
