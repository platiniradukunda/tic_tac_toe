var gridContainers = document.querySelectorAll(".grid");  // putting all my grids(playing slots) into an array

const player1 = "X"; // creating player 1 as X

const player2 = "O"; // creating player 2 as O

var turn = true;    // declaring a turn variable so that players can take turns

// declaring a variable for my message div. I will write the winning message here
var winningMessage = document.querySelector(".message");

// declaring a variable for the winner div so that I can show the winner message when someone wins
var displayingTheMessage = document.getElementById("display"); 

// declaring a counter that keeps track of the number of turns
var counter = 0;

// score counter to display on scoreboard
var playerXwin = 0;
var playerXWinCounter = document.querySelector(".playerXWinCounter")
var playerOwin = 0;
var playerOWinCounter = document.querySelector(".playerOWinCounter")

// turn display on webpage. Will tell user whether it is X's turn or O's turn
var turnDisplay = document.querySelector(".turndisplay");
if(turn == true){
    turnDisplay.innerText = player1 +  "'s turn"
} else {
    turnDisplay.innerText = player2 +  "'s turn"
}

// creating the function that will be triggered any time you click a grid/play the game
var playerOption = (grid) => {
    // target the grid that triggered the function(The one that was clicked). That grid is now called box
    var box = grid.target;
    // fill grid with X or O
    if(turn == true){           // specifying true as player 1
        box.innerText = player1;  // modifying box accordingly, typing x for player 1
        turnDisplay.innerText = player2 +  "'s turn"
    } else{
        box.innerText = player2;   // typing O for player 2
        turnDisplay.innerText = player1 +  "'s turn"
    }

    // Taking turns between player 1 and player 2. Starts off as player 1(x). Makes turn now equal to false or true if it was false. this will happen after each player plays and will give the other player an opportunity to play on the next click
    turn = !turn;
    // everytime turns are exchanged, the counter is incremented by one
    counter ++;
    // determine a winner
    // if the text in a particular grid is equal to player1 and it occurs in one of the defined combinations then X wins regardless of how many moves are left. Possible combinations
    if (gridContainers[0].textContent == player1 && gridContainers[1].textContent == player1 && gridContainers[2].textContent == player1){
        // this will increment the win count by 1 and also print them in the scoreboard
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        // Typing the winner in the text field if this combination is achieved
        winningMessage.innerText = player1 + " wins!";
        // this is so that a class called display can be added to the winner div then the display will be flex in css and it will appear on the screen 
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[3].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[5].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[6].textContent == player1 && gridContainers[7].textContent == player1 && gridContainers[8].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    } else if (gridContainers[0].textContent == player1 && gridContainers[3].textContent == player1 && gridContainers[6].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[1].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[7].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[2].textContent == player1 && gridContainers[5].textContent == player1 && gridContainers[8].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[0].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[8].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[2].textContent == player1 && gridContainers[4].textContent == player1 && gridContainers[6].textContent == player1){
        playerXwin++;
        playerXWinCounter.innerText = playerXwin
        winningMessage.innerText = player1 + " wins!";
        displayingTheMessage.classList.add("display");
    }else 

    // if the text in a particular grid is equal to player2 and it occurs in one of the defined combinations then O  wins! regardless of how many moves are left
    if (gridContainers[0].textContent == player2 && gridContainers[1].textContent == player2 && gridContainers[2].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[3].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[5].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[6].textContent == player2 && gridContainers[7].textContent == player2 && gridContainers[8].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[0].textContent == player2 && gridContainers[3].textContent == player2 && gridContainers[6].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[1].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[7].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[2].textContent == player2 && gridContainers[5].textContent == player2 && gridContainers[8].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[0].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[8].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!";
        displayingTheMessage.classList.add("display");
    }else if (gridContainers[2].textContent == player2 && gridContainers[4].textContent == player2 && gridContainers[6].textContent == player2){
        playerOwin++
        playerOWinCounter.innerText = playerOwin
        winningMessage.innerText = player2 + " wins!" ;
        displayingTheMessage.classList.add("display");
    }
    // if it doesn't happen and there are no more grids to click then it is a draw. Turns have been changed 9 times which means that the board is full therefore it is a draw
    else if(counter == 9){
        winningMessage.innerText ="Draw!" ;
        displayingTheMessage.classList.add("display");       
        }
}


// creating a loop that goes through my array that listens for a click and performs a function. This loop also ensures that the grids can only be clicked on once. It won't allow you to click on a grid more than once.
gridContainers.forEach(grid => {
    grid.addEventListener('click', playerOption, { once: true});
})

// , { once: true}

// function restartGame that clears the board. starts by clearing text from all the grids. Then removes the eventListener that it had heard when we user clicked on grid earlier. Fnally, remove the winner/draw message.
var restartGame = () => {
    gridContainers.forEach(grid => {
        grid.textContent = "";
        grid.removeEventListener('click', playerOption);
        grid.addEventListener('click', playerOption, { once: true});
    });
    counter = 0;
    displayingTheMessage.classList.remove("display");
}
// declaring play again button
var playAgainButton = document.querySelector(".restart");
playAgainButton.addEventListener('click', restartGame);


// clear board button. Restarts the game and keeps count of all the other variables
var clearBoardButton = document.querySelector(".clearboard");
clearBoardButton.addEventListener('click', restartGame);
