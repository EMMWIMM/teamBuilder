var icon = "icon";

function renderTitleIcon(response) {
  if(response.title === "Manager") {
     link = '&#xF4C8;'
  } else if (response.title === "Engineer") {
    link = '&#xF6A5;'
  } else if (response.title === "Intern") {
    link = '&#xF6FD;'
  } else {
    link = " "
  }
  return icon
};

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
  </div>`}
module.exports = {
  generateMarkdown,
};
