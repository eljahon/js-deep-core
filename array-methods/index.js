class Array {
  constructor() {
    this.length = 0;
  }
// static methods 
  static [Symbol.hasInstance](instance) {
   return Array.isArray(instance)
  }
  static of(...values) {
    let res = [];
    for (let i = 0; i < values.length; i++) {
      res.push(values[i]);
    }
    return res;
  }
  static isArray(value) {
    return value instanceof Array;
  }
  static from(arrayLike) {
    let res = [];
    for (let i = 0; i < arrayLike.length; i++) {
      res.push(arrayLike[i]);
    }
    return res;
  }
  //  insteance methods 
  toString() {
  return `[${this.join(', ')}]`;
}
  forEach(callback) {
    for(let i=0; i<=this.length; i++) {
        callback(this[i], i, this)
    }
  }
  reduce(callback, initialValue) {
    let accumulator = initialValue;
    for(let i=0; i<this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
  }
  push(...values) {
    for (let i = 0; i < values.length; i++) {
      this[this.length] = values[i];
      this.length++;
    }
  }
  pop() { 
    let res = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return res;
  }

  shift() {
    let res = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return res;
  }

  unshift(...values) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + values.length] = this[i];
    }
    for (let i = 0; i < values.length; i++) {
      this[i] = values[i];
    }
    this.length += values.length;
  }
  map(callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(callback(this[i], i, this));
    }
    return res;
  }   
  filter(callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  }

  find(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  }
  concat(...values) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(this[i]);
    }
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        res.push(values[i][j]);
      }
    }
    return res;
  } 
  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  } 
 

  findIndex(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
  }
  includes(value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return true;
      }
    }
    return false;
  }
  indexOf(value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  }
  lastIndexOf(value) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  }
  join(separator) {
    let res = '';
    for (let i = 0; i < this.length; i++) {
      res += this[i];
      if (i !== this.length - 1) {
        res += separator;
      }
    }
    return res;
  }


  reverse() {
    let res = [];
    for (let i = this.length - 1; i >= 0; i--) {
      res.push(this[i]);
    }
    return res;
  }
  slice(start, end) {
    let res = [];
    for (let i = start; i < end; i++) {
      res.push(this[i]);
    }
    return res;
  }
  keys() {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(i);
    }
    return res;
  }

  flat(depth) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && depth > 0) {
        res = res.concat(this[i].flat(depth - 1));
      } else {
        res.push(this[i]);
      }
    }
    return res;
  }
  at(index) { 
    return this[index];
  }
  splice(start, deleteCount, ...items) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (i < start || i >= start + deleteCount) {
        res.push(this[i]);
      }
    }
    for (let i = 0; i < items.length; i++) {
      res.push(items[i]);
    }
    return res;
  }

}

const array = new Array();
array.push(1, 2, 3, 4, 5, [1,2,3]);
console.log(array.splice(1, 2, 6, 7, 8));
console.log(array);
