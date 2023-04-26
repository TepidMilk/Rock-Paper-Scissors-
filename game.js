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

let player = 0
let computer = 0
const scores = document.querySelector('.scores');
const playerScore = scores.firstElementChild
const computerScore = scores.lastElementChild
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

    trackScores(winCheck(playerChoice, computerSelection))

    scores.appendChild(playerScore)
    scores.appendChild(computerScore)

}

function getDecision(player, computer){
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

function trackScores(decision){
    if (decision == 'win'){
        player++
        playerScore.textContent = `Player Score: ${player}`
    } else if (decision == 'lose'){
        computer++
        computerScore.textContent = `Computer Score: ${computer}`
    } 
}
