class myString {
    #data;
    constructor(data) {
        this.#data = data;
        this.length = data.length;
    }
    toLowerCase() {
        const listCode = []

        for (let i = 0; i < this.length; i++) {

            const stringCode = this.#data.charCodeAt(i)

            if (stringCode > 96 && stringCode < 123) listCode.push(stringCode)

            if (stringCode > 64 && stringCode < 91) listCode.push(stringCode + 32)

        }

        return String.fromCharCode(...listCode)
    }
    toUpperCase() {
        const listCode = []

        for (let i = 0; i < this.length; i++) {

            const stringCode = this.#data.charCodeAt(i)

            if (stringCode > 96 && stringCode < 123) listCode.push(stringCode - 32)

            if (stringCode > 64 && stringCode < 91) listCode.push(stringCode)

        }

        return String.fromCharCode(...listCode)
    }
    padEnd(targetLength, padString) {
        let res = this.#data;
        for (let i = this.length - 1; i < this.length - 1 + targetLength; i++) {
            res += padString ?? ''
        }
        return res;
    }
    padStart(targetLength, padString) {
        let res = this.#data;
        for (let i = 0; i < this.length - 1 + targetLength; i++) {
            res += padString ?? ''
        }
        return res;
    }
    indexOf(str) {
        let res = -1;
        for (let i = 0; i < this.length; i++) {
            if (this.#data[i] === str) {
                res = i;
                break;
            }
        }
        return res;
    }
    lastIndexOf(str) {
        let res = -1;
        for (let i = this.length - 1; i >= 0; i--) {
            if (this.#data[i] === str) {
                res = i;
                break;
            }
        }
        return res;
    }
    includes(str) {
        for (let i = 0; i < this.length; i++) {
            if (this.#data[i] === str) {
                return true;
            }
        }
        return false;
    }
    charCodeAt(str) {
        return this.#data.charCodeAt(str);
    }
    slice(begin, end) {
        let result = '';
        if (begin > 0 && end > 0) {
            for (let i = begin - 1; i < end; i++) {
                result += this.#data[i]
            }
            return result

        }
        if (begin > 0 && end < 0) {
            for (let i = this.length - 1; i > end; i--) {
                result += this.#data[i]
            }
            return result

        }
        if (begin > 0 && !end) {
            for (let i = begin; i < this.length; i++) {
                result += this.#data[i]
            }
            return result

        }
        if (begin < 0 && end < 0) {
            for (let i = this.length - 1; i > begin; i--) {
                result += this.#data[i]
            }
            return result
        }
        let res = this.#data;
        return res;
    }
    search(str) {
        let res = -1;
        for (let i = 0; i < this.length; i++) {
            if (this.#data[i] === str) {
                res = i;
                break;
            }
        }
        return res;
    }
    replace(pattern, replacement) {
        let res = '';
        for (let i = 0; i < this.length; i++) {
            if (this.#data[i] === pattern) {
                res += replacement;
            } else {
                res += this.#data[i];
            }
        }
        return res;
    }
    replaceAll(pattern, replacement) {
        let res = '';
        for (let i = 0; i < this.length; i++) {
            if (this.#data[i] === pattern) {
                res += replacement;
            } else {
                res += this.#data[i];
            }
        }
        return res;
    }
}
let str = new myString('Salom');
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.padEnd(2, '-'));
console.log(str.slice(2));
console.log(str.slice());
