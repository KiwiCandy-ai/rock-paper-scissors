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
        para.textContent = ('You win! You ' + humanScore + ' ' + 'Computer ' + computerScore);
    } else if (computerScore === 5){
        para.textContent = ('You lose! Computer ' + computerScore + ' ' + 'You ' +
        humanScore)
    }
    }


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
            para.textContent = ('It\'s a tie!');
        } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
            para.textContent =('You win, rock beats scissors!');
            humanScore++
        } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
            para.textContent =('You win, scissors beats paper!');
            humanScore++
        } else if (humanSelection == 'paper' && computerSelection == 'rock') {
            para.textContent =('You win, paper beats rock!'); 
            humanScore++
        } else if (humanSelection == 'rock' && computerSelection == 'paper') {
            para.textContent =('You lose, paper beats rock');
            computerScore++
        } else if (humanSelection == 'scissors' && computerSelection == 'rock') {
            para.textContent =('You lose, rock beats scissors');
            computerScore++
        } else if (humanSelection == 'paper' && computerSelection == 'scissors') {
            para.textContent =('You lose, scissors beats paper');
            computerScore++
    }
    updateResults()
    }





const displayDiv = document.createElement('div')
document.body.appendChild(displayDiv)
const newContent = document.createTextNode('Results:')
displayDiv.appendChild(newContent);
const para = document.createElement('p')
displayDiv.appendChild(para)

