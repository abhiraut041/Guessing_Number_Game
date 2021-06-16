// Setting the Secret Number and Score
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secret_number);
const msg_box = document.querySelector(".message");
const score_box = document.querySelector(".score-value");

// Function to display guessing hints
function displayMsg(msg) {
  msg_box.textContent = msg;
}

// Function to update board after win
function playerWin_UpdateBoard() {
  document.querySelector(".answer-section-content").textContent = secret_number;
  document.querySelector("body").style.background = "blue";
  document.querySelector("#user-answer").style.backgroundColor = "blue";
  document.querySelector(".answer-section-box").style.width = "300px";

  // Disabling the input field to Stop the Game
  document.querySelector("#user-answer").disabled = true;

  // checking for highscore
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore-value").textContent = highscore;
  }
}

// Check Button => onClick Listener
document.querySelector(".check-answer").addEventListener("click", function () {
  const curr_guess = Number(document.querySelector("#user-answer").value);

  // Compare secret and guess value
  if (!curr_guess) {
    displayMsg("⛔  Not a Valid-Number..");
  } else if (secret_number === curr_guess) {
    // Winning Condition
    displayMsg("🎊 You Won..!");
    playerWin_UpdateBoard();
  } else if (secret_number !== curr_guess) {
    if (score > 1) {
      displayMsg(
        secret_number > curr_guess ? "📉 Too Low..." : "📈 Too High..."
      );
      score--;
      score_box.textContent = score;
    } else {
      displayMsg("💥 You Lost the Game...");
      score_box.textContent = 0;
      //   Disable the answer-box after losing the game
      document.querySelector("#user-answer").disabled = true;
    }
  }
});

// Again Button : Reset The Game => onClick Listener
document.querySelector(".reset-game").addEventListener("click", function () {
  // Resetting the score
  score = 20;
  score_box.textContent = score;
  // Reset the hidden number view
  document.querySelector(".answer-section-content").textContent = "?";
  document.querySelector(".answer-section-box").style.width = "200px";
  //   Reset the body and input-box background
  document.querySelector("body").style.background = "black";
  document.querySelector("#user-answer").style.background = "black";
  //   Reset the message display
  displayMsg("Start Guessing...");
  //   Reset the user answer box
  document.querySelector("#user-answer").value = "";
  //   Re-Enable the anser box
  document.querySelector("#user-answer").disabled = false;
  // Recalculate the secret number
  secret_number = Math.trunc(Math.random() * 20) + 1;
});
