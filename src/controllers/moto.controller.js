import { write } from "../services/writedoc.service.js";
import { createMoto } from "../services/createvehicle.service.js";

export function postMoto(req, res) {
  const resultList = createMoto(
    req.body.modelo,
    req.body.ano,
    req.body.marca,
    req.body.passageiros
  );

  write(resultList);

  res.status(201).json({
    data: resultList,
  });
}
