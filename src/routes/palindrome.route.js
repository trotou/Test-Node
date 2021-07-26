import { Router } from "express";
import { postPalindrome } from "../controllers/palindrome.controller.js";

const palindrome = Router();

palindrome.post("/", postPalindrome);

export default palindrome;
