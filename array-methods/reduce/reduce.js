function reduce (callback, accumulator) {
let len = this.length;
let resoult = accumulator ? accumulator : null;
for (let i=0; i<len; i++) {
          resoult = callback(resoult, this[i]);

};
return resoult;
};
let array = [1,2,3,4];
Array.prototype.reduce = reduce;
console.log(array.reduce((el, acc)=>el*acc, 1));