
const fs = require('fs');
const inquirer = require('inquirer');
const markdowns = require('./utils/generateMarkdown.js');


const questions = [
  {
    type: 'list',
    message: 'what is the position of this team member?',
    choices: [ 'Manager', 'Engineer', 'Intern', 'no license'],
    name: 'position'
  },{
  type: 'input',
  message: 'What is the name of this team member?',
  name: 'teamMember'
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
  const {github, email, title, description, install, usage, contribution, tests, license} = response

  const markdown= markdowns.generateMarkdown(response);
  markdowns.generateMarkdown(response);
fs.writeFile( response.title +'README.md', markdown, (err) =>   err ? console.error(err) : console.log(markdown));

  console.log(markdown);


});
