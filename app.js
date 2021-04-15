var gridContainers = document.querySelectorAll(".grid");  // putting all my grids(playing slots) into an array


const player1 = "X"; // creating player 1 as X

const player2 = "O"; // creating player 2 as O

var turn = true;    // declaring a turn variable so that players can take turns

var winningMessage = document.getElementsByClassName("message");

// creating the function that will be triggered any time you click a grid
var playerOption = (grid) => {
    // target the grid that triggered the function(The one that was clicked). That grid is now called box
    var box = grid.target;
    // fill grid with X or O
    if(turn == true){
        box.innerText = player1;  // modifying box accordingly, typing x for player 1
    } else{
        box.innerText = player2;   // typing O for player 2
    }

    // Taking turns between player 1 and player 2. Starts off as player 1(x)
    turn = !turn;   // makes turn now equal to false or true if it was false

    // determine a winner
    // if the text in a particular grid is equal to player1 and it occurs in one of the defined patterns then X wins regardless of how many moves are left
    if (gridContainers[0].textContent == player1 && gridContainers[1].textContent == player1 && gridContainers[2].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[3].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[5].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[6].textContent == player1 && gridContainers[7].textContent == player1 && gridContainers[8].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[0].textContent == player1 && gridContainers[3].textContent == player1 && gridContainers[6].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[1].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[7].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[2].textContent == player1 && gridContainers[5].textContent == player1 && gridContainers[8].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[0].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[8].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    } else if (gridContainers[2].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[6].textContent == player1){
        winningMessage.innerText = player1 + "wins";
    }

    
    // if the text in a particular grid is equal to player1 and it occurs in one of the defined patterns then O wins regardless of how many moves are left
    if (gridContainers[0].textContent == player2 && gridContainers[1].textContent == player2 && gridContainers[2].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[3].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[5].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[6].textContent == player2 && gridContainers[7].textContent == player2 && gridContainers[8].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[0].textContent == player2 && gridContainers[3].textContent == player2 && gridContainers[6].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[1].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[7].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[2].textContent == player2 && gridContainers[5].textContent == player2 && gridContainers[8].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[0].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[8].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    } else if (gridContainers[2].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[6].textContent == player2){
        winningMessage.innerText = player2 + "wins";
    }
    // if it doesn't happen and there are no more grids to click then it is a draw
    else {
        winningMessage.innerText = "Draw";
    }

}

// creating a loop that goes through my array that listens for a click and performs a function 
gridContainers.forEach(grid => {
    grid.addEventListener('click', playerOption, { once: true});
})















