const {SHA256}=require('crypto-js');
var message="I am user number 3";
var hash= SHA256(message).toString();
console.log(`Mesaage is= ${message}`);
console.log(`Hash is= ${hash}`);
console.log('priya changed');
console.log('Changes done in branch');
