Bowling-Score
=============

Programming challenge for counting the score in a bowling game

Origin from: hackerrank.com/

<h3>Task</h3>

Your task is to score a game of bowling for an individual. Given the number of pins knocked down with each roll, you will compute the total score this person has achieved.

<h3>Scoring</h3>

One game of bowling consists of 10 frames.<br>
Each frame consists of 2 chances to knock down 10 pins.
Knocking down all 10 pins on the first roll of the frame is called a strike. If you get a strike, the frame is finished, and you are awarded 10 points (for the number of pins you knocked down) plus a point for each pin you knock down with your two next rolls.<br>
A spare happens when you knock down all 10 pins, but it takes you both tries. In this case, your score for the frame is 10 plus the number of pins you knock down with your one next roll.<br>
In all other cases, your score for the frame is the number of pins you knock down.

<h3>Extra rolls</h3>

If you bowl a strike in the last frame, you're awarded two extra rolls.<br>
Bowling a spare in the last frame (first two rolls add up to 10) gets you one extra roll.<br>
In both of these cases, your net score for the last frame is the total number of pins you knocked down.

<h3>Come again?</h3>

If the rules above didn't make sense, feel free to check out the following explanations and their examples:<br>
http://bowling.about.com/od/rulesofthegame/a/bowlingscoring.htm<br>
https://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring

<h3>Input</h3>

Your input will consist of a text file defining a (valid) game of bowling.<br>
The first line will be the total number of balls bowled in the game.<br>
Each subsequent line will represent the number of pins knocked down by the next roll.

<h3>Output</h3>

Your output should be the total score for the game.