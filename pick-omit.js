const pick = (obj, ...strOrArr) => {
    // console.log(obj, strOrArr);
    let result = {};
    strOrArr.flat().forEach((value) => {
        Object.keys(obj).forEach((element) => {
            if (element === value) {
                result[element] = obj[element];
            }
        });
    });
    return result;
};
const omit = (obj, keys) => {
    let res = Object.assign({}, obj);
    if (typeof keys == 'string') {
        keys = [keys];
    }
    keys.forEach((key) => delete res[key]);
    return res;
};