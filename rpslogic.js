let playerScore = 0;
let computerScore = 0;

// randomly selects the computers move
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];
    let index = [Math.floor(Math.random() * 3)];

    return computerMove = choices[index];
}

// plays one winner of the game
function playRound(playerSelection, computerSelection) {

    computerSelection = computerMove;
    playerSelection = playerMove;

    if (playerSelection == "scissors" && computerSelection == "paper" || playerSelection
        .toLowerCase() ==
        "paper" && computerSelection == "rock" || playerSelection == "rock" &&
        computerSelection == "scissors" || computerSelection !== playerSelection) {

        playerScore++;

        if (playerScore > computerScore && playerScore == 5) {

            winner = `YOU WON THE MATCH, HOW IS THIS POSSIBLE!?!?!`;

        } else {

            winner = `You WIN this round, [${playerSelection}] beats [${computerSelection}]`;

        }

    } else if (computerSelection == "scissors" && playerSelection == "paper" || computerSelection ==
        "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection ==
        "scissors" || computerSelection !== playerSelection) {

        computerScore++;

        if (computerScore > playerScore && computerScore == 5) {

            winner = `YOU LOSE! BETTER LUCK NEXT TIME!!!!!`;

        } else {

            winner = `I WON that round, [${computerSelection}] beats [${playerSelection}]!`;

        }
    } else if (computerSelection == playerSelection) {

        computerScore++;
        playerScore++;

        if (playerScore > computerScore && playerScore == 5) {

            winner = `YOU WON THE MATCH, HOW IS THIS POSSIBLE!?!?!`

        } else {

            winner = `It's a DRAW, we both drew [${computerSelection}]!`;

        }
    } else {

        if (computerScore > playerScore && computerScore == 5) {

            winner = `YOU LOSE! BETTER LUCK NEXT TIME!!!!!`;

        } else {

            winner = `PLAY AGAIN, ${playerSelection} isn't a move!`;

        }
    }
    return winner;
}

const buttons = document.querySelectorAll('button'); // buttons is node list(array like)

buttons.forEach((button) => { // iterate through each button

    button.addEventListener('click', () => { // for each button adds a click listener

        if (button.id == "btn1") {

            playerMove = "rock";

        } else if (button.id == "btn2") {

            playerMove = "paper";

        } else {

            playerMove = "scissors";

        }

        computerMove = computerPlay();
        playRound();
        const result = document.querySelector('#result');
        result.classList.add('result');
        result.textContent = winner;

        const playScore = document.querySelector('#playScore');
        playScore.classList.add('playScore');
        playScore.textContent = playerScore;

        const compScore = document.querySelector('#compScore');
        compScore.classList.add('compScore');
        compScore.textContent = computerScore;
    });
});