// Generate a random number for the coin flip 
let randomNum = Math.round(Math.random()) // Generate a number between 0 and 1
let coinFlip

// Determine Heads or Tails based on the random number
if (randomNum < 0.5){
    coinFlip = 0 // Heads
}
else {
    confirm = 1 // Tails
}

// Prompt the user to select 'Heads' or 'Tails'
let choice = prompt('Choose Heads or Tails')

// Check the result of the coin flip
if (coinFlip === 0){ // Heads
    if (choice === 'Heads'){
        alert('The flip was Heads and you chose Heads... you win!')
    }
    else {
        alert('The flip was Tails and you chose Tails... you loose!')
    }
}
else{ // Tails
    if (choice === 'Heads'){
        alert('The flip was Tails and you chose Heads... you loose!')
    }
    else{
        alert('The flip was Tails and you chose Tails... you win!')
    }
}
