// computer returns rock paper or scissors based on a random number
function computerPlay() {
	num = Math.floor(Math.random() * 3);
	// expected output: 0, 1 or 2
	switch (num) {
		case 0:
			return "ROCK";
		case 1:
			return "PAPER";
		case 2:
			return "SCISSORS";
	}
}
// game logic for a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	if ((playerSelection === "ROCK") && (computerSelection === "ROCK")) {
		message.textContent = "Tie! Rock vs Rock.";
	}
	else if ((playerSelection === "ROCK") && (computerSelection === "PAPER")) {
		computerScore += 1;
		message.textContent = "You Lose! Paper beats Rock.";
	}
	else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
		playerScore += 1;
		message.textContent = "You Win! Rock beats Scissors.";
	}
	else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {
		playerScore += 1;
		message.textContent = "You Win! Paper beats Rock.";
	}
	else if ((playerSelection === "PAPER") && (computerSelection === "PAPER")) {
		message.textContent = "Tie! Paper vs Paper.";
	}
	else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {
		computerScore += 1;
		message.textContent = "You Lose! Scissors beat Paper.";
	}
	else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {
		computerScore += 1;
		message.textContent = "You Lose! Rock beats Scissors.";
	}
	else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
		playerScore += 1;
		message.textContent = "You Win! Scissors beat Paper.";
	}
	else if ((playerSelection === "SCISSORS") && (computerSelection === "SCISSORS")) {
		message.textContent = "Tie! Scissors vs Scissors.";
	}
}

let computerScore = 0;
let playerScore = 0;
let reset = 0;
let div_playerScore = document.querySelector(".player-score");
let div_computerScore = document.querySelector(".computer-score");
let message = document.querySelector(".message");
const imageButtons = Array.from(document.querySelectorAll(".player-button"));

// main game loop with event listeners
imageButtons.forEach((button) => {
	button.addEventListener('mouseenter', () => {
		button.classList.add('animation');
	});
	button.addEventListener('mouseleave', () => {
		button.classList.remove('animation');
	});
	button.addEventListener('click', () => {	
		if (reset === 1) {
			playerScore = 0;
			computerScore = 0;
			reset = 0;
		}
		playRound(button.dataset.image, computerPlay());
		div_playerScore.textContent = playerScore.toString();
		div_computerScore.textContent = computerScore.toString();
		if (playerScore === 5) {
			message.textContent = "Player wins! Congratulations! Next game?";
			reset = 1;
		}
		if (computerScore === 5) {
			message.textContent = "Computer Wins! Try again?";
			reset = 1;
		}
	});
});