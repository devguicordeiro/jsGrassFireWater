const choices = ["grass", "water", "fire"];
let winners = [];

function restartGame()

function game() {
  
  let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener("click", () => {
      if(img.id){
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {

  let wins = roundWinsCheck()
    if(wins >= 3){
      return;
    }

  const botChoice = botSelect();

  const winner = winnerCheck(playerChoice, botChoice);

  winners.push(winner);

  tallyWins();
  
  displayRound(playerChoice, botChoice, winner);

  wins = roundWinsCheck();
    if(wins == 3) {
      displayEnd();
    }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins = 3) {
      document.querySelector(".winner").textContent = "You won the best of 5, you're awesome!"
    } else {
      document.querySelector(".winner").textContent = "Buahh! You lose. The bot won the best of 5."
    }
      document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, botChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.querySelector(".botChoice").textContent = `The bot Chose: ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)}` ;
  document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
}

function tallyWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let botWins = winners.filter((item) => item == "Bot").length;
  document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
  document.querySelector(".botScore").textContent = `Score: ${botWins}`;
}

function botSelect() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function roundWinsCheck() {
  const playerWins = winners.filter((item) => item == "Player").length;
  const botWins = winners.filter((item) => item == "Bot").length;
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
  const playerWins = winners.filter((item) => item == "Player").length;
  const botWins = winners.filter((item) => item == "Bot").length;
  const ties = winners.filter((item) => item == "Tie").length;
}

game();