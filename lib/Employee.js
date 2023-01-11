class Employee {

  //properties: 
  name;
  id;
  email;

  //constructor
  constructor(name, id, email){
	  this.name = name;
	  this.id = id;
	  this.email = email;
  }

  //methods
  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
	  //Returns 'Employee'
    return 'Employee';
  } 

  getExtraStuff(){
    return;
  }
}
module.exports = Employee;