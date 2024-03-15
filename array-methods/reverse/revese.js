function revese () {
          let len = this.length;
          let newArray = [];
          for (let i=0; i< len; i++) {
            newArray.shift(this[i])
          };
          return newArray;
};
let array = [1,2,3,4];
Array.prototype.revese = revese;
console.log(array.reverse());