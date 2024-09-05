/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];
let turn = "X";
let tie = false;
let winner = false; 
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
/*-------------------------------- Functions --------------------------------*/
const init = (event) => {
    render(event)
};

const updateBoard = () => {
    for(let idx = 0; idx < board.length; idx++) {
        squareEls[idx].textContent = board[idx];
        console.log(squareEls[idx]);
    }
} 
// console.log(updateBoard(board));

tie = true

const updateMessage = (messageEl) => {
    if (tie === false && winner === false) {
        messageEl = "Next Player"
    } else if (tie === true && winner === false) {
        messageEl = "Tie Game"
    } else {
        messageEl = "You Won"
    }
    console.log(messageEl)
}

const render = () => {
    updateBoard()
    updateMessage()
}
console.log(render())
/*----------------------------- Event Listeners -----------------------------*/




/*----------------------------- PsuedoCode -----------------------------------*/

/* 1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should 
  be called to render this game state.

4) The state of the game should be rendered to the user.

5) Define the required constants.

6) Handle a player clicking a square with a `handleClick` function.

7) Create Reset functionality */