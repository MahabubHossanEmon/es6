//data access
const data =[{id: 1, name:'abul' , address:'kochu khet' }];
console.log(data[0].address);

const products = {
    count:5000,
    serial:89,
    data:[
        {id:1 , name: 'lenevo laptop', price:69000 },
        {id:2 , name:'asus  laptop' , price:96000 }
      ]

};

console.log(products.data[1].price);


const user = {
    id: 5002,
    name : 'majar holo vhondo',
    address : {
        street:{first:'54/5 nurjahan road',
                 second:'house2',
                third:'nijer bari'   },
        road:'5A',
        country :'Bangladesh'
    }

}
const user2 = {
    id: 5002,
    name : 'majar holo vhondo',
    address : {
     
        road:'5A',
        country :'Bangladesh'
    }

}

console.log(user.address.street?.third)
console.log(user2.address.street?.third)