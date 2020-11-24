// const updateFillable = () => {
//     // Make neighbouring same-colored cells "fillable"
//     let x = 0;
//     let y = 0;

//     while (gridArr[x][y].css("background-color") === clickedColor) {
//         // loop it in to the fillable cells...
//         gridArr[x][y].addClass("fillable");

//         // look to the right
//         if(gridArr[x][y+1].css("background-color") === clickedColor){
//             gridArr[x][y+1].addClass("fillable");

//         }

//         if (y < (gridSize - 1)) {
//             y++;
//             console.log("y just incremented, y is " + y);
//         }
//         else {
//             break;
//         }
//     }
// }

// Make the top left square "fillable"
    // topLeftColor = gridArr[0][0].addClass("fillable");



// Populate array with random-colored divs
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let newCellObject = new Cell (i, j, color, false); // do I even need to store these in an arrayyyy????????? This for loop in this block is still needed to get the coordinates, but maybe the previous array complexity isn't needed...........
        // Or maybe I store the new objects in a 2D array and not bother with storing the coordinates in the object.
        // depends on how I use it. The recursive function I already have assumes a 2D array structure, so maybe best to stick with that.
        // I'm thinking keeping the 2D array will make debugging a tad easier.
        // But do I need coordinates in the object to assign to an ID for some reason?