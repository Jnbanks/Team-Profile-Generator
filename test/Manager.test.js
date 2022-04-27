const Manager = require("../lib/Manager");


describe("Manager Class", () => {
  it('sets fourth argument as office number', () => {
    expect(new Manager('Rolo',16,'rolo77@gmail.com', 4554745).officeNumber).toBe(4554745);
  });
  
  describe("getOfficeNumber", () => {
    it("should set fourth agrument as officeNumber property", () => {
      const testNumber = 4554745;
      const newManager = new Manager('Rolo', 12, 'rolo77@gmail.com',testNumber);
      expect(newManager.getOfficeNumber()).toBe(testNumber);
    });
  });

  describe("getRole", () => {
    it("should have getRole() produce 'Manager'", () => {
      const testRole = 'Manager';
      const newManager = new Manager('Rolo', 12, 'rolo77@gmail.com');
      expect(newManager.getRole()).toBe(testRole);
    });
  });
  
});