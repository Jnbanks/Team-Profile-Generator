const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it('sets fourth argument as office number', () => {
    expect(new Employee('Rolo',16,'rolo77@gmail.com', 4554745).officeNumber).toBe(4554745);
  });
  
  describe("getRole", () => {
    it("sets fourth agrument as officeNumber property", () => {
      const testNumber = 4554745;
      const newEmployee = new Employee('Rolo', 12, 'rolo77@gmail.com',testNumber);
      expect(new Employee('Rolo',16,'rolo77@gmail.com').testNumber).toBe(4554745);
    });
  });

  
});