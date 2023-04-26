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

let player = 0
let computer = 0
const winner = document.createElement('div')
const body = document.querySelector('body')
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
        winner.textContent = 'Draw!'
        scores.append(winner)
        return 
    }

    trackScores(getDecision(playerChoice, computerSelection))

    scores.appendChild(playerScore)
    scores.appendChild(computerScore)
    scores.append(winner)

    checkWinner()
}

function getDecision(player, computer){
    const rockWin = 'Rock Scissors'
    const paperWin = 'Paper Rock'
    const scissorWin = 'Scissors Paper'
    let check = `${player} ${computer}`
    if (check == rockWin || check == paperWin || check == scissorWin){
        winner.textContent = `${player} beats ${computer}!`
        return 'win'
    } else {
        winner.textContent = `${computer} beats ${player}!`
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

function checkWinner(){
    if (player == 5 || computer == 5){
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }

    if (player == 5){
        winner.textContent = 'You have won congratulations!'
        scores.append(winner)
    }
    else if (computer == 5){
        winner.textContent = 'OH NO You\'ve lost!'
        scores.append(winner)
    }
}
