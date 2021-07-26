import { Router } from "express";
import { postZip } from "../controllers/zip.controller.js";

const zipcode = Router();

zipcode.post("/", postZip);

export default zipcode;
