export const convertEuToDenar = (euroPrice) => {
  const denarMultiplier = 61.6466;
  const price = Math.round(euroPrice * denarMultiplier).toFixed(2);
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}