const MyTypeof = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}


console.log(MyTypeof(1));
console.log(MyTypeof('1'));
console.log(MyTypeof(true));
console.log(MyTypeof([]));
console.log(MyTypeof({}));
console.log(MyTypeof(null));
console.log(MyTypeof(undefined));