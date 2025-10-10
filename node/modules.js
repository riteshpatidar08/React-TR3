const fs = require('fs');

console.log(fs);

const data = fs.readFileSync('./read.txt', 'utf-8');
console.log(data);
