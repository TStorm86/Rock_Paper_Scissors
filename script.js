const choices = ["rock", "paper", "scissors"];

function game(){
    for (let i = 0; i <= 5; i++){
        playRound();
    }
}


function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
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
    console.log(pChoice, cChoice, '-----' );
    if(pChoice === cChoice){
        return "Its a tie";
    }else if(
        (pChoice === 'rock' && cChoice == 'scissors') ||
        (pChoice === 'paper' && cChoice == 'rock') || 
        (pChoice === 'scissors' && cChoice == 'paper')
    ){
        return "You win";
    }else{
        return "Computer wins"
    }
}




game();
