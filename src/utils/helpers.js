export const formatPrice = (price) => {
  const newPrice = Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);

  return newPrice;
};

export const getUniqueValues = () => {};
