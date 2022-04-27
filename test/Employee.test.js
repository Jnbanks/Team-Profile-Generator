const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});


// const Employee = require('../lib/Employee');

// describe('Employee Class', () => {
//     it('sets first agrument as name property', () => {
//       expect(new Employee('Rolo',16,'rolo77@gmail.com').name).toBe('Rolo');
//     });
  
//     it('sets second argument as id property', () => {
//       expect(new Employee('Rolo',16,'rolo77@gmail.com').id).toBe(16);
//     });
  
//     it('sets third argument as email property', () => {
//       expect(new Employee('Rolo',16,'rolo77@gmail.com').email).toBe('rolo77@gmail.com');
//     });

//     describe("getName", () => {
//         it("should add name via getName()", () => {
//           const testName = 'Rolo';
//           const newEmployee = new Employee(testName);
//           expect(newEmployee.getName()).toBe(testName);
//         });
//       });
  
//     describe("getId", () => {
//         it("should add id via getId()", () => {
//           const testId = 12;
//           const newEmployee = new Employee('Rolo', testId);
//           expect(newEmployee.getId()).toBe(testId);
//         });
//       });  

//     describe("getEmail", () => {
//         it("should add email via getEmail()", () => {
//           const testEmail = 'rolo77@gmail.com';
//           const newEmployee = new Employee('Rolo', 12, testEmail);
//           expect(newEmployee.getEmail()).toBe(testEmail);
//         });
//       });

//     describe("getRole", () => {
//         it("should have getRole() produce 'Employee'", () => {
//           const testRole = 'Employee';
//           const newEmployee = new Employee('Rolo', 12, 'rolo77@gmail.com');
//           expect(newEmployee.getRole()).toBe(testRole);
//         });
//       });
//   });
  
