const shellowCompare = (source, target) => {
    if(typeof(source) !== typeof(target)) return false;

    if(typeof(source) === 'array' && typeof(target) === 'array') {
        if(source.length !== target.length) return false;
        for(let i = 0; i < source.length; i++) {
            if(!shellowCompare(source[i], target[i])) return false;
        }
        return true;
    }
    if(typeof(source) === 'object' && typeof(target) === 'object') {
        if(Object.keys(source).length !== Object.keys(target).length) return false;
        for(let key in source) {
            if(!shellowCompare(source[key], target[key])) return false;
        }
        return true;
    }

    if(typeof(source) === 'function' && typeof(target) === 'function') return source.toString() === target.toString();

    if(typeof(source) === 'symbol' && typeof(target) === 'symbol') return source === target;

    if(typeof(source) === 'bigint' && typeof(target) === 'bigint') return source === target;

    if(typeof(source) === 'undefined' && typeof(target) === 'undefined') return true;

    if(source === null && target === null) return true;

    if(typeof(source) === 'date') return source.getTime() === target.getTime();
 
    if(typeof(source) === 'map' && typeof(target) === 'map') {
        if(source.size !== target.size) return false;
        for(let key of source.keys()) {
            if(!shellowCompare(source.get(key), target.get(key))) return false;
        }
        return true;
    }

    if(typeof(source) === 'set' && typeof(target) === 'set') {
        if(source.size !== target.size) return false;
        for(let value of source.values()) {
            if(!shellowCompare(value, target.get(key))) return false;
        }
        return true;
    }

    if(typeof(source) === 'weakmap' && typeof(target) === 'weakmap') {
        if(source.size !== target.size) return false;
        for(let key of source.keys()) {
            if(!shellowCompare(source.get(key), target.get(key))) return false;
        }
        return true;
    }

    if(typeof(source) === 'weakset' && typeof(target) === 'weakset') {
        if(source.size !== target.size) return false;
        for(let value of source.values()) {
            if(!shellowCompare(value, target.get(key))) return false;
        }
        return true;
    }

    if(source !== target) return false;

    return true
}