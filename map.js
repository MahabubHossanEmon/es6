const numbers = [4, 5, 6, 8, 10];
 
function doubleIt(num){
    return num * 2;
}
// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
const results = numbers.map(doubleIt);
console.log(results);

const double2 = n => n *2;
const output =numbers.map(double2);
console.log(output);


const output3 = numbers.map(n =>n+2);
console.log(output3);

const output4 = numbers.map(n => n /2);
console.log(output4);

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled);