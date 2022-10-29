//manager is a class of employee
const Employee = require('./Employee.classes')

//subclass of employee

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
        getOfficeNumber() {
             return this.officeNumber;
    }    

        getRole() {
             return "Manager";
    }
}

module.exports = Manager;