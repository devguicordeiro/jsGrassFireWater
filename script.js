const choices = ["grass", "water", "fire"];
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector("button").textContent = "Play Again";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const botSelection = botChoice();
    const winner = winnerCheck(playerSelection, botSelection);
    winners.push(winner);
    logRound(playerSelection, botSelection, winner, round)
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
        return "Player";
    } else{
        return "Bot";
    }

}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let botWins = winners.filter((item) => item == "Bot").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Players Wins:", playerWins);
    console.log("Bot Wins:", botWins);
    console.log("Tie:", ties);

}

function logRound(playerChoice, botChoice, winner, round){
    console.log("Round", round);
    console.log("Player chose:", playerChoice);
    console.log("Bot chose:", botChoice);
    console.log(winner, "won the round");
    console.log("---------------------");
}
