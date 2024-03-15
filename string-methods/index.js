class myString {
 #data;
 constructor(data) {
          this.#data = data;
          this.length = data.length;
 }
 toLowerCase() {
          for(let i=0; i<this.length; i++) {
console.log(this.#data[i]);
                    const stringCode =String.charCodeAt(this.#data[i])
                    const listCode = []
                    if(stringCode>96&&stringCode<123) {
                                 listCode.push(stringCode-32)
                    } else {
                              if(stringCode>64&&stringCode<91) {
                                        listCode.push(stringCode)
                              }
                    }
          }
          return String.fromCharCode(...listCode)
 }
 
}
let str = new myString('salom');
console.log(str.toLowerCase());
