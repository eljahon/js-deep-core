class myNumber {
    // static properties
    static EPSILON;
    static MAX_SAFE_INTEGER;
    static MAX_VALUE;
    static MIN_VALUE;
    static MIN_SAFE_INTEGER;
    static NaN;
    static NEGATIVE_INFINITY;
    static POSITIVE_INFINITY;
    constructor () {

    }
    // static methods
    static isFinite(num) {
        if(typeof num !== 'number') return false;
        return num !== Infinity && num !== -Infinity && !this.isNaN(num)
    }

    static isNaN (num) {
        return num !== num
    }

    static isInteger(num) {

    }

    static isSafeInterger(num) {

    }

    static parseFloat () {

    }
    static parseInt() {}

    static [Symbol.hasInstance](intance) {
        return intance instanceof Number
    }

    // intance methods 
    toExponential() {}

    toFixed(){}
    
    toLocaleString() {}

    toPreciision(){}

    toString(){}

    valueOf() {}

}

console.log()