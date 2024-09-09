// /*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetButtonEl = document.querySelector("#reset")
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
    updateMessage()
    updateBoard()
}
// ^^^^ function style #1 ^^^^ "function name () {}"
const updateBoard = function() {
   board.forEach((square, sqrIdx) => {
       squareEls[sqrIdx].textContent = square;
   });
}

const updateMessage = () => {
    if (winner === false && tie === false) {
     messageEl.innerText = turn;
    } else if (!winner && tie) {
     messageEl.textContent = "Tie game"
    } else {
     messageEl.textContent = `${turn} is the Winner!`
    }
 }
// const updateMessage = function() {
// ^^^^ function style #2 ^^^^  const/let name = function() {}


const placePiece = (index) => {
   board[index] = turn
}


const checkForWinner = () => {
   for (let i = 0; i < winningCombos.length; i++) {
   //   for(let j = 0; j < winningCombos[i].length; j++) {
       let currentCombo = winningCombos[i];
       // ^^^ Created a variable for ease of visibility
       if (board[currentCombo[0]].length > 0) {
           if (board[currentCombo[0]] === board[currentCombo[1]]) {
               if (board[currentCombo[0]] === board[currentCombo[2]]) {
                   winner = true; 
                   console.log(winner)
               }
           }
       }
   }
}


const checkForTie = () => {
   if (winner) {
       return
   }
   if (!board.includes('')) {
       tie = true;
   }
   // Checks for an empty String. If there are empty Strings(which is a spot on the board)
   // the game continues.
}


const switchPlayerTurn = () => {
   if (winner) return
   if (turn === 'X') {
       turn = 'O'
   } else {
       turn = "X"
   }
}


const handleClick = (evt) => {
   if (winner === true) {
       return
   }
   if (evt.target.classList.contains("sqr")) {
      const squareIndx = evt.target.id
      if (board[squareIndx] === "X" || board[squareIndx] === "O" ) {
       return
      }
      placePiece(squareIndx)
   }
   checkForWinner()
   checkForTie()
   switchPlayerTurn()
   render()
   return
}


// 1. Order Matters - You do if Winner first, becasue if there is a winner, game is over.
// 2. Why does "return" have no value? It's because we want to just EXIT the function.
//          "Return", stops the computer from reading the rest of that code and moves on.
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// squareEls.forEach((boxes) => {
//     boxes.addEventListener('click', handleClick)
// })
// // ^^^ You do "boxes.addEventListener" because it target's the squareEls which is the .sqr in HTML.
// This is declared in const above.


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
document.querySelector('.board').addEventListener('click', handleClick)
// ---------------------------------------------
// This is the same as the squareEls.forEach but it uses the bubbling method.
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



const init = () => {
   board = ['', '', '', '', '', '','', '', '']
   turn = "X"
   winner = false
   tie = false
   render()
};
// ^^^^ function style #3 ^^^^ const/let name = () => {}
// calling outside of function vvvvvv


resetButtonEl.addEventListener('click', init)


init()


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// window.onload = () => {
//     init()
// }
// -------------------------------------------------------
// This is the more appopriate way to do it. "Professional"
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




// -----------------------------------------------------------------------------
// console.log(winningCombos[7])
// /*----------------------------- Event Listeners -----------------------------*/

