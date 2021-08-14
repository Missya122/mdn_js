let btn = document.querySelector("#checkBtn");
let userInput = Number(document.querySelector("#input")).value;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function game() {
    let correctAns = getRandomInt(1, 101);
    btn.addEventListener("onclick", checkAns);
    let chance = 1;


    function checkAns() {

        if (userInput == correctAns) {
            return console.log("Congratulations! You answered correctly");
        } else {
            if (userInput > correctAns) {
                console.log("Wrong! Your answer is too big!");
                chance++;
            } else {
                console.log("Wrong! Your answer is too small!");
                chance++;
            }
        }
        if (chance == 10) return console.log("Sorry, you lost!");

    }
    let info = prompt("Do you want to try again?");
    let choice = info.textContent;
    switch (choice) {
        case 1:
            console.log("Game ended.");

        case 2:
            game();

        default:
            break;
    }

}
game();