let num1 = 5;
let num2 =7;
function multiply(a,b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1,num2);
console.log(output);


let student1 = {name:'jslil',partner:'borsha'};
let student2 = {name:'raj',partner:'borsha'};

function makeMovie(couple1,couple2){
    couple1.name = 'ononto';
    couple2.name = 'faju';
}
console.log(student1,student2);
makeMovie(student1,student2);
console.log(student1,student2);
