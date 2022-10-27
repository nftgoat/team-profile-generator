const Employee = require('../lib/employee.classes');

// Begins testing.
describe('Employee', () => {
    // Test constructor method.
    describe('constructor', () => {
        it('should return an object with three values when called with new keyword', () => {
            const obj = new Employee();
            
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it('should set name, id, and email when created', () => {
            const name = 'Justin';
            const id = '123';
            const email = 'justinross28@gmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });
    // Test getName method.
    describe('getName', () => {
        it('should return employee name', () => {
            const name = 'Justin';

            const newName = new Employee(name, '123', 'justinross28@gmail.com').getName();

            expect(name).toEqual(newName);
        });
    });
    // Test getId method.
    describe('getId', () => {
        it('should return an employee id', () => {
            const id ='123';

            const newId = new Employee('Justin', id, 'justinross28@gmail.com').getId();

            expect(id).toEqual(newId);
        });
    });
    // Test getEmail method.
    describe('getEmail', () => {
        it('should return an employee email', () => {
            const email ='justinross28@gmail.com';

            const newEmail = new Employee('Justin', '123', email).getEmail();

            expect(email).toEqual(newEmail);
        });
    });
    // Test getRole method.
    describe('getRole', () => {
        it('should return an employee role', () => {
            const role ='Employee';

            const newRole = new Employee('Justin', '123', 'justinross28@gmail.com').getRole();

            expect(role).toEqual(newRole);
        });
    });
})