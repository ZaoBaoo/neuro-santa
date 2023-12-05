export const transformNumberToString = (value) => {
  const multipliedValue = Math.round(value * 100);
  return multipliedValue.toString();
};
