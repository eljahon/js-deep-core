class MyNumber {
  constructor(value) {
    this.value = Number(value);
  }

  toString() {
    return this.value.toString();
  }

  valueOf() {
    return this.value;  // Arifmetik amallar uchun
  }

  add(num) {
    return new MyNumber(this.value + Number(num));
  }
}

// Ishlatish
const myNum = new MyNumber(42);
console.log(myNum.toString());  // "42"
console.log(myNum + 8);         // 50 (valueOf ishlaydi)
console.log(myNum.add(8)); 

class MyBoolean {
  constructor(value) {
    this.value = !!value;  // Haqiqiy bo'lishini ta'minlash
  }

  toString() {
    return this.value ? "true" : "false";
  }
  valueOf() {
    return this.value;  // Arifmetik amallar uchun
  }

  toggle() {
    this.value = !this.value;
    return this.value;
  }
}

// Ishlatish
const myBool = new MyBoolean(false);
console.log(myBool.toString());  // "false"
myBool.toggle();
console.log(myBool.toString()); 
console.log(myBool); // "true"
// MyNumber { value: 50 }
