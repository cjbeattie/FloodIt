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
    for (let i = 0; i < size; i++){
        gridArr[i] = new Array(size);
    }

    // Populate array with random-colored divs
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let color = getRandomColor(possibleColorsArr);
            gridArr[i][j] = $("<div>").addClass("cell").css("background-color", color);
        }
    }

    // Get the top left color
    topLeftColor = gridArr[0][0].css( "background-color" );
    console.log("The top left colour is " + topLeftColor);

    // Make the top left square "fillable"
    topLeftColor = gridArr[0][0].addClass("fillable");
}

const renderGrid = (array) => {
    for (let i = 0; i < array[0].length; i++){
        let $row = $("<div>").addClass("row").appendTo($("#gridContainer"));
        for (let j = 0; j < array[0].length; j++){
            array[i][j].appendTo($($row));
        }
    }
}

const cellClickHandler = (event) => {
    // Get the color of the cell the user just clicked
    clickedColor = event.target.style.backgroundColor;
    console.log("clicked color:", clickedColor);

    // Update the color of fillable cells
    $(".fillable").css("background-color", clickedColor);

    // Make neighbouring same-colored cells "fillable"
    let x = 0;
    let y = 0;
    console.log(gridArr[x][y].css("background-color"));
    console.log(clickedColor);

    while (gridArr[x][y].css("background-color") === clickedColor){
        // loop it in to the fillable cells...
        gridArr[x][y].addClass("fillable");
        y++;
        console.log("y just incremented");
    }

}


$( () => {
    createGrid(gridSize);
    renderGrid(gridArr);
    $(".cell").on("click", cellClickHandler);
});

