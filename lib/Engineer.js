let Employee = require('./Employee.js');
class Engineer extends Employee {
    
    //properties
    //GitHub Username
    github;

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    //methods
    getRole(){
        return 'Engineer';
    }

    getGithub(){
        return this.github;
    }

    getGithubLink(){
        return "<a href='https://github.com/"+this.github+"'>"+this.github+"</a>";
    }

    getExtraStuff(){
        return ['Github', this.getGithubLink()];
    }

}
module.exports = Engineer;