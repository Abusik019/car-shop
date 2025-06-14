export const formatBigInt = (price: string | number) => {
  return new Intl.NumberFormat('ru-RU').format(Number(price));
}