const words = arg => arg.split(' ');
const sentence = arg => arg.join(' ');
const yell = arg => arg.toUpperCase();
const whisper = arg => '*' + arg.toLowerCase() + '*';
const capitalize = arg => arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();