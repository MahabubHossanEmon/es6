 const products = [
    {id:1, name:'lenevo', price: 65000},
    {id:2, name:'dell', price: 45000},
    {id:3, name:'hp', price: 50000},
    {id:4, name:'mac', price: 165000},
 ]

 //has some properties,method

 class Product{
    country = 'Bangladesh';
    speak(talk){
        console.log(`talking about ${talk}`)
    }
 }

 const lenovo = new Product()
 console.log(lenovo);

 lenovo.speak('kire na porle hobe osustor kta kew mone rakha na re pagla');


 class Teacher{
    constructor(name, subject){
        this.name =name;
        this.subject =subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
 }

 const topon =new Teacher('topon sir', 'physics');
 console.log(topon);