*A note on all projects: I merged a few Github old accounts into this new "clean" one since the GA course required an annoying mix of Github Enterprise and personal Github accounts. It was confusing and full of other in-class exercise mess. It's why you won't see commits from this account dating prior to February, but if you dig into the projects you can see the work I committed using my other GitHub accounts (cbeattie and cbeattie2).
All projects here were done in about 5 days so are very much MVPs at this stage, but I will continue to work on them when I get the time.*

# Flood-It

Play it here! https://cjbeattie.github.io/FloodItGame/

The goal was to make a prettier version of this game: https://unixpapa.com/floodit/?sz=14&nc=6

The code is my own - no reference was made to the original code, for better or for worse.

## Description
- The game starts as a 14x14 grid, each cell is randomly coloured one of 6 colours.
- The user clicks on any cell in the grid. The colour of the cell is applied to the cell at the top-left and any other cells adjacent to it that are the same colour. 
- Any cells that are adjacent to those recently-coloured cells that are the same colour as the new colour, now are part of the group of cells that will be coloured next time (think of it like the flood paintbucket tool in MS paint).
- The goal is to flood the entire grid in the least number of moves as possible.
- This Google Play review put it well!
"Its the MSPaint thing you'd do while bored in computer class where you spraycan a whole bunch of different colors on a page till its all full then use the fill bucket to slowly but surely fill the whole page with one color and they turned it into a game... and I love it!" 

Here is a screenshot from the existing Unixpapa game I linked to above:  
>![image](https://github.com/cjbeattie/FloodItGame/blob/develop/Documentation/Flood-It-Unixpapa-Screenshot.png)

## Technologies Used
No front-end framework is used in this project, it's just practice at vanilla:
- JavaScript
- jQuery
- HTML
- CSS
