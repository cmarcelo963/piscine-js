const get = arg => sourceObject[arg];
const set = (arg, val) => {
    sourceObject[arg] = val;
    return val;
}