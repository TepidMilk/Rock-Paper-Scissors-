//assigns R, P or S to computerChoice
function getComputerChoice(){
    // assigns computerChoice a random number from 1-3
    let computerChoice = Math.floor(Math.random() * 3 + 1)
    
    //assigns computerChoice R, P or S based off of its previous value
    if (computerChoice == 1){
        return 'rock'
    }
    else if (computerChoice == 2){
        return 'paper';
    } 
    else {
        return 'scissors';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})

// Plays a round of RPS between the user and the computer
function playRound(playerChoice){

    let computerSelection = getComputerChoice();

    if (playerChoice == computerSelection){
        console.log('draw')
        return 
    }

    winCheck(playerChoice, computerSelection)

}

function winCheck(player, computer){
    const rockWin = 'rock scissors'
    const paperWin = 'paper rock'
    const scissorWin = 'scissors paper'
    let check = `${player} ${computer}`
    if (check == rockWin || check == paperWin || check == scissorWin){
        console.log('win')
        return 'win'
    } else {
        console.log('lose')
        return 'lose'
    }
}

