class myMap {
    #data;
          constructor() {
              this.size = 0;
              this.#data = {}
          }
          set(key, value) {
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
      
      }
      const map = new myMap();
      map.set(1, 23).set(2,24).set(3, 25);
      console.log('size =>', map.size);
      console.log('get =>', map.get(1));
      console.log('has =>', map.has(1));
      console.log('entries =>', map.entries());
      console.log('keys =>', map.keys());
      console.log('values =>', map.values());
      