function find (callback) {
          let len = this.length; 
          for (let i=0; i<len; i++) {
                    if (callback(this[i], i,this)) {
                              return this[i]
                    }
          };
          return undefined;
};
let array = [1,2,3,4];
Array.prototype.find = find;
console.log(array.find(el => el >3));