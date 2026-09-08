const myFunctions = require("./function.js"); // export the function.js file

// div tests

test("two pos ints", () => {
  expect(myFunctions.div(12, 3)).toBe(4);
});

test("dividing by 0", () => {
  expect(myFunctions.div(0, 5)).toBe(0);
});

test("negative number", () => {
  expect(myFunctions.div(-10, 2)).toBe(-5);
});

// containsNumbers tests

test("string has a number", () => {
  expect(myFunctions.containsNumbers("hello7")).toBe(true);
});

test("string has no numbers", () => {
  expect(myFunctions.containsNumbers("hello")).toBe(false);
});

test("only spaces string", () => {
  expect(myFunctions.containsNumbers("   ")).toBe(false);
});

test("empty string", () => {
    expect(myFunctions.containsNumbers("")).toBe(false);
});