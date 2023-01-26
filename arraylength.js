export const arrayLength = (arr1) => {
  let counter = 0;
  while (arr1[counter] !== undefined) {
    counter++;
  }

  return counter;
};
