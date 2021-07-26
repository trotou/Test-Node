import { getApi } from "../services/getapi.service";
import { giveChange } from "../services/change.service";
import { generatePalindrome } from "../services/palindrome.service";
import { allZipValid, locations1, locations2, oneZipValid } from "./locations";
import { Carro } from "../services/vehicle.service";
import { Moto } from "../services/vehicle.service";

test("Gerar palindromo", () => {
  const result1 = generatePalindrome(1, 50);
  const result2 = generatePalindrome(40, 90);
  const result3 = generatePalindrome(50, 1);

  expect(result1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44]);
  expect(result2).toEqual([44, 55, 66, 77, 88]);
  expect(result3).toEqual([]);
});

test("Gerar troco", () => {
  const result1 = giveChange(200, 90);
  const result2 = giveChange(117, 10);

  expect(result1).toEqual({
    bills: { hundred: 1, one: 0, ten: 1 },
    payment: 200,
    price: 90,
    sum: 2,
  });
  expect(result2).toEqual({
    bills: { hundred: 1, one: 7, ten: 0 },
    payment: 117,
    price: 10,
    sum: 8,
  });
});

test("Pegar dados da API", async () => {
  const result1 = await getApi(oneZipValid);
  const result2 = await getApi(allZipValid);

  expect(result1).toEqual(locations1);
  expect(result2).toEqual(locations2);
}, 15000);

test("Criar veículos", () => {
  const result1 = new Carro("fusca preto", "2007", 2, "ferrari");
  const result2 = new Moto("motoca", "2009", "suzuki", 2);

  expect(result1).toEqual({
    modelo: "fusca preto",
    ano: "2007",
    marca: "ferrari",
    portas: 2,
  });
  expect(result2).toEqual({
    ano: "2009",
    marca: "suzuki",
    modelo: "motoca",
    passageiros: 2,
    rodas: 2,
  });
});
