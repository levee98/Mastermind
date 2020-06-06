# Mastermind
My first project

The game is played using:

- a decoding board with eleven additional rows containing four large holes next to a set of four small holes;
- code pegs of six different colors (or more; see Variations below), which will be placed in the large holes on the left on the board; and
- key pegs, some colored black, some white; they will be placed in the rightsided holes on the board.

The game will played with the computer. The computer is the codemaker, the player is the codebreaker. The codemaker chooses a pattern of four code pegs. Duplicates and blanks are not allowed depending on player choice, so the player couldn't choose two pegs of the same color or any blanks. In the instance that blanks are not elected to be a part of the game, the codebreaker may not use blanks in order to establish the final code. The chosen pattern is placed in the computer memory.

The codebreaker tries to guess the pattern, in both order and color, within eleven turns. Each guess is made by placing a row of code pegs on the decoding board. Once placed, the codemaker provides feedback by placing from zero to four key pegs in the small holes of the row with the guess. A black key peg is placed for each code peg from the guess which is correct in both color and position. A white key peg indicates the existence of a correct color code peg placed in the wrong position.

Once feedback is provided, another guess is made; guesses and feedback continue to alternate until either the codebreaker guesses correctly, or eleven incorrect guesses are made.

Other rules may be specified.
