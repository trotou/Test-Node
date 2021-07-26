import fetch from "node-fetch";

export const getApi = async (data) => {
  let resultList = [];

  const first = await fetch(`https://viacep.com.br/ws/${data.first}/json/`);
  const second = await fetch(`https://viacep.com.br/ws/${data.second}/json/`);
  const third = await fetch(`https://viacep.com.br/ws/${data.third}/json/`);
  const fourth = await fetch(`https://viacep.com.br/ws/${data.fourth}/json/`);
  const fifth = await fetch(`https://viacep.com.br/ws/${data.fifth}/json/`);

  const firstData = await first.json();
  const secondData = await second.json();
  const thirdData = await third.json();
  const fourthData = await fourth.json();
  const fifthData = await fifth.json();

  resultList.push(firstData, secondData, thirdData, fourthData, fifthData);

  return resultList;
};
