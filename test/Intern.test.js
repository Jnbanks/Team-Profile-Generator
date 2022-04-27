const Intern = require("../lib/Intern");


describe("Intern Class", () => {
  it('sets fourth argument as school', () => {
    expect(new Intern('Rolo',16,'rolo77@gmail.com', 'escuela').school).toBe('escuela');
  });
  
  describe("getSchool", () => {
    it("should set fourth agrument as school property", () => {
      const testSchool = 'escuela';
      const newIntern = new Intern('Rolo', 12, 'rolo77@gmail.com',testSchool);
      expect(newIntern.getSchool()).toBe(testSchool);
    });
  });

  describe("getRole", () => {
    it("should have getRole() produce 'Intern'", () => {
      const testRole = 'Intern';
      const newIntern = new Intern('Rolo', 12, 'rolo77@gmail.com');
      expect(newIntern.getRole()).toBe(testRole);
    });
  });
  
});

