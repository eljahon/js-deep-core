
type itemFild = {
    [key: string]: string|number|boolean|object
  };
class myMap {
    private data:itemFild;
    public size:number = 0
    constructor() {
        this.size = 0;
    
    }
     set<T>(key:string|number|boolean|object, value:string|number|boolean|object):T {
        this.data[key] = value;
        this.size++;
        return this;
    }
     get(key) {
        return this.data[key]

    }
    has(key) {
        return `${key}` in this.data;
    }
    delete(key) {
        delete this.data[key];
        this.size--;
    }
    clear() {
        this.data = {}
        this.size = 0;
    }
    keys() {
        const ky = [];
        for (let [key, value] in this.data) {
            ky.push(key)
        }
        return ky
    }
    values() {
        const value = [];
        for (let key in this.data) {
            value.push(this.data[key])
        }
        return value
    }
    entries() {
        const data = []
        for (let i in this.data) {
            data.push([i, this.data[i]])
        }
        return data;
    }

}
const map = new myMap();
map.set(1, 23);
console.log(map.size);
console.log(map.get(1));
console.log(map.has(1));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
