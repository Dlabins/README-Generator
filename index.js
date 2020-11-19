const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")


// array of questions for user
const questions = [{
    type: "input",
    message: "What would you like to name your project?",
    name: "Project Title"
},
{
    type: "input",
    message: "Briefly describe your project",
    name: "Project Description"  
},
{
    type: "input",
    message: "What would you like to include in the Table of Contents",
    name: "Project Table of Contents"
},
{
    type: "input",
    message: "What are the steps required to install this project?",
    name: "Project Installation"
},
{
    type: "input",
    message: "Add instructions for how the project is used and provide an example of the project in use",
    name: "Project Usage"
},
{
    type: "list",
    message: "Which license will be used for this project?",
    choices: ["MIT", "GNU", "Apache", "Mozilla"],
    name: "Project License"
},
{
    type: "input",
    message: "What would you like other developers to contribute to the project?",
    name: "Project Contributions"
},
{
    type: "input",
    message: "Please add instructions on how to run the tests written in the project",
    name: "Project Test"
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
