function join (n) {
          let len = this.length;
          let resoult = '';
          for (let i=0; i<len; i++) {
               resoult+=this[i];
          };
          return resoult;
};
let array = [1,2,3,4,4];
Array.prototype.join = join;
console.log(array.join());