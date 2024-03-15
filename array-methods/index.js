class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(elemnt) {
    this.data[this.length] = elemnt;
    this.length++;
    return Object.values(this.data);
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return Object.values(this.data);
  }
  map(callback) {
    let newarray = {};
    for (let i = 0; i < this.length; i++) {
      let count = callback(this.data[i], i, Object.values(this.data));
      newarray[i] = count;
    }
    return Object.values(newarray);
  }
  filter(callback) {
    let newarray = {};
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, Object.values(this.data))) {
        newarray[i] = this.data[i];
      }
    }
    return Object.values(newarray);
  }
  forEach(callback) {
    let newarray = {};
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i, Object.values(this.data));
    }
  }
  find(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, Object.values(this.data)) > 0) {
        return this.data[i];
      }
    }
    return Object.values(newarray);
  }
  sort(callback) {
    const array = Object.values(this.data);
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (callback(array[j], array[j + 1]) > 0) {
          let tem = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tem;
        }
      }
    }
    return array;
  }
  reduce(callback, accumulator) {
    let summ = accumulator ? accumulator : null;
    const array = Object.values(this.data);
    for (let i = 0; i < array.length; i++) {
      summ = callback(summ, array[i]);
    }
    return summ;
  }
}

// let array = new Array();
// console.log(array.push(3));
// console.log(array.push(2));
// console.log(array.push(1));
// const map = array.map((el, index, arr) => el * 3);
// console.log(map);
// const filter = array.filter((el,index,arr)=> el > 2);
// console.log(filter);

// const foEach = array.forEach((el,index, arr)=> {
//           console.log(el, index,arr);
// })
// const sort= array.sort((a,b)=> a-b);
// console.log(sort);
// const reduce = array.reduce((el, s) => el+s);
// console.log(reduce);
// const find = array.find(el=> el > 1);
// console.log(find);
