import Calculator from "../Calculator";

let calc;
describe("Calculator testing", () => {
  beforeAll(() => {
    calc = new Calculator();
  });
  test("Addition", () => {
    expect(calc.add(1, 1)).toBe(2);
    expect(calc.add(10, 3)).not.toBe(1);
  });
  test("Subtraction", () => {
    expect(calc.subtract(10, 1)).toBe(9);
    expect(calc.subtract(10, 3)).not.toBe(5);
  });
  test.skip("Multiplication", () => {
    expect(calc.multiply(5, 10)).toBe(50);
    expect(calc.multiply(8, 3)).not.toBe(25);
  });
  test("Division", () => {
    expect(calc.divide(15, 3)).toBe(5);
    expect(calc.divide(20, 4)).not.toBe(4);
  });
  test.todo("Negative testing");
});
