// /*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 7],
    [2, 4, 6],
]
// /*---------------------------- Variables (state) ----------------------------*/
let board = [];
let turn ;
let tie ;
let winner; 
// /*------------------------ Cached Element References ------------------------*/

// /*-------------------------------- Functions --------------------------------*/
function render() {
 // calling Function VVV
     updateBoard()
     updateMessage()
}
// ^^^^ function style #1 ^^^^ "function name () {}"

const updateBoard = function() {
    board.forEach((square, sqrIdx) => {
        squareEls[sqrIdx].textContent = square;
    });
}

const updateMessage = function() {
   if (winner === false && tie === false) {
    messageEl.innerText = turn
   } else if (!winner && tie){
    messageEl.textContent = "It's a tie"
   } else {
    messageEl.textContent = `${turn} is the Winner!!`
   }
}
// ^^^^ function style #2 ^^^^  const/let name = function() {}

const init = () => {
    board = ['', '', '', '', '', '','', '', '']
    turn = "X"
    winner = false
    tie = false
// Calling Function    
    render()
};
// ^^^^ function style #2 ^^^^ const/let name = () => {}
init()
// ----------------------
// window.onload = () => {
//     init()
// }
// ^^^ This is the more appopriate way to do it. "Professional" ^^^
// ----------------------


// ----------------------
// console.log(winningCombos[7])
// /*----------------------------- Event Listeners -----------------------------*/