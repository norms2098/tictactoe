Hello! this is a simple tictactoe game I coded using HTML, CSS, and JS. It's fairly simple as I just wanted to exercise my knowledge on multidimension arrays. I kind of hard coded the conditionals for the validation for a winner as that is the only way i know how (as of the moment). 

What I did was I declared a 3x3 array which would update x or o depending on the round. X starts first so every mod%2==0 round, x fires. The indexes in the two dimensional array correspond with the positions of the buttons on the board as seen below:

----------------------------
| [0][0] | [0][1] | [0][2] |
----------------------------
| [1][0] | [1][1] | [1][2] |
----------------------------
| [2][0] | [2][1] | [2][2] |
----------------------------

With each button click, the code sets the value of the array element respective to the button position to either 'x' or 'o' depending on which is playing. Also, with each button press, the code checks if there are three consecutive x's or o's in a line. If in any round (before the round counter == 9) that condition is satisfied, the game will end and the winner will be determined. Once the game is over, all buttons are disabled.


This fun little exercise was fun for me since I did this on a whim. Coded this one before in school and it was fun reviewing arrays. This took me 6 hours to complete (with breaks obv.). 

For now, this will have to stay boring and unanimated, but once I learn advanced styling and animations, I'll visit this once again and apply what I've learned! 

Thanks,
N.