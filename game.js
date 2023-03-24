//assigns R, P or S to computerChoice
function getComputerChoice(){
    // assigns computerChoice a random number from 1-3
    let computerChoice = Math.floor(Math.random() * 3 + 1)
    
    //assigns computerChoice R, P or S based off of its previous value
    if (computerChoice == 1){
        return 'Rock'
    }
    else if (computerChoice == 2){
        return 'Paper';
    } 
    else {
        return 'Scissors';
    }
}

//Plays a round of RPS between the user and the computer
function playRound(){
    //prompts user for their action (case insensitive)
    let player = prompt('Rock, Paper, or Scissors?')
    player = player.toLowerCase();
    player = player.substring(0,1).toUpperCase() + player.substring(1)

    //changes computer selection each round
    let computerSelection = getComputerChoice();
    
    //checks if user selected from allowed options and reprompts if not
    while (player != "Rock" && player != "Paper" && player != "Scissors"){
        alert('Please pick from Rock, Paper, or Scissors.')
        player = prompt('Rock, Paper, or Scissors?')
        player = player.toLowerCase();
        player = player.substring(0,1).toUpperCase() + player.substring(1);
    }

    //checks for draw
    if (player == computerSelection){
        console.log('Draw!');
        return; 
    }

    //returns win or lose from user rock selection
    while(player == 'Rock'){
        if (computerSelection == 'Paper'){
            console.log('You Lose! Paper covers Rock!');
            return "Lose";
        } else console.log('You Win! Rock crushes Scissors!')
        return 'Win'; 
    }

    //returns win or lose from user paper selection
    while (player == 'Paper'){
        if (computerSelection == 'Rock'){
            console.log('You Win! Paper covers Rock!');
            return 'Win';
        } else console.log('You Lose! Scissors cut Paper!');
        return "Lose";
    }

    //returns win or lose from user scissors selection
    while (player == 'Scissors'){
        if (computerSelection == 'Rock'){
            console.log('You Lose! Rock crushes Scissors!')
            return "Lose";
        } else console.log('You Win! Scissors cut Paper!');
        return 'Win';
    }
}

//plays a best of 5 game of RPS
function game(){
    //keeps track of score
    let score = 0

    console.log("Let's play Rock Paper Scissors! 5 rounds")

    //checks for best of 5
    while (score < 3 && score > -3){
        //plays RPS until there is a winner
        for (i = 1; i <= 5; i++){
                let result = playRound();
                if (result == 'Win'){
                    score++
                }
                else if (result == 'Lose'){
                    score--
                }
        }
    }
    
    //determines winner based off score
    if (score > 0){
        console.log('Winner Winner Chicken Dinner!');
        return;
    }
    else if (score < 0){
        console.log('Loser Loser Grain Smoothie');
        return;
    } else console.log("Seems we're evenly matched")
    return;
}