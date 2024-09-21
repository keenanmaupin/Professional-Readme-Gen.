// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = ['What is your motivation for this project?', 'Why build it?',
 'What problem does it solve?', 'what did you learn?','What makes this projectstand out?'];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README.md, data, (err) => {
        if (err) {
            console.log('What the stuff??, we got an error!', err);
        } else {
            console.log('README.md file has been created!');
        }
    });
} 

// TODO: Create a function to initialize app
// Initialize the app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Q1',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'Q2',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'Q3',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'Q4',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'Q5',
                message: questions[4],
            },
        ])
        
        .then((answers) => {
            const README = 
            
`# <Your-Project-Title>


-## USER STORY

=As a <USER_ROLE>,
--I want to <USER_STORY>,
--so that <BENEFIT>.

-## Acceptance Criteria

- [ ] <FIRST_CRITERIA>
- [ ] <SECOND_CRITERIA>

-## Development

- [ ] <FIRST_STEP>
- [ ] <SECOND_STEP>

-## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

=${answers.Q1}

=${answers.Q2}

=${answers.Q3}

=${answers.Q4}

=${answers.Q5}

-##Problems/ Problems solved

-## Table of Contents (Optional)


- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)`;

fs.writeFile('README.md', README, (err) => {
    if (err) {
    console.log('An error occurred while writing README file:', err);
    } else {
    console.log('README.md has been created!');
    }
    });
});
}

// Function call to initialize app


init();
