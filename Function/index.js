class Function {
    // static properties 
    static displayName;
    static length;
    static name;
    static prototype;
    static arguments;
    static caller;

    constructor (fn) {
        this.fn = fn
    }

    // static methods
    static apply(context, argsArray) {
        context = context||globalThis;
        const uniqueKey = Symbol()
        context[uniqueKey] = this.fn;
        const result = context[uniqueKey](...);
        delete context[uniqueKey];
        return result
    }

    static call (context, ...args) {
        context = context || globalThis;
        const uniqueKey = Symbol()
        context[uniqueKey] = this.fn;
        const result = context[uniqueKey](...args);
        delete context[uniqueKey]
        return result;
    }

    static bind(context, ...args) {
        return (...newArgs) => {
            return this.fn.apply(context, [...args, ...newArgs])
        }
    }
    
    static toString() {}


   static [Symbol.hasInstance](instance){
    return instance instanceof Function
   }



    // instance properties 


}