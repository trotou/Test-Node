import { Router } from "express";
import { postChange } from "../controllers/change.controller.js";

const change = Router();

change.post("/", postChange);

export default change;
