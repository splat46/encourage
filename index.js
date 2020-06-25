const newPackage = require('to-title-case');

const lower = 'the lord of the rings: the return of the king';
const title = newPackage(lower);

console.log(title);