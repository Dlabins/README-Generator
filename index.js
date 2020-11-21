// Import Inquirer
const inquirer = require("inquirer")
// Import fs
const fs = require("fs")
// Import util 
const util = require("util")
// Import generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [{
    type: "input",
    message: "What would you like to name your project?",
    name: "title"
},
{
    type: "input",
    message: "Briefly describe your project",
    name: "description"  
},
{
    type: "input",
    message: "What would you like to include in the Table of Contents",
    name: "table of Contents"
},
{
    type: "input",
    message: "What are the steps required to install this project?",
    name: "installation"
},
{
    type: "input",
    message: "Add instructions for how the project is used and provide an example of the project in use",
    name: "usage"
},
{
    type: "list",
    message: "Which license will be used for this project?",
    choices: ["MIT", "GNU", "Apache", "Mozilla"],
    name: "license"
},
{
    type: "input",
    message: "What would you like other developers to contribute to the project?",
    name: "contributions"
},
{
    type: "input",
    message: "Please add instructions on how to run the tests written in the project",
    name: "test"
},
{
    type: "input",
    message: "Please enter your Github username!",
    name: "questionsGithub"
},
{
    type: "input",
    message: "Please enter your email address!",
    name: "questionsEmail"
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            return console.log("Error!")
        }
        else {
            console.log("Congrats! The README has been created")
        };
    });

}
// function to initialize program
function init() {
    inquirer.prompt(questions).then ((data) =>{
        const generate = generateMarkdown(data)
        writeToFile("NodeREADME.md", generate);
    })
}

// function call to initialize program
init();
