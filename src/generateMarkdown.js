//var icon = "icon";
const Employee = require('../lib/Employee.js');

function renderTitleIcon(title) {
  if(title === "Manager") {
     icon = '&#xF4C8;'
  } else if (title === "Engineer") {
    icon = '&#xF6A5;'
  } else if (title === "Intern") {
    icon = '&#xF6FD;'
  } else {
    icon = " "
  }
  return icon
};
function generateHTML(team){

  return generateHTMLBegining() +
    generateHTMLCards(team) +
    generateHTMLEnding();
}
function generateHTMLBegining(){
  return `<!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../assets/style.css" />
    <title>Team Builder</title>
  </head>

  <body>
      <header class="jumbotron">
        <h1 class="display-3">My Team</h1>
      </header>
      <div class="container">`;
}
function generateHTMLEnding(){
  return `</body>`;
}
function generateHTMLCards(team){
  var resultsString;
  team.forEach((emp, i) => {
    resultsString+= generateHTMLCard(emp);
  });
  return resultsString;
}
function generateHTMLCard(employee){

  return `
  <div class="card text-bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${employee.getName()} <span class="icon">${employee.getRole()} `+
     renderTitleIcon(employee.role)+
     `</span> </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()} </li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </li>
        <li class="list-group-item">${employee.getExtraStuff()[0]}: ${employee.getExtraStuff()[1]} </li>
      </ul>
    </div>
  </div>`;
}

module.exports = {
  generateHTML

};
