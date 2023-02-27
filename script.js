let winners = [];
const choices = ["grass", "fire", "water"];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".botScore").textContent = "Score: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".botChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 3) {
    return;
  }

  const botChoice = botSelect();

  const winner = checkWinner(playerChoice, botChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, botChoice, winner);
  wins = checkWins();
  if (wins == 3) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 3) {
    document.querySelector(".winner").textContent =
      "Congrats! You Won the best of 5";
  } else {
    document.querySelector(".winner").textContent =
      "The random trainer beat you! Wanna play another game?";
  }
  document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, botChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(".botChoice").textContent = `The Bot Chose: ${
    botChoice.charAt(0).toUpperCase() + botChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Bot") {
    document.querySelector(".winner").textContent = "The Bot won the Round";
  } else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}

function tallyWins() {
  const pWinsC = winners.filter((item) => item == "Player").length;
  const cWinsC = winners.filter((item) => item == "Bot").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinsC}`;
  document.querySelector(".botScore").textContent = `Score: ${cWinsC}`;
}

function botSelect() {
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
}

function checkWins() {
  const pWinsC = winners.filter((item) => item == "Player").length;
  const cWinsC = winners.filter((item) => item == "Bot").length;
  return Math.max(pWinsC, cWinsC);
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "grass" && choice2 == "water") ||
    (choice1 == "water" && choice2 == "fire") ||
    (choice1 == "fire" && choice2 == "grass")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Bot";
  }
}

function setWins() {
  const pWinsC = winners.filter((item) => item == "Player").length;
  const cWinsC = winners.filter((item) => item == "Bot").length;
}
startGame();
