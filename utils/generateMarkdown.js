//var icon = "icon";

function renderTitleIcon(response) {
  if(response.title === "Manager") {
     icon = '&#xF4C8;'
  } else if (response.title === "Engineer") {
    icon = '&#xF6A5;'
  } else if (response.title === "Intern") {
    icon = '&#xF6FD;'
  } else {
    icon = " "
  }
  return icon
};
function generateHTML(response){
  console.log('generateHTML('+response+')');
  return generateHTMLBegining() +
    generateHTMLCards(response) +
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
    <link rel="stylesheet" href="./assets/style.css" />
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
function generateHTMLCards(response){
  return `
  <div class="card text-bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${response.teamMember} <span class="icon">${response.title} `+
     renderTitleIcon(response)+
     `</span> </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${response.id} </li>
        <li class="list-group-item">Email: ${response.email} </li>
        <li class="list-group-item">Github: ${response.github} </li>
      </ul>
    </div>
  </div>`;
}

function generateMarkdown(response) {
  return `
  <div class="card text-bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${response.teamMember} <span class="icon">${response.position} `
     renderTitleIcon(response)
     `;</span> </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${response.id} </li>
        <li class="list-group-item">Email: ${response.email} </li>
        <li class="list-group-item">Github: ${response.github} </li>
      </ul>
    </div>
  </div>`;
}

module.exports = {
  generateHTML,
};
