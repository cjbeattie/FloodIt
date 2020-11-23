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
