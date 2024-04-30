const computer = {
  name: "MacBook",
  isOn: false,
  turnOn(arg) {
    this.isOn = true;
    return `The ${this.name} is On ${arg}`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};
const server = {
  name: "Dell PowerEdge T30",
  isOn: false,
};
let result = computer.turnOn.apply(server, ["hello"]);

console.log(result);
let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
let max = Math.max.call(...arr);
console.log(arr, max);
