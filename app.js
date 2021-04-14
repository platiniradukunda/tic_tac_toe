var gridContainers = document.querySelectorAll(".grid");  // putting all my grids(playing slots) into an array
console.log(gridContainers);

const player1 = "X"; // creating player 1 as X
const player2 = "O"; // creating player 2 as O
var turn = true;    // declaring a turn variable so that players can take turns

// creating the function that will be triggered any time you click a grid
var playerOption = (grid) => {
    // target the grid that triggered the function(The one that was clicked). That grid is now called box
    var box = grid.target;
    // fill grid with X or O
    if(turn == true){
        box.innerText = player1;  // modifying box accordingly
    } else{
        box.innerText = player2;
    }
    // Taking turns between player 1 and player 2. Starts off as player 1(x)
    turn = !turn;
    // determine a winner
    
}

// creating a loop that goes through my array that listens for a click and performs a function 
gridContainers.forEach(grid => {
    grid.addEventListener('click', playerOption, { once: true});
})















