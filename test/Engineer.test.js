const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});


// const Engineer = require("../lib/Engineer");


// describe("Engineer Class", () => {
//   it('sets fourth argument as github', () => {
//     expect(new Engineer('Rolo',16,'rolo77@gmail.com', 'mygithub').github).toBe('mygithub');
//   });
  
//   describe("getGithub", () => {
//     it("should set fourth agrument as Github property", () => {
//       const testGithub = 'mygithub';
//       const newEngineer = new Engineer('Rolo', 12, 'rolo77@gmail.com',testGithub);
//       expect(newEngineer.getGithub()).toBe(testGithub);
//     });
//   });

//   describe("getRole", () => {
//     it("should have getRole() produce 'Engineer'", () => {
//       const testRole = 'Engineer';
//       const newEngineer = new Engineer('Rolo', 12, 'rolo77@gmail.com');
//       expect(newEngineer.getRole()).toBe(testRole);
//     });
//   });
  
// });
