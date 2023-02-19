const choices = ["grass", "water", "fire"];
const winners = [];

function game() {
    for(let i = 0; i <= 4; i++){
        playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const botSelection = botChoice();
    const winner = winnerCheck(playerSelection, botSelection);
    winners.push(winner);
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
    }return input
    
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
        return "Player Wins";
    } else{
        return "Bot Wins";
    }

}

function logWins(){
    console.log(winners);
};

game();
