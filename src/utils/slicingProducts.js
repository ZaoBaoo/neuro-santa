export const slicingProducts = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    // Проверка, что входной параметр является массивом и не пуст
    return { item: null, newProducts: [] };
  }

  // Создаем объект для хранения результатов
  const result = {
    item: arr[0],
    newProducts: arr.slice(1),
  };

  return result;
};
