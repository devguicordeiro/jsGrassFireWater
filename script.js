const choices = ["grass", "water", "fire"];
let winners = [];

function game() {
  playRound();

  logWins();
}

function playRound(round) {
  const botSelection = botChoice();

  const winner = winnerCheck(playerSelection, botSelection);

  winners.push(winner);
}

function botChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function winnerCheck(choiceP, choiceB) {
  if (choiceP === choiceB) {
    return "Tie";
  } else if (
    (choiceP === "grass" && choiceB === "water") ||
    (choiceP === "water" && choiceB === "fire") ||
    (choiceP === "fire" && choiceB === "grass")
  ) {
    return "Player";
  } else {
    return "Bot";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let botWins = winners.filter((item) => item == "Bot").length;
  let ties = winners.filter((item) => item == "Tie").length;
}
