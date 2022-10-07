// Defines a single parameter.
// Takes in an argument of a name and returns a phrase with that name using string interpolation.

function introduction(name) {
    return `Hi, my name is ${name}.`
}

// Define a function that uses two parameters.

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// Takes in two arguments, a name and a language, and language defaults to JavaScript
// What if we wanted to make this function work whether or not a first name is passed in as an argument? 
// We can do this by setting a default value for the firstName parameter. 
// The default value for a parameter is created by using the syntax: paremeter = value. 
// It is placed in the normal place that parameters are placed. 

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
