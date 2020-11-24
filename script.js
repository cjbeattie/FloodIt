const possibleColorsArr = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,120,0)", "rgb(255,0,255)"];
let gridArr = [];
const gridSize = 10;
let activeColor = "";
let debugEnabled = true;

class Cell {
    constructor(color, isFillable) {
        this.color = color;
        this.isFillable = isFillable;
        this.isChecked = false;
    }
}

const getRandomColor = () => {
    let index = Math.floor(Math.random() * possibleColorsArr.length)
    let color = possibleColorsArr[index];
    return color;
}

const createGrid = () => {
    // create empty array of the correct size
    gridArr = new Array(gridSize);
    for (let i = 0; i < gridSize; i++) {
        gridArr[i] = new Array(gridSize);
    }

    // Populate array with cell objects of random color
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let color = getRandomColor();
            let newCellObject = new Cell(color, false);
            gridArr[i][j] = newCellObject;
            //console.log(newCellObject);
            // NEED TO ADD THIS BACK IN SOMEWHERE LATER
            // gridArr[i][j] = $("<div>").addClass("cell").css("background-color", color).on("click", cellClickHandler);
        }
    }

    // Make the top-left color the activeColor
    activeColor = gridArr[0][0].color;
    console.log("The active color is", activeColor);
}

const renderGrid = () => {
    // Remove existing grid
    $("#gridContainer").empty();

    // Render gridArray with divs on screen
    for (let i = 0; i < gridSize; i++) {
        let $row = $("<div>").addClass("row").appendTo($("#gridContainer"));
        for (let j = 0; j < gridSize; j++) {
            let color = gridArr[i][j].color;
            if (gridArr[i][j].isFillable){
                $("<div>").addClass("cell").css("background-color", color).addClass("fillable").on("click", cellClickHandler).appendTo($($row));
            } else {
                $("<div>").addClass("cell").css("background-color", color).on("click", cellClickHandler).appendTo($($row));
            }       
        }
    }
    console.log("render grid done");  
}

const updateIsFillable = (row, column) => {
    // isChecked flag tells us whether we've already dealth with this cell this round (i.e. per click), so that we don't go back and forth forever!

    // Look at self
    if (gridArr[row][column].color === activeColor && !gridArr[row][column].isChecked) {
        gridArr[row][column].isFillable = true;
        gridArr[row][column].isChecked = true;
        // console.log(`gridArr[${row}][${column}].isChecked is ${gridArr[row][column].isChecked}`, gridArr);
        console.log(`At row:${row} column:${column} SELF has been updated to fillable`);
    }

    // Look right
    if (column < (gridSize - 1)) {
        if (gridArr[row][column + 1].color === activeColor && !gridArr[row][column + 1].isChecked) {
            updateIsFillable(row, (column + 1));
            console.log(`At row:${row} column:${column} TO MY RIGHT has called updateFillable. Here is the active color, that one's color and isChecked status:`, activeColor, gridArr[row][column + 1].color, gridArr[row][column + 1].isChecked);
        } else {
            console.log(`At row:${row} column:${column} TO MY RIGHT has called updateFillable but didn't proceed. Here is the active color, that one's color and isChecked status:`, activeColor, gridArr[row][column + 1].color, gridArr[row][column + 1].isChecked)
        }
    }

    // Look down
    if (row < (gridSize - 1)) {
        if (gridArr[row + 1][column].color === activeColor && !gridArr[row + 1][column].isChecked) {
            updateIsFillable((row + 1), column);
            console.log(`At row:${row} column:${column} BELOW has called updateFillable()`);
        }
    }

    // Look left
    if (column > 0) {
        if (gridArr[row][column - 1].color === activeColor && !gridArr[row][column - 1].isChecked) {
            updateIsFillable(row, (column - 1));
            console.log(`At row:${row} column:${column} TO MY LEFT has called updateFillable()`);
        }
    }

    // Look up
    if (row > 0) {
        if (gridArr[row - 1][column].color === activeColor && !gridArr[row - 1][column].isChecked) {
            updateIsFillable((row - 1), column);
            console.log(`At row:${row} column:${column} ABOVE has called updateFillable()`);
        }
    }
}

const resetIsChecked = () => {    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            gridArr[i][j].isChecked = false;
        }
    }
}

const checkWin = () => {
    let hasWon = true;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (gridArr[i][j].isFillable === false) {
                hasWon = false;
            }
        }
    }

    if (hasWon) {
        console.log("You win!");
        $("#result").text("You Win!");
    }
}

const debugView = () => {
    if (debugEnabled){
        $(".debug").show();
    } else {
        $(".debug").hide();
    }
}

const cellClickHandler = (event) => {
    // Update debug view if enabled
    if (debugView){
        $("#gridContainerPrevious").empty();
        $("#gridContainer").clone().appendTo($("#gridContainerPrevious"));
    }

    // Get the color of the cell the user just clicked, remove the spaces in the result to prevent issues with rgb(0, 0, 0) vs rgb(0,0,0)
    activeColor = event.target.style.backgroundColor.split(" ").join("");
    console.log("clicked color:", activeColor);

    // Update the color property of fillable cells in object
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (gridArr[i][j].isFillable === true) {
                gridArr[i][j].color = activeColor;
            }
        }
    }
    updateIsFillable(0, 0);
    renderGrid();
    resetIsChecked();
    checkWin();
}

$(() => {
    createGrid();
    updateIsFillable(0, 0);
    renderGrid();
    resetIsChecked();
    debugView();
});