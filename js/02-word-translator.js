// Prompt the user for a language code 
let langCode = prompt('Enter a language code (es, de, en, fr')

// Initialize the greeting variable
let greeting

// Determine the greeting based on the language code
if (langCode === 'es'){
    greeting = 'Hello World translated in Spanish is:¡Hola Mundo'
} //Spanish
else if (langCode === 'de'){
    greeting = 'Hello World translated in German is: Hallo Welt'
} // German
else if(langCode === 'fr'){
    greeting = 'Hello World translated in French: Bonjour le monde'
} // German
else{
    greeting = 'Hello World'
}// Default to English

// Display the greeting in the console
console.log(greeting)
