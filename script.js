const possibleColorsArr = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,120,0)", "rgb(255,0,255)"];
let gridArr = [];
const gridSize = 20;
let clickedColor = "";
let topLeftColor = "";

const getRandomColor = (colorArr) => {
    let index = Math.floor(Math.random() * colorArr.length)
    let color = colorArr[index];
    return color;
}



const createGrid = (size) => {
    // create empty array of the correct size
    gridArr = new Array(size);
    for (let i = 0; i < size; i++) {
        gridArr[i] = new Array(size);
    }

    // Populate array with random-colored divs
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let color = getRandomColor(possibleColorsArr);
            gridArr[i][j] = $("<div>").addClass("cell").css("background-color", color);
        }
    }

    // Get the top left color
    topLeftColor = gridArr[0][0].css("background-color");
    clickedColor = topLeftColor;
    console.log("The top left colour is " + topLeftColor);

    // Make the top left square "fillable"
    // topLeftColor = gridArr[0][0].addClass("fillable");

    // Update which cells are fillable
    updateFillable(0, 0);

    // Reset blockMoreFillables flag
    $(".blockMoreFillables").removeClass("blockMoreFillables");
}

const renderGrid = (array) => {
    for (let i = 0; i < array[0].length; i++) {
        let $row = $("<div>").addClass("row").appendTo($("#gridContainer"));
        for (let j = 0; j < array[0].length; j++) {
            array[i][j].appendTo($($row));
        }
    }
}


updateFillable = (row, column) => {
    // blockMoreFillables flag tells us whether we've already dealth with this cell this round (i.e. click), so that we don't go back and forth forever!

    // Look at self
    if (gridArr[row][column].css("background-color") === clickedColor && !gridArr[row][column].hasClass("blockMoreFillables")) {
        gridArr[row][column].addClass("fillable blockMoreFillables");
        console.log(`At row:${row} column:${column} SELF has been updated to fillable`);
    }

    // Look right
    if (column < (gridSize - 1)) {
        if (gridArr[row][column + 1].css("background-color") === clickedColor && !gridArr[row][column + 1].hasClass("blockMoreFillables")) {
            updateFillable(row, (column + 1));
            console.log(`At row:${row} column:${column} TO MY RIGHT has called updateFillable()`);
        }
    }

    // Look down
    if (row < (gridSize - 1)) {
        if (gridArr[row + 1][column].css("background-color") === clickedColor && !gridArr[row + 1][column].hasClass("blockMoreFillables")) {
            updateFillable((row + 1), column);
            console.log(`At row:${row} column:${column} BELOW has called updateFillable()`);
        }
    }

    // Look left
    if (column > 0) {
        if (gridArr[row][column - 1].css("background-color") === clickedColor && !gridArr[row][column - 1].hasClass("blockMoreFillables")) {
            updateFillable(row, (column - 1));
            console.log(`At row:${row} column:${column} TO MY LEFT has called updateFillable()`);
        }
    }

    // Look up
    if (row > 0) {
        if (gridArr[row - 1][column].css("background-color") === clickedColor && !gridArr[row - 1][column].hasClass("blockMoreFillables")) {
            updateFillable((row - 1), column);
            console.log(`At row:${row} column:${column} ABOVE has called updateFillable()`);
        }
    }

}



const cellClickHandler = (event) => {
    // Get the color of the cell the user just clicked
    clickedColor = event.target.style.backgroundColor;
    console.log("clicked color:", clickedColor);

    // Update the color of fillable cells
    $(".fillable").css("background-color", clickedColor);

    // Update which cells are fillable
    updateFillable(0, 0);

    // Reset blockMoreFillables flag
    $(".blockMoreFillables").removeClass("blockMoreFillables");
}


$(() => {
    createGrid(gridSize);
    renderGrid(gridArr);
    $(".cell").on("click", cellClickHandler);
});