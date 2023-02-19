const choices = ["grass", "water", "fire"]

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const botSelection = botChoice();
}

function playerChoice() {
    let input = prompt("Type Grass, Water or Fire");
    
    while (input == null) {
        input = prompt("Type Grass, Water or Fire")
    }
    
    input = input.toLowerCase();
    
    let check = validateInput(input)
    
    if(check == true) {
        console.log(input);
    }

}

function botChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    if (choices.includes(choice)) {
        return true;
    }
    return false;
}

game();
