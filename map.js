const numbers = [4, 5, 6, 8, 10];
 
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}

console.log(doubled);