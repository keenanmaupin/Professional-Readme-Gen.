// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import colors from 'colors';
// TODO: Create an array of questions for user input
// These are ALL the questions that my user will be prompted with
const questions = ['JARVAS LINK connected, Goodmevening ...What would you like for your Title ?',
    , 'And the description of set Project?' ,'Are there going to be any Install Instrcutions that need to be executed?', 
    'Will I be including its Usage Information?', 'Are there any Contribution Guidelines I can add for you?', 
    'How will we be Testing set project: Instructions ?','And the will there be a License I can apply for you', 'Requesting GitHub: UserName','Email Address Please','']


// !add these questions last so we donr have to retype them out in the specific order
'What is your motivation for this project?', 'Why build it in the first place?',
 'What problem(s) does it solve?', 'What did you learn in the process?','What makes this project stand out from the rest?'









// TODO: Create a function to write README file
// here I have created a function that will dinamically generate a README.md file with user input and if there is an error it will tell the user that 
// an error wass thrown.
function writeToFile(README, data) {
    fs.writeFile(README.md, data, (err) => {
        if (err) {
            console.log(colors.red('Space Controle to Ground Control, we have an fatal ERROR!!'), err);
        } else {
            console.log(colors.green('README.md file has been created!'));
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
            {
                type: 'input',
                name: 'Q6',
                message: questions[5],
            },
           
            {
                type: 'list',
                name: 'Q7',
                message: questions[6],
                choices: ['Apache License 2.0','GNU v3.0', 'MIT', 'BSD 2-Clause "Simplified"',
                     'BSD 3-Clause "New" or "Revised"', 'Boost Software License 1.0', 
                     'Creative Commons Zero v1.0 Universal'],
            },
            {
                type: 'input',
                name: 'Q8',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'Q9',
                message: questions[8],
            },
           
        ])
        // here I have created a README template for my user inforomation to be added to
        
        .then((answers) => {
            const README = 
            
`# <${answers.Q1}>
# LICENSE
[![License](https://img.shields.io/badge/License-${answers.Q7}-blue.svg)](https://opensource.org/licenses/${answers.Q7})



# DESCRIPTION OF SET PROJECT
${answers.Q2}
#INSTALLATION
${answers.Q3}
#USAGE
${answers.Q4}
#CONSTRIBUTION GUIDELINES
${answers.Q5}
#TESTING
${answers.Q6}

-## USER STORY

-## Acceptance Criteria

-## QUESTIONS
${answers.Q8}
https://github.com/${answers.Q8}

-EmailAddress: ${answers.Q9}`

// !we need to add more optionns for the user t0 input IE 'Best way to reach them for more questions' as LIST



// here I needed to create function that would write the file and tell me if there was an ERROR in doing so
fs.writeFile('README.md', README, (err) => {
    if (err) {
    console.log(colors.red('Space Controle to Ground Control, we have an fatal ERROR!!'), err);
    } else {
    console.log(colors.green('We have lift off Ladies and Gents, ready for mission- "README"!'));
    }
    });
});
}

// Function call to initialize app


init();
