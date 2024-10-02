// Get 2 integers from the user
let num1 = parseInt(prompt('Enter the first integer'))
let num2 = parseInt(prompt('Enter the second integer'))

// Check and display the larger number or if they are equal
if(num1 > num2){
    console.log('The larger number is: ' + num1)
}
else if(num1 < num2) {
    console.log('The larger number is: ' + num2)
}
else {
    console.log(num1 + ' is equal ' + num2)
}

