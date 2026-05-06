function game(userChoice){
  let randomNum = Math.random();
  let compChoice;
  if(randomNum < 0.33){
    compChoice = "Rock";
  }else if(randomNum < 0.66){
    compChoice = "Paper";
  }else if (randomNum < 1){
    compChoice = "Scissiors";
  }

  console.log(compChoice);

  let result = document.querySelector("#result")
  if(userChoice == compChoice){
    result.innerHTML = "Tie";
  }else if(userChoice == "Rock"){
    if(compChoice == "Paper"){
      result.innerHTML = "You Lose";
    }else{
      result.innerHTML = "You won";
    }
  }
}


document.addEventListener('DOMContentLoaded', function(){
   document.querySelector("#rock-button").onClick = ("Rock");

 });

