function concat(...values) {
  const result = [...this];
  const { length } = values;
  for (let index = 0; index < length; index++) {
    const value = values[index];
    if (Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }

  return result;
}
let a = [1, 2, 3];
let b = [4, 5, 6];
Array.prototype.concat = concat;
console.log(a.concat(b));
