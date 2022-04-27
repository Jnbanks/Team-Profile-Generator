const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    it('sets first agrument as name property', () => {
      expect(new Employee('Rolo',16,'rolo77@gmail.com').name).toBe('Rolo');
    });
  
    it('sets second argument as id property', () => {
      expect(new Employee('Rolo',16,'rolo77@gmail.com').id).toBe(16);
    });
  
    it('sets third argument as email property', () => {
      expect(new Employee('Rolo',16,'rolo77@gmail.com').email).toBe('rolo77@gmail.com');
    });

    describe("getName", () => {
        it("should add name via getName()", () => {
          const testName = 'Rolo';
          const newEmployee = new Employee(testName);
          expect(newEmployee.getName()).toBe(testName);
        });
      });
  
    describe("getId", () => {
        it("should add id via getId()", () => {
          const testId = 12;
          const newEmployee = new Employee('Rolo', testId);
          expect(newEmployee.getId()).toBe(testId);
        });
      });  

    describe("getEmail", () => {
        it("should add email via getEmail()", () => {
          const testEmail = 'rolo77@gmail.com';
          const newEmployee = new Employee('Rolo', 12, testEmail);
          expect(newEmployee.getEmail()).toBe(testEmail);
        });
      });

    describe("getRole", () => {
        it("should have getRole() produce 'Employee'", () => {
          const testRole = 'Employee';
          const newEmployee = new Employee('Rolo', 12, 'rolo77@gmail.com');
          expect(newEmployee.getRole()).toBe(testRole);
        });
      });
  });
  
