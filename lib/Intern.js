let Employee = require('./Employee.js');
class Intern extends Employee {
    //properties
    school;

    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    //methods
    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

    getExtraStuff(){
        return ['School', this.getSchool()];
    }
}
module.exports = Intern;