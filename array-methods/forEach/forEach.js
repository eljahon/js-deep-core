function forEach (callback) {
          let len  = this.length; 
          for (let i=0; i<len; i++) {
                    callback(this[i], i, this)
          }
};
let array = [1,2,3,4,5];
Array.prototype.forEach = forEach;
console.log(array.forEach((el, index, array)=> {
          console.log(el,index, array);
}));
