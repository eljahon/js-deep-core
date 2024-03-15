class Abstract {
  constructor() {
    if (this.constructor === "Abstract") {
      throw new Error(" this is class Abstract");
    }
  }
};
const abstract = new Abstract ();
console.log(abstract);
class User {};

