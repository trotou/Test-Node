import { Router } from "express";
import { postCar } from "../controllers/cars.controller.js";
import { postMoto } from "../controllers/moto.controller.js";

const vehicle = Router();

vehicle.post("/moto", postMoto);
vehicle.post("/cars", postCar);

export default vehicle;
