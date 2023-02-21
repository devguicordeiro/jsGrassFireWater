const choices = ["grass", "water", "fire"];
let winners = [];

function restartGame()

function game() {
  let imgs = documento.querySelectorAll("img")
  imgs.forEach((img) => img.addEventListener(("click"), () => {
    if(img.id){
      playRound(img.id)
    }
  } ))
}

function playRound(playerChoice) {

  let wins = roundWinsCheck()
    if(wins >= 5){
      return
    }

  const botSelection = botChoice();

  const winner = winnerCheck(playerSelection, botSelection);

  winners.push(winner);

  tallyWins();
}

function tallyWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let botWins = winners.filter((item) => item == "Bot").length;
  document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
  document.querySelector(".botScore").textContent = `Score: ${botWins}`;
}

function botChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function roundWinsCheck() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let botWins = winners.filter((item) => item == "Bot").length;
  return Math.max(playerWins, botWins)
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

game();