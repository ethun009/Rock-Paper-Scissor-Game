function generateComputerChoice() {
  //This will generate random number between 0 and 3
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    pcImg.src ="https://i.postimg.cc/63F2McfY/pcrock.jpg";
    return "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    pcImg.src ="https://i.postimg.cc/g0S6ZmX9/pcpaper.jpg";
    return "Paper";
  } else {
    pcImg.src ="https://i.postimg.cc/4xXK2mpk/pcscissor.png";
    return "Scissor";
  }
}


function paperBtn() {
  computerChoice = generateComputerChoice();
         resultMsg = getResult('Paper', computerChoice);
        showResult('Paper', computerChoice, resultMsg);
        userImg.src= "https://i.postimg.cc/ZK8BLrBx/user-Paper.jpg";
}

function rockBtn ()
{
  let computerChoice = generateComputerChoice();
  let resultMsg = getResult('Rock', computerChoice);
  showResult('Rock', computerChoice, resultMsg);
  userImg.src= "https://i.postimg.cc/Pf88CGdc/rock.jpg";

}

function scissorBtn () {
  computerChoice = generateComputerChoice();
        resultMsg = getResult('Scissor', computerChoice);
        showResult('Scissor', computerChoice, resultMsg);
        userImg.src= "https://i.postimg.cc/qvQNP4Gt/userscissor.png"
}



let scoreStr = localStorage.getItem('score')
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
      return `Bad Luck . Its a tie.`;
    } else if (computerMove === "Paper") {
      score.lost++;
      return "You Lose🐸";
    }
  } else if (userMove === "Scissor") {
    if (computerMove === "Scissor") {
      score.tie++;
      return `Bad Luck . Its a tie.`;
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
      return `Bad Luck . Its a tie.`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('score' , JSON.stringify(score))
  document.querySelector(".displayResult").innerHTML = `You have chosen ${userMove}.    Computer choice is ${computerMove}. ${result}`;
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
  userImg.src = '' ;
  pcImg.src = '' ;
}

let userImg = document.querySelector(".userImg");
let pcImg = document.querySelector(".pcImg");
