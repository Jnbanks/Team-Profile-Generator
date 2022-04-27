const Engineer = require("../lib/Engineer");


describe("Engineer Class", () => {
  it('sets fourth argument as github', () => {
    expect(new Engineer('Rolo',16,'rolo77@gmail.com', 'mygithub').github).toBe('mygithub');
  });
  
  describe("getGithub", () => {
    it("should set fourth agrument as Github property", () => {
      const testGithub = 'mygithub';
      const newEngineer = new Engineer('Rolo', 12, 'rolo77@gmail.com',testGithub);
      expect(newEngineer.getGithub()).toBe(testGithub);
    });
  });

  describe("getRole", () => {
    it("should have getRole() produce 'Engineer'", () => {
      const testRole = 'Engineer';
      const newEngineer = new Engineer('Rolo', 12, 'rolo77@gmail.com');
      expect(newEngineer.getRole()).toBe(testRole);
    });
  });
  
});
