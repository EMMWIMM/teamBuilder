
const fs = require('fs');
const inquirer = require('inquirer');
const markdowns = require('./utils/generateMarkdown.js');
var icon = "icon";


const questions = [{
  type: 'input',
  message: 'What is the name of this team member?',
  name: 'teamMember'
},
{
  type: 'list',
  message: 'what is the title of this team member?',
  choices: [ 'Manager', 'Engineer', 'Intern'],
  name: 'title'
},
{
  type: 'input',
  message: 'What is their employee ID?',
  name: 'id'
},
  {
  type: 'input',
  message: 'what is their email?',
  name: 'email'
},
{
  type: 'input',
  message: 'what is their github username?',
  name:'github'
},
{
  type: 'list',
  message: 'would you like to add another team member?',
  choices: ['yes', 'no'],
  name: 'addOne'
}

];

inquirer
.prompt(questions)
.then((response) =>{
  const {teamMember, title, id, email, github} = response
//
  const markdown= markdowns.generateMarkdown(response);
  markdowns.generateMarkdown(response);
fs.appendFile('index.html', markdown, (err) =>   err ? console.error(err) : console.log(markdown));

  console.log(markdown);

console.log(response);
});
