import { readFile, writeFile } from "fs";
import * as path from "path";

const doc = path.join(path.resolve(path.dirname("")), "src", "db.json");

export const write = (list) => {
  readFile(doc, function (err, data) {
    let obj = JSON.parse(data);
    obj.push(list);
    let vehicles = JSON.stringify(obj);

    writeFile(doc, vehicles, function (err) {
      if (err) return console.log(err);
    });
  });
};
