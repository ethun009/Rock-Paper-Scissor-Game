function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    pcImg.src = "rock.png";
    return "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    pcImg.src = "paper.png";
    return "Paper";
  } else {
    pcImg.src = "scissors.png";
    return "Scissor";
  }
}

function startAnimation() {
  userImg.src = "rock.png";
  pcImg.src = "rock.png";
  document.getElementById("img1").style.animation =
    "shakeLeft 1s 3 ease-in-out";
  document.getElementById("img2").style.animation =
    "shakeRight 1s 3 ease-in-out";
}

function resetAnimation() {
  document.getElementById("img1").style.animation = "";
  document.getElementById("img2").style.animation = "";
}

function paperBtn() {
  startAnimation();

  setTimeout(() => {
    computerChoice = generateComputerChoice();
    resultMsg = getResult("Paper", computerChoice);
    showResult("Paper", computerChoice, resultMsg);
    userImg.src = "paper.png";
    resetAnimation();
  }, 3000);
}

function rockBtn() {
  startAnimation();
  setTimeout(() => {
    let computerChoice = generateComputerChoice();
    let resultMsg = getResult("Rock", computerChoice);
    showResult("Rock", computerChoice, resultMsg);
    userImg.src = "rock.png";
    resetAnimation();
  }, 3000);
}

function scissorBtn() {
  startAnimation();

  setTimeout(() => {
    computerChoice = generateComputerChoice();
    resultMsg = getResult("Scissor", computerChoice);
    showResult("Scissor", computerChoice, resultMsg);
    userImg.src = "scissors.png";
    resetAnimation();
  }, 3000);
}

let scoreStr = localStorage.getItem("score");
let score = JSON.parse(scoreStr) || {
  win: 0,
  lost: 0,
  tie: 0,
};

function getResult(userMove, computerMove) {
  if (userMove === "Rock") {
    if (computerMove === "Scissor") {
      score.win++;
      return "You won👑";
    } else if (computerMove === "Rock") {
      score.tie++;
      return `Bad Luck . Its a tie.🤣`;
    } else if (computerMove === "Paper") {
      score.lost++;
      return "You Lose🐸";
    }
  } else if (userMove === "Scissor") {
    if (computerMove === "Scissor") {
      score.tie++;
      return `Bad Luck . Its a tie.😂`;
    } else if (computerMove === "Rock") {
      score.lost++;
      return "You Lose🐸";
    } else if (computerMove === "Paper") {
      score.win++;
      return "You won👑";
    }
  } else {
    if (computerMove === "Scissor") {
      score.lost++;
      return "You Lose🐸";
    } else if (computerMove === "Rock") {
      score.win++;
      return "You won👑";
    } else if (computerMove === "Paper") {
      score.tie++;
      return `Bad Luck . Its a tie.🤦‍♂️`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(
    ".displayResult"
  ).innerHTML = `You have chosen ${userMove}.    Computer choice is ${computerMove}. ${result}`;
  changeResult();
}

function changeResult() {
  document.querySelector(".win").innerHTML = score["win"];
  document.querySelector(".lose").innerHTML = score["lost"];
  document.querySelector(".tie").innerHTML = score["tie"];
}

function clrDiv() {
  score.win = 0;
  score.lost = 0;
  score.tie = 0;
  document.querySelector(".displayResult").innerHTML = "";
  userImg.src = "rock.png";
  pcImg.src = "rock.png";
}

let userImg = document.querySelector(".userImg");
let pcImg = document.querySelector(".pcImg");
