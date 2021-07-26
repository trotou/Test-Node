export const giveChange = (payment, price) => {
  let totalChange = payment - price;
  let change = { one: 0, ten: 0, hundred: 0 };

  while (totalChange >= 1) {
    if (totalChange < 10) {
      change.one = totalChange;
      totalChange = 0;
    }
    if (totalChange >= 100) {
      totalChange -= 100;
      change.hundred++;
      continue;
    }
    if (totalChange >= 10) {
      totalChange -= 10;
      change.ten++;
      continue;
    }
  }

  let billsSum = Object.values(change).reduce((a, b) => a + b);

  return { bills: change, price: price, payment: payment, sum: billsSum };
};
