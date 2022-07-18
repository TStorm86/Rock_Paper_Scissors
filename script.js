const choices = ["rock", "paper", "scissors"];
const winners = [];


function game(){
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }
    recordWins();
}


function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
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
        return "Player";
    }else{
        return "Computer"
    }
}


function recordWins(){
   let playerWins = winners.filter((item)=> item == "Player").length;
   let computerWins = winners.filter((item)=> item == "Computer").length;
   let ties = winners.filter((item) => item == "Its a tie").length;

   console.log("Results:");
   console.log("Player wins:", playerWins);
   console.log("Computer wins:", computerWins);
   console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round:", round)
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    
        if (winner === "Its a tie"){
            console.log("The round ended in a Tie")
        }else{
            console.log(winner, "Won this round");
        }
    console.log("......................................")
}


game();

