function greeting(greetingHandler,name){
   greetingHandler(name);
}
//const name = 'halim mama';
//const numbers = [45,54,78];
//const laptop ={price:45000, brand:'lenovo',memory:'8gb'};
function greetingHandler(name){
    console.log('good morning',name);
}

greeting(greetingHandler,'tom hanks');
greeting(greetingHandler,'tony stark');
greeting(greetingHandler,'tony cruise');