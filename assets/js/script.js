const myPlayer = document.querySelector("#myPlayer");
const myComputer = document.querySelector("#myComputer");
const myResult = document.querySelector("#myResult");
const myButton = document.querySelectorAll(".myButtons");

let player;
let computer;
let result;

myButton.forEach(button => button.addEventListener("click", () => {
    button.textContent = player;
    computersOptions();
    myPlayer.textContent = `Player: ${player}`;
    myComputer.textContent = `Computer: ${computer}`;
    myResult.textContent = checkResults();
}))

