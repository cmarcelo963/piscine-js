const sign = arg => arg === 0 ? arg : arg > 0 ? 1 : -1;

const sameSign = (a, b) => (a > 0 && b > 0) || (a < 0 && b < 0) || (a === 0 && b === 0);
