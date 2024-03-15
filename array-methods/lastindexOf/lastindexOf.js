function lastindexOf(n) {
  let len = this.length;
  for (let i = len; i > 0; i--) {
    if (this[i] === n) {
      return i + 1;
    }
  }
  return -1;
}
let array = [1, 2, 3];
Array.prototype.lastIndexOf = lastindexOf;
console.log(array.lastIndexOf(3));
