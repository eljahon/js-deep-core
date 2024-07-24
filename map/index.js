class Map {
    #data;
          constructor() {
              this.size = 0;
              this.#data = {}
              const data = this.#data
              return `${data}`
          }
        static  set(key, value) {
              this.#data[key] = value;
              this.size++;
              return this;
          }
          get(key) {
              return this.#data[key]
      
          }
          has(key) {
              return `${key}` in this.#data;
      
          }
          delete(key) {
              delete this.#data[key];
              this.size--;
          }
          clear() {
              this.#data = {}
              this.size = 0;
          }
          keys() {
              return Object.keys(this.#data)
          }
          values() {
              return Object.values(this.#data)
          }
          entries() {
              const data = []
              for (let item in this.#data) {
                  data.push([item, this.#data[item]])
              }
              return data;
          }

          forEach(callback) {
            for(let i=0; i<=this.size; i++) {
                callback(this.#data[i], i, Object.values(this.#data))
            }
          }
      
      }
      class myMap extends Map {
      }
      const map = new Map();
      const mymap = new myMap();
      console.log(map);
      map.set(1, 23).set(2,24).set(3, 25);
      mymap.set(1, 23).set(2,24).set(3, 25);
      console.log(mymap);
      console.log('size =>', map.size);
      console.log('get =>', map.get(1));
      console.log('has =>', map.has(1));
      console.log('entries =>', map.entries());
      console.log('keys =>', map.keys());
      console.log('values =>', map.values());
      map.forEach((el, index, arr) => {
        console.log(el, index , arr);
      })
      