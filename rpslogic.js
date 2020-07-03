let playerScore = 0;
let computerScore = 0;
let playerMove;
let computerMove;
let round;
let won;

// randomly selects the computers move
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];
    let index = [Math.floor(Math.random() * 3)];

    return computerMove = choices[index];
}

// plays one round of the game
function playRound(playerSelection, computerSelection) {

    computerSelection = computerMove;
    playerSelection = playerMove;

    if (playerSelection == "scissors" && computerSelection == "paper" || playerSelection
        .toLowerCase() ==
        "paper" && computerSelection == "rock" || playerSelection == "rock" &&
        computerSelection == "scissors") {

        playerScore++;
        round = `You win this round! As ${playerSelection} beats ${computerSelection}, so you're on [${playerScore}] and I'm on [${computerScore}].`;


    } else if (computerSelection == "scissors" && playerSelection == "paper" ||
        computerSelection == "paper" && playerSelection == "rock" || computerSelection ==
        "rock" && playerSelection == "scissors") {

        computerScore++;
        round = `I won that round! As ${computerSelection} beats ${playerSelection}, so you're on [${playerScore}] and I'm on [${computerScore}].`;

    } else if (computerSelection == playerSelection) {

        round = `It's a draw! We both drew ${computerSelection} so the scores stay the same at [${playerScore}] and [${computerScore}].`;

    } else {

        round = `${playerSelection} isn't a move!.`;
    }
    return round;
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
        const roundResult = document.querySelector('#roundResult');
        roundResult.classList.add('roundResult');
        roundResult.textContent = round;

        const playScore = document.querySelector('#playScore');
        playScore.classList.add('playScore');
        playScore.textContent = playerScore;

        const compScore = document.querySelector('#compScore');
        compScore.classList.add('compScore');
        compScore.textContent = computerScore;

        const winner = document.querySelector('#winner');
        winner.classList.add('winner');
        winner.textContent = won;

        if (playerScore > computerScore && playerScore == 5) {

            console.log("you win")
            won = `At the end of five rounds you scored [${playerScore}], I scored [${computerScore}], YOU WIN!`;

        } else if (computerScore > playerScore && computerScore == 5) {

            console.log("I win")
            won = `At the end of five rounds you scored [${playerScore}], I scored [${computerScore}], I WIN!`;

        }
        return won;
    });

});