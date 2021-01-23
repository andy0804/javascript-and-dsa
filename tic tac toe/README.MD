Event Listners

1. Winning Message
   Winning Message Event Listner that would Listen when you want to restart the game.
   Would also invoke the start game function that would initialize the values again so that the game is restarted

2. Cell Listners
   A for loop to attach event listener for each cell . Now we want to ensure that
   whatever logic we are doing to set the cell as x or o happens once so we remove any listners and then reattach a new listners
   when this loads with value once : true,

Constants :

We want to have a look up table that would help us in identifying all possible winning combinations

XOLookup = {
"012": "",

    "048": "",

    "036": "",

    147: "",

    258: "",

    345: "",

    678: "",

    246: "",

};

012 in the cell for e.g stands for cells 0 1 2 . If this key has value XXX or OOO then we have a winnning combination

We also want to identify when the game is over after 9 turns in all the
So we will maintain a visited array to check if all 9 cells are visited

We will also have a variable that determines who's turn it is in

Functions

1. startGame

Will be called on load and when game restarts 2. handleBoxClick

Event for handling box click 3. setValue

Event for handling whether to place x or o 4. checkGameStatus

Event to check if the game is over or not 5. handleWhenUserWins

Event to decide what to do when user wins 6. handleWhenUserDraws
Event to decide what to do when user draws 7. switchPlay
Event to decide what to do when the play is switched 8. updateLookup
Update the look up table when a cell is clicked 9. getPosition
Get the position of the cell just clicked

Core Logic :
Whenever a cell is clicked we update the lookup table based on the cell clicked

Since we already know the winning combinations , lets say cell 0 is clicked
and its X playing , then

012, 048, 036 are marked with X as these are now possible winning combinations

If cell 1 clicked by X

012,147 is updated 012 is updated XX and 147 is now XX

And now if cell 2 is clicked

012 is updated to XXX

and cells 258,246 are updated to

Since 012 is now having 2 X's we have a winner
