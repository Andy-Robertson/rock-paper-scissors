// global scope variables
let playerScore = 0;
let computerScore = 0;

// randomly selects the computers move, called by button eventListener
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];
    let index = [Math.floor(Math.random() * 3)];

    return computerMove = choices[index];
}

//resets game, called by eventListener
function reset() {

    playerScore = 0;
    computerScore = 0;
    playerMove = "-";
    computerMove = "-";
    winner = "SELECT A MOVE TO START";
    addMoveButtons();
}

const gameButtonContainer = document.querySelector('#gameButtonContainer');

const btn1 = document.createElement('button');
btn1.classList.add('btn1');
btn1.textContent = "ROCK";
gameButtonContainer.appendChild(btn1)

const btn2 = document.createElement('button');
btn2.classList.add('btn2');
btn2.textContent = "PAPER";
gameButtonContainer.appendChild(btn2)

const btn3 = document.createElement('button');
btn3.classList.add('btn3');
btn3.textContent = "SCISSORS";
gameButtonContainer.appendChild(btn3)

const btn4 = document.createElement('button');
btn4.classList.add('btn4');
btn4.textContent = "PLAY AGAIN";
gameButtonContainer.appendChild(btn4);

//adds rock, paper, scissors buttons to the DOM and removes reset button, called by playRound()
function addMoveButtons() {
    gameButtonContainer.appendChild(btn1); //rock
    gameButtonContainer.appendChild(btn2); //paper
    gameButtonContainer.appendChild(btn3); //scissors
    gameButtonContainer.removeChild(btn4); //reset
}

//adds reset button to the DOM and removes rock, paper, scissors buttons, called by playRound()
function removeMoveButtons() {
    gameButtonContainer.removeChild(btn1);
    gameButtonContainer.removeChild(btn2);
    gameButtonContainer.removeChild(btn3);
    gameButtonContainer.appendChild(btn4);
}

// plays one round of the game, called by button eventListener
function playRound(playerSelection, computerSelection) {

    computerSelection = computerMove;
    playerSelection = playerMove;

    if (playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors") {

        playerScore++;

        if (playerScore == 5) {

            winner = `YOU WIN THE MATCH!`;
            removeMoveButtons();

        } else {

            winner = `You WIN! ${playerSelection} beats ${computerSelection}!`;

        }

    } else if (computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "scissors") {

        computerScore++;

        if (computerScore == 5) {

            winner = `CPU WINS THE MATCH!`;
            removeMoveButtons();

        } else {

            winner = `CPU WINS! ${computerSelection} beats ${playerSelection}`;

        }
    } else {

        winner = `It's a DRAW! we both drew ${computerSelection}`;

    }

    return winner;

}

// declares buttons as node list
const buttons = document.querySelectorAll('button');

// iterates through each button
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.classList == "btn1") {

            playerMove = "rock";
            computerPlay();
            playRound();

        } else if (button.classList == "btn2") {

            playerMove = "paper";
            computerPlay();
            playRound();

        } else if (button.classList == "btn3") {

            playerMove = "scissors";
            computerPlay();
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

// Hides reset button after DOM is loaded
gameButtonContainer.removeChild(btn4)