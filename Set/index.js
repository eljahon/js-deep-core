class Set {
    constructor(reset) {
        this.size = reset.length
        this._={}
        for(let i=0; i<reset.length; i++) {
            this._[reset[i]] = reset[i]
        }
    }
    has(searchValue) {
        return `${searchValue}` in this._;
    }
    add(value){
        this._[value] = value;
        this.size++;
        return this;
    }
    delete (value) {
        this.size--;
        return delete this._[value]
     }
    difference(newSet) {
        let newValue = {};
        for(let key in this._){
          if(!(`${key}` in newSet)) newValue[key] =this._[key]
        }
        return newValue;
    }
    entries() {
        let arr=[];
        for(let i=0; i<=this.size; i++) {
            arr.push([this._[i],this._[i]])
        }
        return arr;
    }
    forEach (callback) {
        for(let i=0; i<=this.size; i++) {
            callback(this._[i], i, Object.values(this._))
        }
    }
    keys() {
        return Object.keys(this._)
    }
    values () {
        return Object.values(this._)
    }
    isSubsetOf(newSet) {
        let count =0;
        for(let key in newSet) {
            if(this.has(newSet[key])) count++;
        }
        return count === this.size;
       
    }
    isDisjointFrom (newSet) {
        for(let key in newSet) {
            if(this.has(newSet[key])) return false
        }
        return true
    }
    isSupersetOf(newSet) {
        for(let key in newSet) {
            if(!this.has(newSet[key])) return false
        }
        return true
    }
    union (newSet) {
        let newValue ={...this._}
        for(let key in newSet) {
            newValue[key]= newSet[key]
        }
        return newValue
    }
    symmetricDifference(newSet){
        let newValue = {...this._};
        debugger
        for(let key in newSet) {
            if(!(`${key}` in newValue)) {
                newValue[key]=newSet[key]
            } else delete newValue[key]
        }
        return newValue;
    }
    intersection(newSet) {
        let newSetList ={};
        for(let key in newSet) {
          if(this.has(newSet[key])) newSetList[key] = newSet[key]
        }
        return newSetList;
    }
    clear() {
        this._ ={}
        this.size =0;
    }
}
const evens = new Set([2, 4, 6, 8]);
const fours = new Set([1, 4, 9]);
// console.log(evens._);
// console.log(fours._);

// console.log(evens.union(fours._));
// console.log(evens.symmetricDifference(fours._));
console.log(evens.difference(fours._));