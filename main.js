// class MyNumber {
//   constructor(value) {
//     this.value = Number(value);
//   }

//   toString() {
//     return this.value.toString();
//   }

//   valueOf() {
//     return this.value;  // Arifmetik amallar uchun
//   }

//   add(num) {
//     return new MyNumber(this.value + Number(num));
//   }
// }

// const myNum = new MyNumber(42);
// console.log(myNum.toString());  
// console.log(myNum + 8);         
// console.log(myNum.add(8)); 

// class MyBoolean {
//   constructor(value) {
//     this.value = !!value;  // Haqiqiy bo'lishini ta'minlash
//   }

//   toString() {
//     return this.value ? "true" : "false";
//   }
//   valueOf() {
//     return this.value;  // Arifmetik amallar uchun
//   }

//   toggle() {
//     this.value = !this.value;
//     return this.value;
//   }
// }

// const myBool = new MyBoolean(false);
// console.log(myBool.toString()); 
// myBool.toggle();
// console.log(myBool.toString()); 
// console.log(myBool); 

var reverseStr = function(s, k) {
  let res =[];
  let bit=''+s[0];
  debugger
  for(let i=1; i<s.length; i++){
      if(bit.length===k){
          res.push(bit)
          bit=''
          bit+=s[i]
      }
     else  bit+=s[i]
  }
  console.log(res, bit, 'bit res ==>');
  
  return  res.map((el, index) => {
      if(index%2===0) return reverBitString(el)

        return el
  }).join('')+bit
  
};


var reverBitString=function (s) {
  let res ='';
  for(let i=s.length-1; i>=0; i--) {
      res+=s[i]
  }
  return res;
}

console.log(reverseStr("abcdefg", 8));

  