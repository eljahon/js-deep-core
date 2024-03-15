function fill(value, startIndex = 0, endIndex = this.length) {
  for (let index = startIndex; index <= endIndex; index += 1) {
    this[index] = value;
  }

  return this;
}
let arra = [1, 2, 3];
Array.prototype.fill = fill;
console.log(arra.fill(2, 1, 3));
