console.log($);

const possibleColorsArr = ["red", "green", "blue", "yellow"];
let gridArr = [];
const gridSize = 10;

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
            if (i === 0){
            }
            gridArr[i][j] = $("<div>").addClass("cell").css("background-color", color);
        }
    }
}

const renderGrid = (array) => {
    for (let i = 0; i < array[0].length; i++){
        let $row = $("<div>").addClass("row").appendTo($("#gridContainer"));
        for (let j = 0; j < array[0].length; j++){
            array[i][j].appendTo($($row));
        }
    }
}



$( () => {
    createGrid(gridSize);
    renderGrid(gridArr);  
});

