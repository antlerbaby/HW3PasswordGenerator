/* 1.) Define and Randomize choice from Character Strings= 
        Special Characters
        Numeric Characters
        Lowercase Characters
        Uppercase Characters */

function getSpecChar() {
    const symbols = '!@#$%^&*(){}[]=<>?~_';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
//console.log(getSpecChar());

function getNumChar() {
    const numbers = '0123456789';
    return numbers[Math.floor(Math.random() * numbers.length)];
}
//console.log(getNumChar());

function getLowChar() {
    const lowletters = 'abcdefghijklmnopqrstuvwxyz';
    return lowletters[Math.floor(Math.random() * lowletters.length)];
}
//console.log(getLowChar());

function getUpChar() {
    const upletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upletters[Math.floor(Math.random() * upletters.length)];
}
//console.log(getUpChar());


// 2.) Combine the functions somehow to loop through the specified number when called

//function

/* 3.) Define and connect DOM elements from HTML 
                                            id="pwLength"
                                            id="specialCharacters" 
                                            id="numCharacters"
                                            id="lowCharacters"
                                            id="upCharacters"
                                            id="runProgramButt"
                                            id="revealPassword"  */
const lengthElement = document.getElementById('pwLength');
const specCharElement = document.getElementById('specialCharacters');
const numCharElement = document.getElementById('numCharacters');
const lowCharElement = document.getElementById('lowCharacters');
const upCharElement = document.getElementById('upCharacters');
const runElement = document.getElementById('runProgramButt');
const revealElement = document.getElementById('revealPassword');

/* 4.) Click Events- include behavior for checkbox input types to trigger functions
                                            id="specialCharacters" 
                                            id="numCharacters"
                                            id="lowCharacters"
                                            id="upCharacters"  */

//.addEventListener //click checkboxes?

/* 5.) Click Event- click button id="runProgramButt" 
       which collects and displays the resulting string into id="revealPassword" */

//.addEventListener //click button
        // length (required between 8 and 128)
        // specialCharacters checked true? 
        // numCharacters checked true?
        // lowCharacters checked true?
        // upCharacters checked true?
        // remove false

//revealPassword.innerText = /* Add above together and generate final password string into "Password will appear here..." */

/* 6.) Remove copy/paste function from HTML and collect here (?) */