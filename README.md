# GA_Project1_Game

## Project Title (temporary): Flood-It
Based on this game: https://unixpapa.com/floodit/?sz=14&nc=6

### Project concept
- The game starts as a 14x14 grid, each cell is randomly coloured one of 6 colours.
- The user clicks on any cell in the grid. The colour of the cell is applied to the cell at the top-left and any other cells adjacent to it that are the same colour. 
- Any cells that are adjacent to those recently-coloured cells that are the same colour as the new colour, now are part of the group of cells that will be coloured next time (think of it like the flood paintbucket tool in MS paint).
- The goal is to flood the entire grid in the least number of moves as possible.
- This Google Play put it well!
"Its the MSPaint thing you'd do while bored in computer class where you spraycan a whole bunch of different colors on a page till its all full then use the fill bucket to slowly but surely fill the whole page with one color and they turned it into a game... and I love it!" 

Here is a screenshot from the existing Unixpapa game I linked to above:  
>![image](https://git.generalassemb.ly/cbeattie/GA_Project1_Game/blob/master/Documentation/Flood-It-Unixpapa-Screenshot.png)

### MVP
- Creating the grid (small, e.g. 3x3) and assigning random colours (or letters or numbers)
- Assigning the top left cells to be "fillable" and the rest to "unfillable"
- Clicking any "unfillable" cell in the grid turns the "fillable cells" that colour.

### Other features I plan to implement
- Supporting a larger grid
- Styling it possibly using images so that it looks a lot nicer than the original.
