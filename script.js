function computerPlay(){
    let options = ['Rock','Paper','Scissors'];
    let result = options[Math.floor(Math.random() * options.length)];
    console.log(result);
}

computerPlay();