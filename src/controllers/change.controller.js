import { giveChange } from "../services/change.service.js";

export function postChange(req, res) {
  const resultList = giveChange(req.body.payment, req.body.price);

  res.status(201).json({
    data: resultList,
  });
}
