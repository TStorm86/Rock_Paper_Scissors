function computerPlay(){
    let options = ['Rock','Paper','Scissors'];
    let outcome = options[Math.floor(Math.random() * options.length)];
    return outcome;
}




function playRound(playerChoice, computerChoice){
  let result = '';

  if (playerChoice ==="ROCK"){
      if(computerChoice === 'Paper'){
          result = 'You lose! Paper beats Rock';
      }else if(computerChoice === 'Scissors'){
          result = "You win! Rock beats Scissors";
      }else{
          result = "It's a tie";
      }
  }else if(playerChoice ==="PAPER"){
      if(computerChoice === 'Scissors'){
          result = 'You lose! Scissors beats Paper';
      }else if(computerChoice === 'Rock'){
          result = "You win! Paper beats Rock";
      }else{
          result = "It's a tie";
      }
  }else if(playerChoice === 'SCISSORS'){
      if(computerChoice === 'Rock'){
          result = 'You lose! Rock beats Scissors';
      }else if(computerChoice === 'Paper'){
          result = "You win! Scissors beats Paper";
      }else{
          result = "It's a tie";
      }
  }else{
      result = 'Invalid choice';
  }

  return result;

}

 playerChoice = prompt("Enter choice:", "").toUpperCase();
 computerChoice = computerPlay();
console.log(playRound(playerChoice, computerChoice));   