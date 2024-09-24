// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import colors from 'colors';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
// These are ALL the questions that my user will be prompted with
const questions = ['JARVIIS LINK connected , Good-Evening ...What would you like for your TITLE ?',
     'Short-Hand Description of set Project ?','Are there going to be any Install Instrcutions ::If-Not [N/A] for Future Aid:: Follow PREVIOUSE COMMAND for Incoming QUESTIONS ?', 
    'Will I be including its Usage Information ?', 'Are there any Contribution Guidelines I can add for you ?', 
    'How will we be Testing set project: Instructions ?','And will there be a License I can apply for you',
     'Requesting GitHub: UserName','Email Address: Please ','Would you like me to provide a LinkedIn account ?',
     'How best to contact you for future Question(s)?','USER STORY ?','ACCEPTANCE CRITERIA ?',
    'What is your Motivation for this project ?', 'Why Build it in the first place ?',
    'What Problem(s) does it solve ?', 'What did we Learn in the Process? ','What makes this project Stand Out from the rest ?'];



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
                choices: ['MIT','ISC','Apache License 2.0','[NONE]'],
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
            {
                type: 'input',
                name: 'Q10',
                message: questions[9],
                
            },
            {
                type: 'list',
                name: 'Q11',
                message: questions[10],
                choices: ['Email', 'GibHub', 'linkedIn'],
            },
            {
                type: 'input',
                name: 'Q12',
                message: questions[11],
            },
            {
                type: 'input',
                name: 'Q13',
                message: questions[12],
            },
            {
                type: 'input',
                name: 'Q14',
                message: questions[13],
            },
            {
                type: 'input',
                name: 'Q15',
                message: questions[14],
            },
            {
                type: 'input',
                name: 'Q16',
                message: questions[15],
            },
            {
                type: 'input',
                name: 'Q17',
                message: questions[16],
            },
            {
                type: 'input',
                name: 'Q18',
                message: questions[17],
            },
        // here I have created a README template for my user inforomation to be added to
        
    ]).then((answers) => {
const README = generateMarkdown(answers)
// here I needed to create function that would write the file and tell me if there was an ERROR in doing so
fs.writeFile('README.md', README, (err) => {
    if (err) {
    console.log(colors.red('Space Controle to Ground Control, we have an fatal ERROR!!'), err);
    } else {
    console.log(colors.green('We have lift off Ladies and GentalMan, Clear!-Clear!, READY For Mission-"README"!'));
    }
    });
});
}

// Function call to initialize app


init();
