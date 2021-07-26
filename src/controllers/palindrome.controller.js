import { generatePalindrome } from "../services/palindrome.service.js";

export function postPalindrome(req, res) {
  const resultList = generatePalindrome(req.body.initial, req.body.limit);

  res.status(201).json({
    data: resultList,
  });
}
