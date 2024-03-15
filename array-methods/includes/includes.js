function inculudes (n) {
          let len =this.length;
          for (let i=0; i<len; i++) {
                    if (this[i] === n) {
                              return true;
                    }
          };
          return false;
};
let array = [1,2,3,4,5];
Array.prototype.includes = inculudes;
console.log(array.includes(6));