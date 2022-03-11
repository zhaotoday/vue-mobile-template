export const useProducts = () => {
  const getTotalPrice = (products) => {
    if (products.length) {
      return products
        .map(({ price, number }) => price * number)
        .reduce((prev, current) => prev + current);
    } else {
      return 0;
    }
  };

  return {
    getTotalPrice,
  };
};
