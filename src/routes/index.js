import { Router } from "express";
import vehicle from "./vehicle.route.js";
import palindrome from "./palindrome.route.js";
import change from "./change.route.js";
import zipcode from "./zipcode.route.js";

const router = Router();

router.use("/vehicle", vehicle);
router.use("/palindromes", palindrome);
router.use("/change", change);
router.use("/zipcode", zipcode);

export default router;
