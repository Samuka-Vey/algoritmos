function buscaBinaria(arr, target, min = 0, max = arr.length - 1) {
  if (min > max) {
    return -1; // Elemento não encontrado
  }

  let guess; // média de min e max
  let count = 0;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    count++;

    if (arr[guess] === target) {
      return { index: guess, count: count };
    } else if (arr[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return { index: -1, count }; // caso elemento não seja encontrado
}

console.log(buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // { index: 4, count: 1 }
