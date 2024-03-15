const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the instalation process?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How to use it?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Under what license is this project distributed?',
        choices: [
           'Microsoft Public License',
           'MIT',
           'Mozilla Public License 2.0',
           'Open Software License 3.0',
           'PostgreSQL License',
           'SIL Open Font License 1.1',
           'University of Illinois/ Open Source License',
           'The Unlicense',
           'zLib License',
        ]   
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can I contribute code or improvements to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do I run the tests to ensure the project is working correctly?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'If you have any questions feel free to contact me:',
       
      },
    
      {
        type: 'input',
        name: 'github',
        message: 'GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
