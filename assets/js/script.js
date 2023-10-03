const myPlayer = document.querySelector("#myPlayer");
const myComputer = document.querySelector("#myComputer");
const myResult = document.querySelector("#myResult");
const myButton = document.querySelectorAll(".myButtons");

let player;
let computer;
let result;

myButton.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computersOptions();
    myPlayer.textContent = `Player: ${player}`;
    myComputer.textContent = `Computer: ${computer}`;
    myResult.textContent = checkResults();
}));

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

function checkResults() {
    if (computer == player) {
        return ("DRAW!");
    }
    if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Loose!";
    }
    if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win" : "You Loose!";
    }
    if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win" : "You Loose!";
    }
}

