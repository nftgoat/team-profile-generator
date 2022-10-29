//engineer is a class of employee
const Employee = require('./Employee.classes')

//subclass of employee

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

        getGithub() {
             return this.github;
    }    

        getRole() {
             return "Engineer";
    }
}

module.exports = Engineer;