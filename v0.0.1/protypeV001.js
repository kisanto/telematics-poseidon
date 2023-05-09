x.innerText = 17
y.innerText = 20
const fs = require('fs');
const data = fs.readFileSync('pr001.txt',{ encoding: 'utf8', flag: 'r' });
console.log(data);