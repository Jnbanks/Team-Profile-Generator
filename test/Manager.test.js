const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});


// const Manager = require("../lib/Manager");


// describe("Manager Class", () => {
//   it('sets fourth argument as office number', () => {
//     expect(new Manager('Rolo',16,'rolo77@gmail.com', 4554745).officeNumber).toBe(4554745);
//   });
  
//   describe("getOfficeNumber", () => {
//     it("should set fourth agrument as officeNumber property", () => {
//       const testNumber = 4554745;
//       const newManager = new Manager('Rolo', 12, 'rolo77@gmail.com',testNumber);
//       expect(newManager.getOfficeNumber()).toBe(testNumber);
//     });
//   });

//   describe("getRole", () => {
//     it("should have getRole() produce 'Manager'", () => {
//       const testRole = 'Manager';
//       const newManager = new Manager('Rolo', 12, 'rolo77@gmail.com');
//       expect(newManager.getRole()).toBe(testRole);
//     });
//   });
  
// });