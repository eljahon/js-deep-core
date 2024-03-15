function every(callback) {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}
let arra = [1, 2, 3, 4];
Array.prototype.every = every;
console.log(arra.every((el) => el > 3));
