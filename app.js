var gridContainers = document.querySelectorAll(".grid");  // putting all my grids(playing slots) into an array
console.log(gridContainers)

var player1 = "X"; // creating player 1 as X
var player2 = "O"; // creating player 2 as O
var player1Turn;    // declaring my variable for player 1's turn
var player2Turn;    // declaring my variable for player 2's turn


// creating a loop that goes through my array that listens for a click and performs a function 
gridContainers.forEach(grid => {
    grid.addEventListener('click', playerOption)
});

// creating the function that will be triggered any time you click a grid

var playerOption = () => {
    console.log('clicked');
}




