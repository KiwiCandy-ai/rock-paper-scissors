document.getElementById("rock").addEventListener('click', () => {
    humanSelection = 'rock'
    const computerSelection = getComputerChoice()
    const roundResult = playRound(humanSelection, computerSelection)
})

document.getElementById('paper').addEventListener('click', () => {
    const humanSelection = 'paper'
    const computerSelection = getComputerChoice()
    const roundResult = playRound(humanSelection, computerSelection)
})


document.getElementById('scissors').addEventListener('click', () => {
    const humanSelection = 'scissors'
    const computerSelection = getComputerChoice()
    const roundResult = playRound(humanSelection, computerSelection)
})

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const computerOptions = ['rock', 'paper', 'scissors']


function getComputerChoice() {
    const random = getRandomItem(computerOptions);
    console.log('Computer: ' + random);
    return random;
}

let humanScore = 0;
let computerScore = 0;

function updateResults() {
    if (humanScore === 5) {
        scores.textContent = ('Game over! You win! You ' + humanScore + ' ' + 'Computer ' + computerScore);
        humanScore = 0
        computerScore = 0
    } else if (computerScore === 5){
        scores.textContent = ('Game over! You lose! Computer ' + computerScore + ' ' + 'You ' +
        humanScore)
        humanScore = 0
        computerScore = 0
    } 
    return humanScore + computerScore
    }



function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
            para.textContent = ('It\'s a tie!');
        } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
            para.textContent =('You win, rock beats scissors!');
            humanScore++
            scores.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore);
        } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
            para.textContent =('You win, scissors beats paper!');
            humanScore++
            scores.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore)
        } else if (humanSelection == 'paper' && computerSelection == 'rock') {
            para.textContent =('You win, paper beats rock!'); 
            humanScore++
            scores.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore)
        } else if (humanSelection == 'rock' && computerSelection == 'paper') {
            para.textContent =('You lose, paper beats rock');
            computerScore++
            scores.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore)
        } else if (humanSelection == 'scissors' && computerSelection == 'rock') {
            para.textContent =('You lose, rock beats scissors');
            computerScore++
            scores.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore)
        } else if (humanSelection == 'paper' && computerSelection == 'scissors') {
            para.textContent =('You lose, scissors beats paper');
            computerScore++
            scores.textContent = ('You: ' + humanScore + ' Computer: ' + computerScore)
    }
    updateResults()
    }



const title = document.createElement('h1')
document.body.appendChild(title)
title.textContent = 'Rock, Paper, Scissors'
const displayDiv = document.createElement('div')
document.body.appendChild(displayDiv)
const newContent = document.createTextNode('Results:')
displayDiv.appendChild(newContent);
const para = document.createElement('p')
para.textContent = ('Select icon to start the game')
displayDiv.appendChild(para)
const scores = document.createElement('p')
scores.textContent = 'You: 0 Computer: 0'
displayDiv.appendChild(scores)




