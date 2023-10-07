
/**
 * Declare constant for DOM elements and and possible choices */

const myPlayer = document.querySelector("#myPlayer");
const myComputer = document.querySelector("#myComputer");
const myResult = document.querySelector("#myResult");
const myButton = document.querySelectorAll(".myButtons");
const scoreNum = document.querySelector(".scoreNum");


/** Declare player, computer result and score variables */
let player;
let computer;
let result;
let score = 0;



/** Add event listener to all the buttons */

myButton.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computersOptions();
    myPlayer.textContent = `Player: ${player}`;
    myComputer.textContent = `Computer: ${computer}`;
    myResult.textContent = checkResults();
}));


/** Computer's choice function */

function computersOptions() {
    const selections = Math.floor(Math.random() * 3) + 1;
    switch (selections) {
        case 1:
            computer = "ROCK";
            break;

        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;

        default:
            break;

    }
};

/** Function to keep and update the score */

function keepScore(point) {
    score += point;
    scoreNum.innerHTML = score;
}

/** Function to check the result */
function checkResults() {
    if (computer == player) {
        return ("DRAW!");
    }
    else if (computer == "ROCK" && player == "PAPER") {
        keepScore(1);
        return "You Win!";

    }
    else if (computer == "SCISSORS" && player == "PAPER") {
        keepScore(-1);
        return "You Loose!";

    }
    else if (computer == "PAPER" && player == "SCISSORS") {
        keepScore(1);
        return "You Win!";
    }
    else if (computer == "ROCK" && player == "SCISSORS") {
        keepScore(-1);
        return "You Loose!";

    }
    else if (computer == "PAPER" && player == "ROCK") {
        keepScore(-1);
        return "You Loose!";

    }
    else if (computer == "SCISSORS" && player == "ROCK") {
        keepScore(1);
        return "You Win!";

    }


}



