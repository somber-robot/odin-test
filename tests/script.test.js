import {
  capitalize,
  reverseStr,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "../src/script.js";

test("capitalize", () => {
  expect(capitalize("apple")).toBe("Apple");
  expect(capitalize("banana")).toBe("Banana");
});

test("reverse string", () => {
  expect(reverseStr("")).toBe("");
  expect(reverseStr("abba")).toBe("abba");
  expect(reverseStr("abcd")).toBe("dcba");
});

test("calculator", () => {
  const calculator = Calculator();

  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 2)).toBe(4);

  expect(calculator.subtract(10, 5)).toBe(5);
  expect(calculator.subtract(5, 10)).toBe(-5);

  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.divide(5, 10)).toBeCloseTo(0.5);
  expect(calculator.divide(7, 0)).toBe(Infinity);

  expect(calculator.multiply(3, 3)).toBe(9);
  expect(calculator.multiply(4, 0)).toBe(0);
  expect(calculator.multiply(8, -2)).toBe(-16);
  expect(calculator.multiply(-8, -2)).toBe(16);
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });

  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });

  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
