// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = ['What is your motivation for this project?', 'Why build it in the first place?',
 'What problem(s) does it solve?', 'What did you learn in the process?','What makes this project stand out from the rest?'];

// TODO: Create a function to write README file
// here I have created a function that will dinamically generate a README.md file with user input and if there is an error it will tell the user that 
// an error wass thrown.
function writeToFile(README, data) {
    fs.writeFile(README.md, data, (err) => {
        if (err) {
            console.log('Space Controle to Ground Control, we have an fatal ERROR!!', err);
        } else {
            console.log('README.md file has been created!');
        }
    });
} 

// TODO: Create a function to initialize app
// Initialize the app
// These are the questions I want my user to be addrssedd with to add to the README template
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
        // here I have created a README template for my user inforomation to be added to
        
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
// here I needed to create function that would write the file and tell me if there was an ERROR in doing so
fs.writeFile('README.md', README, (err) => {
    if (err) {
    console.log('Space Controle to Ground Control, we have an fatal ERROR!!', err);
    } else {
    console.log('We have lift off Ladies and Gents, ready for mission- "README"!');
    }
    });
});
}

// Function call to initialize app


init();
