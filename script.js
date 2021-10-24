const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let resetButton = document.getElementById("reset-button")


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover', 
      e => e.target.classList.add('color-class') )
      container.appendChild(cell).className = "grid-item";
    };
  };



function userPrompt(){
    let newGrid = prompt("Enter number of squares per side for new grid:", 16);
    if(newGrid >= 5 && newGrid<=64){
       
       makeRows(newGrid,newGrid);
    }
    else{
        do{
            newGrid = prompt("Invalid size! Enter a value between 5 and 64!");            
        }
        while(newGrid < 5 || newGrid > 64);
       
        makeRows(newGrid,newGrid)
    }
   
}

resetButton.addEventListener('click', function(){
    window.location.reload();
});

userPrompt();



