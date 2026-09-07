export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1, str.length);
}

export function reverseStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
}

export function Calculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
}

export function caesarCipher(str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  alphabet += alphabet.toUpperCase();
  shift = shift % 26;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!alphabet.includes(str[i])) result += str[i];
    else result += alphabet[alphabet.indexOf(str[i]) + shift];
  }
  return result;
}

export function analyzeArray(array) {
  let total = 0,
    min = array[0] || 0,
    max = array[0] || 0;
  array.forEach((n) => {
    total += n;
    if (n < min) min = n;
    if (n > max) max = n;
  });
  return { average: total / array.length || 0, min, max, length: array.length };
}
