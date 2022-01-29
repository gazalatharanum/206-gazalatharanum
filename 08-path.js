const path = require('path');
console.log(path.join(__filename));
console.log(path.join(__dirname));
const readmeFilePath =path.join(__dirname,'...','README.md');
console.log(readmeFilePath);