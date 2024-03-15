function myfilter(callback) {
  let leng = this.length;
  let newArray = [];
  for (let i = 0; i < leng; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}
Array.prototype.myfilter = myfilter;
let arr = [5, 6, 7, 8];
console.log(arr.myfilter((el) => el > 6));
