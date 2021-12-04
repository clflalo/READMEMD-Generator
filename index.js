// packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs= require("fs");


// Array of questions
const questions = () => {
    return inquirer.prompt([
     {
         type: "input",
         name: "projectTitle",
         message: "What is the project title?"
     },
     {
         type: "input",
         name: "description",
         message: "Give a brief description of the project."
     },
     {
        type: "input",
        name: "purposeInfo",
        message: "What is the purpose of this project? " 
     },
     
     {
         type: "confirm",
         name:"confirmLicense",
         message:"Would you like to license your software?"
     },
     {
         type: "list",
         name: "license",
         message: "Choose the license that you would like to attach to your project.",
         choices: ["MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU GPL V3" ]
     },
    {
         type: "input",
         name:"contributers",
         message:"Who all contributed on this project?"
     },
     {
         type: "input",
         name: "email",
         message: "Please enter your email."
     },
     {
         type: "input",
         name: "username",
         message: "Please enter your Github UserName."
     },
     {
         type: "input",
         name: "repo",
         message: "Please paste a URL to your Github main page."
     },

 ])
};
// Function that writes README file
function writeToFile(data) {
    fs.writeFile('exampleREADME.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
    );
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((data) => writeToFile(data))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
