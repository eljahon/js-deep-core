const deepCompare = (source, target) => {
    if(typeof(source) !== typeof(target)) return false;

    if(Array.isArray(source) && Array.isArray(target)) {
        if(source.length !== target.length) return false;

        for(let i = 0; i < source.length; i++) {
            if(!deepCompare(source[i], target[i])) return false;
        }
        return true;
    }  if(typeof(source) === 'object' && typeof(target) === 'object') {
        if(Object.keys(source).length !== Object.keys(target).length) return false;
        for(let key in source) {
            if(!deepCompare(source[key], target[key])) return false;
        }
        return true;
    } 
    if(typeof(source) === 'function' && typeof(target) === 'function') return source.toString() === target.toString();

    if(typeof(source) === 'symbol' && typeof(target) === 'symbol') return source === target;

    if(typeof(source) === 'bigint' && typeof(target) === 'bigint') return source === target;

    if(typeof(source) === 'undefined' && typeof(target) === 'undefined') return true;

    if(source === null && target === null) return true;

    if(typeof(source) === 'date') return source.getTime() === target.getTime();

    if(source !== target) return false;

    return true;

}