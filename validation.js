const number = 23;
const string = 'Shihab Uddin';
if (typeof number === 'number') {
    console.log('value is a number');
}
else {
    console.log('value is not a number');
}
if (typeof string === 'string') {
    console.log('value is a string');
}
else {
    console.log('value is not a string');
}
const numbers = [3, 12, 78, 65];
const student = { name: 'Rafsan', job: 'Developer' };
console.log(typeof numbers);
console.log(typeof student);
//For array validation we cant use type of instead we have to use Array.isArray it will return a boolean value consisting of answer whether it is array or not
console.log(Array.isArray(numbers));
// We can also check number using isNaN .NaN-> means not a number.

console.log(isNaN(number)); 