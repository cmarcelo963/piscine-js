var escapeStr = "`\\/\"\'";

var arr = [4, '2'];

const obj = {
    str:"sting", 
    num:0, 
    bool:false, 
    undef:undefined
};

const nested = {
    arr:[4, undefined, "2"], 
    obj:{
        str:"sting", 
        num:0, 
        bool:false
    }
};

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)