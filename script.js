const possibleColorsArr = ["red", "green", "blue", "yellow", "orange", "purple"];
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
    console.log(clickedColor);

    // Update the top-left cell
    gridArr[0][0].css("background-color", clickedColor);

}


$( () => {
    createGrid(gridSize);
    renderGrid(gridArr);
    $(".cell").on("click", cellClickHandler);
});

