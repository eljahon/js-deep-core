function slice(begin, limit) {
  let len = this.length;
  let array = [];
  if ((begin > 0 && limit === null) || limit === undefined) {
    for (let i = begin; i < len; i++) {
      array.push(this[i]);
    }
    return array;
  } else if ((begin < 0 && limit === null) || limit === undefined) {
    for (let i = len - 1; i >= Math.abs(begin); i--) {
      array.unshift(this[i]);
    }
    return array;
  } else if (begin >= 0 && limit > 0) {
    for (let i = begin; i < begin + limit; i++) {
      array.push(this[i]);
    }
    return array;
  } else if (!begin && !limit) {
    return this;
  } else if (begin >= 0 && limit < 0) {
    let le = begin === 0 ? len - Math.abs(limit) - 1 : len - Math.abs(limit);
    for (let i = le; i >= begin; i--) {
      array.unshift(this[i]);
    }
    return array;
  }
}
let array = [1, 2, 3, 4];
// console.log(array.slice(1));
Array.prototype.slice = slice;
console.log(array.slice(0, -1));
// console.log(array.slice());
