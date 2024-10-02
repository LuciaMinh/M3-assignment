// Prompt the user for a score
let score = parseInt(prompt('Enter a score'))

// Use a switch statement to determine the grade
switch (score){
    case (score < 60):
        console.log('you received an F')
        break
    case (score >= 60 && score < 70):
        console.log ('you received a D')
        break
    case (score >= 70 && score < 80):
        console.log ('you received a C')
        break
    case (score >=80 && score <90):
        console.log ('you received a B')
        break
    default:
        console.log ('you received an A')       
}
