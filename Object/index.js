class myObject {

    static assign(target, ...sources) {
        for (let source of sources) {
            for (let key in source) {
                target[key] = source[key]
            }
        }
        return target
    }

    static entries(obj) {
        const entries = [];
        for (let key in obj) {
            entries.push([key, obj[key]])
        }
        return entries
    }

    static keys(obj) {
        const keys = [];
        for (let key in obj) {
            keys.push(key)
        }
        return keys
    }

    static values(obj) {
        const values = [];
        for (let key in obj) {
            values.push(obj[key])
        }
        return values
    }

    static fromEntries(entries) {
        const obj = {};
        for (let [key, value] of entries) {
            obj[key] = value
        }
        return obj
    }
    static is(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    }

    static defineProperties(obj, properties) {
        for (let key in properties) {
            Object.defineProperty(obj, key, properties[key])
        }
        return obj
    }

    static defineProperty(obj, key, descriptor) {
        Object.defineProperty(obj, key, descriptor)
        return obj
    }
    static freeze(obj) {
        
    }

    static hasOwn(obj, key) {       

        return key in obj
    }
    static seal(obj) {
         
    }

} 