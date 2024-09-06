// /*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");

// /*---------------------------- Variables (state) ----------------------------*/
let board = ['1', '2', 'X', '4', '5', '6', '7', '8', '9'];
let turn = "X";
let tie = false;
let winner = false; 
// /*------------------------ Cached Element References ------------------------*/

// /*-------------------------------- Functions --------------------------------*/
const init = () => {
    render()
};

// const squareElPres = squareEls('click', () => {
//     console.log('you clikt me')
// })

// const handleClick = (event) => {
//     console.log("Clicked BBV")}
const updateBoard = () => {
    for(let idx = 0; idx < board.length; idx++) {
        squareEls[idx].textContent = board[idx];
        (squareEls[idx].textContent);
    }
} 

// console.log(updateBoard(""))


const updateMessage = () => {
    if (tie === false && winner === false) {
        messageEl = "Next Player"
    } else if (tie === true && winner === false) {
        messageEl = "Tie Game"
    } else {
        messageEl = "You Won"
    }
    console.log(messageEl)
}

// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5], 
//     [6, 7, 8],
//     [0, 3, 6], 
//     [1, 4, 7],
//     [2, 5, 8], 
//     [0, 4, 7],
//     [2, 4, 6],
// ]

const render = () => {
    updateBoard()
    updateMessage()
}

console.log(updateBoard)
// /*----------------------------- Event Listeners -----------------------------*/