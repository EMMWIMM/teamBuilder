const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager =require('./lib/Manager.js');
const util = require('util')

const fs = require('fs');
const inquirer = require('inquirer');
const markdowns = require('./src/generateMarkdown.js');
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
  message: 'what school are they attending?',
  name:'school',
  when: function (answers){
    return answers.title == 'Intern'
  }
},
{
  type: 'input',
  message: 'what is their office number?',
  name:'phone',
  when: function (answers){
    return answers.title == 'Manager'
  }
},
{
  type: 'input',
  message: 'what is their github username?',
  name:'github',
  when: function (answers){
    return answers.title == 'Engineer'
  }
},
{
  type: 'list',
  message: 'would you like to add another team member?',
  name: 'addAnother',
  choices: ['yes', 'no'],
  name: 'addOne'
}

];

var i = 0;
var team = [];
function mainInquirerLoop() {
  i++;
  inquirer
  .prompt(questions)
  .then((response) =>{

    const {teamMember, title, id, email, github} = response;
    let inqEmp;

    switch(response.title){
      case'Intern':
        let inqEmp = new Intern(response.teamMember, response.id, response.email, response.school);

        team.push(inqEmp);
        break;
      case 'Manager':
        team.push(new Manager(response.teamMember, response.id, response.email, response.phone));
        break;
      case 'Engineer':
        team.push(new Engineer(response.teamMember, response.id, response.email, response.github));
        break;
    }


    switch(response.addOne) {
      case 'no':

        const markdown = markdowns.generateHTML(team);

        fs.writeFile('./dist/index.html', markdown, (err) =>   err ? console.error(err) : console.log("1"+(markdown)));
        console.log('Bye');
        break;
      case 'yes':
          mainInquirerLoop();
        break
    }
  });
}
mainInquirerLoop();


// module.exports = index;
