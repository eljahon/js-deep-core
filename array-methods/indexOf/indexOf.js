function indexOf (n) {
          let len = this.length;
          for (let i=0; i<len; i++) {
                    if (this[i] === n) {
                              return i+1;
                    }
          };
          return -1;
};
let array = [1,2,3,4];
Array.prototype.indexOf = indexOf;
console.log(array.indexOf(3));