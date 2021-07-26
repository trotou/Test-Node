import { getApi } from "../services/getapi.service.js";

export function postZip(req, res) {
  const fetchData = async () => {
    const resultList = await getApi(req.body);

    return res.status(201).json({
      resultList,
    });
  };

  fetchData();
}
