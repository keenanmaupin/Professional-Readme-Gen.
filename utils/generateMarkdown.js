// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return  `![License](https://img.shields.io/badge/license-${license}-green)`;
  }else if (license === 'Apache License 2.0') {
    return  `![License](https://img.shields.io/badge/license-${license}-green)`;
  } else if (license === 'ISC') {
    return  `![License](https://img.shields.io/badge/license-${license}-green)`;
  } else if (license === '[NONE]') {
    return '[NONE]';
  }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return  `![license](https://opensource.org/licenses/${license}`;
  }else if (license === 'Apache License 2.0') {
    return  `![license](https://opensource.org/licenses/${license}`;
  } else if (license === 'ISC') {
    return  `![license](https://opensource.org/licenses/${license}`;
  } else if (license === '[NONE]') {
    return '[NONE]';
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return  `This project is licensed under the MIT License.`;
  } else if (license === 'Apache License 2.0') {
    return  `This project is licensed under the Apache License 2.0.`;
  } else if (license === 'ISC') {
    return  `This project is licensed under the ISC License.`;
  } else if (license === '[NONE]') {
    return '[NONE]';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `- TITLE:
- 👑${answers.Q1}

- ${answers.Q11}🪙💸

- ${renderLicenseBadge(answers.Q7)}

- 🧭 Table of Contents 🧭 

- [License](#license)

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Contributions](#contributions)

- [Testing](#testing)

- [User Story](#user-story)

- [Acceptance Criteria](#acceptance-criteria)

- [Questions](#questions)



-------------------------------------------------------
## License
- ${renderLicenseSection(answers.Q7)}
## Description

🪝[Quick-Referance-I.D.] 
- <${answers.Q2}>

🪝[In-Depth-I.D.] 
- <${answers.Q14}>
- <${answers.Q15}>
- <${answers.Q16}>
- <${answers.Q17}> 
- <${answers.Q18}>

-------------------------------------------------------
## Installation
- ${answers.Q3}
## Usage
- ${answers.Q4}
## Contributions
- ${answers.Q5}
-------------------------------------------------------
## User Story
- 🕯️<${answers.Q12}>

## Acceptance Criteria
- 🕯️<${answers.Q13}>
-------------------------------------------------------

## Testing
- 🧪<${answers.Q6}>

## Questions
- 🖍️[GitHub]:<${answers.Q8}> 


https://github.com/${answers.Q8}

- [EmailAddress]:<${answers.Q9}>🍄
- [LinkedIn]:<${answers.Q10}>🪨
- [Best.way.to.get.ahold.of.me.for.further.Question(s):]<${answers.Q11}>🪵

---

[![DungeonsAndDragons](https://cdn3.emoji.gg/emojis/2932-dungeonsanddragons.gif)](https://emoji.gg/emoji/2932-dungeonsanddragons)
© 2024 JARVIIS LLC. Confidential and Proprietary. All Rights Reserved. Roll for Success🧙🏾‍♂️.`


}

export default generateMarkdown;
