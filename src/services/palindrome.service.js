export const generatePalindrome = function (initial, limit) {
  let palindromes = [];

  for (let i = initial; i <= limit; i++) {
    if ((i + "").split("").reverse().join("") === i + "") {
      palindromes.push(i);
    }
  }
  return palindromes;
};
