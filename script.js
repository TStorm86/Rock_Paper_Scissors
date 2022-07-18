const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
    for (let i = 1; i <= 5; i++){
        playRound();
    }
    recordWins();
}


function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
}


function playerChoice(){
    let input = prompt("Enter your option");
    while(input == null){
        input = prompt("Please enter a valid option");
    }
    input = (input.toLowerCase()).trim();
    let check = validateInput(input);
    while (check == false){
        input = prompt("Check Spelling, Capitalization doesn't matter");
        while(input == null){
        input = prompt("Please enter a valid option");
    }
        input = (input.toLowerCase()).trim();
        check = validateInput(input);
    }
    return input;
}


function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}


function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    }else{
        return false;
    }
}

function checkWinner(pChoice, cChoice){
    if(pChoice === cChoice){
        return "Its a tie";
    }else if(
        (pChoice === 'rock' && cChoice == 'scissors') ||
        (pChoice === 'paper' && cChoice == 'rock') || 
        (pChoice === 'scissors' && cChoice == 'paper')
    ){
        return "Player wins";
    }else{
        return "Computer wins"
    }
}


function recordWins(){
   let playerWins = winners.filter((item)=> item == "Player wins").length;
   let computerWins = winners.filter((item)=> item == "Computer wins").length;
   let ties = winners.filter((item) => item == "Its a tie").length;

   console.log("Results:");
   console.log("Player wins:", playerWins);
   console.log("Computer wins:", computerWins);
   console.log("Ties:", ties);

}

game();

