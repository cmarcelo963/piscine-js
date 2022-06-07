
is.num = a => typeof a === 'number'
is.str = a => typeof a === 'string'
is.nan = a => Number.isNaN(a)
is.bool = a => a === true || a === false
is.undef = a =>  a === undefined
is.def = a => a !== undefined
is.arr = a => Array.isArray(a)
is.obj = a => {
    return Object.prototype.toString.call(a) === '[object Object]';
};
is.fun = a => typeof a === 'function'
is.truthy = a => !!a === true ? true : false
is.falsy = a => !!a === false ? true : false