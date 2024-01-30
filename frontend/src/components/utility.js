export function fakePriceGenerator(price, isRandom = true, discount = 70) {
  if (isRandom) {
      const randomPercentage = Math.floor(Math.random() * (90 - 50 + 1) + 50);

      const fakePrice = price - (price * randomPercentage) / 100;

      // Round the result to two decimal places
      return {
        fakePrice: fakePrice,
        discount: randomPercentage,
      };
  } else {
    const fakePrice = price - (price * discount) / 100;

    return {
        fakePrice: fakePrice,
        discount: discount
    }
  }
}
