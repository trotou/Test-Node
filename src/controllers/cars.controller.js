import { write } from "../services/writedoc.service.js";
import { createCar } from "../services/createvehicle.service.js";

export function postCar(req, res) {
  const resultList = createCar(
    req.body.modelo,
    req.body.ano,
    req.body.portas,
    req.body.marca
  );

  write(resultList);

  res.status(201).json({
    data: resultList,
  });
}
