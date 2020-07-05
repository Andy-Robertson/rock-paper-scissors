let playerScore = 0;
let computerScore = 0;

// randomly selects the computers move
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];
    let index = [Math.floor(Math.random() * 3)];

    return computerMove = choices[index];
}

//resets game
function reset() {

    playerScore = 0;
    computerScore = 0;
    playerMove = "-";
    computerMove = "-";
    winner = "SELECT A MOVE TO START";
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

            winner = `YOU WIN THE MATCH!`;

        } else {

            winner = `You WIN this round, ${playerSelection} beats ${computerSelection}!`;

        }

    } else if (computerSelection == "scissors" && playerSelection == "paper" || computerSelection ==
        "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection ==
        "scissors" || computerSelection !== playerSelection) {

        computerScore++;

        if (computerScore > playerScore && computerScore == 5) {

            winner = `YOU LOSE THE MATCH! GAME OVER!`;

        } else {

            winner = `I WON that round, ${computerSelection} beats ${playerSelection}!`;

        }
    } else if (computerSelection == playerSelection) {

        computerScore++;
        playerScore++;

        if (playerScore > computerScore && playerScore == 5) {

            winner = `YOU WIN THE MATCH!`

        } else {

            winner = `It's a DRAW, we both drew ${computerSelection}!`;

        }
    } else {

        if (computerScore > playerScore && computerScore == 5) {

            winner = `YOU LOSE THE MATCH! GAME OVER`;

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
            computerMove = computerPlay();
            playRound();

        } else if (button.id == "btn2") {

            playerMove = "paper";
            computerMove = computerPlay();
            playRound();

        } else if (button.id == "btn3") {

            playerMove = "scissors";
            computerMove = computerPlay();
            playRound();

        } else {

            reset();

        }



        const result = document.querySelector('#result');
        result.classList.add('result');
        result.textContent = winner;

        const playScore = document.querySelector('#playScore');
        playScore.classList.add('playScore');
        playScore.textContent = playerScore;

        const compScore = document.querySelector('#compScore');
        compScore.classList.add('compScore');
        compScore.textContent = computerScore;

        const compMove = document.querySelector('#compMove');
        compMove.classList.add('compMove');
        compMove.textContent = computerMove;

        const playMove = document.querySelector('#playMove');
        playMove.classList.add('playMove');
        playMove.textContent = playerMove;



    });

});