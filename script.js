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
    
    while (check == false) {
        input = prompt(
            "You probabily write it wrong, try again."
        );
        
        while (input == null) {
            input = prompt("Type Grass, Water or Fire")
        }
        
        input = input.toLowerCase(input);

        check = validateInput(input);
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

function winnerCheck(choiceP, choiceB){
    if(choiceP === choiceB){
        return "Tie";
    } else if(
        (choiceP === "grass" && choiceB === "water") ||
        (choiceP === "water" && choiceB === "fire") ||
        (choiceP === "fire" && choiceB === "grass") 
    ){
        return "Player";
    } else{
        return "Bot";
    }

}

game();
