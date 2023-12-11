export const findImageByCategory = (inputArray, targetCategory) => {
  for (let i = 0; i < inputArray.length; i++) {
    const currentItem = inputArray[i];
    if (currentItem.categories.includes(targetCategory)) {
      return currentItem.image;
    }
  }
  return inputArray.at(-1)['image']; // Если не найдено изображение с указанной категорией
};
