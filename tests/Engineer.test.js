// this brings in the employee class

const Engineer = require('../lib/engineer.classes');

// this begins the test

describe('Engineer', () => {

    // this tests the getRole method

    describe('getRole', () => {
    it('should return employee role', () => {
            const role = 'Engineer'
            
            const newRole = new Engineer().getRole();
            expect(role).toEqual(newRole);
    });

    // this tests the getGithub method

    describe('getGithub', () => {
        it('should return employee GitHub', () => {
                const github = 'nftgoat';
                
                const newGithub = new Engineer('1', '2', '3', github).getGithub();
    
                expect(github).toEqual(newGithub);
        });
        }); 
    });})