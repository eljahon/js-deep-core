function some (callback) {
          let len  =this.length;
          for (let i=0; i<len; i++) {
                    if (callback(this[i], i, this)) {
                              return true;
                    }
          }
          return false;
};
let arra = [1,2,3,4];
Array.prototype.some = some;
console.log(arra.some((el) => el>2));