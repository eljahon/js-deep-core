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


// var convert = function(s, numRows) {
//   if(numRows<2) return s;
//   const divisor = (numRows-1)*2;
//   const rows = Array(numRows).fill("");
//   debugger

//   for(let div = 0; div<s.length; div++) {
//       const mod = div % divisor;
//       const rowIndex = mod < numRows ? mod : divisor-mod;
//       rows[rowIndex]+=s[div]
//   }

//   return rows.join('')
// };

// console.log(convert("PAYPALISHIRING", 3));