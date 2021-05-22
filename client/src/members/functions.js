// Kenzie
export const quadratic = (a, b, c) => {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `The roots of quadratic equation are ${root1} and ${root2}`;
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    return `The roots of quadratic equation are ${root1} and ${root2}`;
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
  }
};

// Pedro
export const pythagorean = (x, y) => {
  let output;
  output = x * x + y * y;
  output = Math.sqrt(output);
  return output;
};

// Anthony
export const cube = (x) => {
  return x * x * x;
};

// Cherry
export const multiplication = (x, y) => {
  return x * y;
};

// Naweid
export const add = (x, y) => {
  return x + y;
};

// Team function
export const bubbleSort = (arr) => {
  arr = arr.split(",");
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
