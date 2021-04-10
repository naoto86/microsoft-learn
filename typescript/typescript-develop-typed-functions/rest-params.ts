const addAllNumbers = (firstNumber: number, ...restOfNumbers: numbers[]) => {
  let total: number = firstNumber;
  restOfNumbers.map((num) => {
    if (!isNaN(num)) {
      total = total + num;
    }
  });
  return total;
};
