var winTextDiv = document.getElementById("winText");
var lossTextDiv = document.querySelector("#lossText");
var guessTextDiv = document.querySelector("#guessText");
var remTextDiv = document.querySelector("#remText");
var winDiv = document.querySelector("#wins");
var lossDiv = document.querySelector("#losses");
var guessDiv = document.querySelector("#guesses");
var remDiv = document.querySelector("#remaining");
var wins = 0;
var losses = 0;
var remGuess = 10
var iThink = "";
var guesses = [];
var letters = "abcdefghijklmnopqrstuvwxyz".split("");

function init()
{
	winTextDiv.innerHTML = "Wins: ";
	lossTextDiv.innerHTML = "Losses: ";
	guessTextDiv.innerHTML = "Your Guesses: ";
	remTextDiv.innerHTML = "Remaining Guesses: ";
	winDiv.innerHTML = wins;
	lossDiv.innerHTML = losses;
	guessDiv.innerHTML = "None"
	remDiv.innerHTML = remGuess;
	iThink = letters[Math.floor(Math.random() * letters.length)]
}

function softReset()
{
	guesses = [];
	remGuess = 10;
	winDiv.innerHTML = wins;
	lossDiv.innerHTML = losses;
	guessDiv.innerHTML = "None"
	remDiv.innerHTML = remGuess;
	iThink = letters[Math.floor(Math.random() * letters.length)]
}

function hardReset()
{
	losses = 0;
	wins = 0;
	guesses = [];
	remGuess = 10;
	winDiv.innerHTML = wins;
	lossDiv.innerHTML = losses;
	guessDiv.innerHTML = "None"
	remDiv.innerHTML = remGuess;
	iThink = letters[Math.floor(Math.random() * letters.length)]
}

function play(pressedKey)
{
	if(letters.indexOf(pressedKey) !== -1)
	{
		report(pressedKey);
		if(pressedKey === iThink)
		{
			alert("You win!");
			wins++;
			softReset();
		}
		else
		{
			remGuess--;
			guesses.push(pressedKey);
			remDiv.innerHTML = remGuess;
			guessDiv.innerHTML = guesses.join(" ");

			if(remGuess === 0)
			{
				remDiv.innerHTML = remGuess;
				losses++;
				softReset();
				alert("You lose :(");
			}
		}
	}

}

init();

document.onkeyup = function(event)
{
	var userKey = event.key.toLowerCase();
	play(userKey);
}