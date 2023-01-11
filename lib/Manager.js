let Employee = require('./Employee.js');
require('./Employee.js');
class Manager extends Employee {
    //properties
    officeNumber;

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //methods
    getRole(){
        return 'Employee';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getExtraStuff(){
        return ['Office Number', this.getOfficeNumber()];
    }
}
module.exports = Manager;