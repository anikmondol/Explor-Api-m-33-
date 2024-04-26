const user = {id : 1, name : "gorib aamir", job : 'actor'};
// javaScript object notation ---> JSON

// const stringified = JSON.stringify(user);


// console.log(stringified);
// console.log(user);



/*

{"id":1,"name":"gorib aamir","job":"actor"}
{ id: 1, name: 'gorib aamir', job: 'actor' }

*/ 


const shop = {
    owner: `Alia`,
    address: {
        street: `kochukhet voot er goli`,
        city: `ranbir`,
        country: `BD`
    },
    isNew: false,
    products: ['laptop', `mic`, `monitor`, `keyboard`],
    revenue: 45000,
    isOpen: true
}



console.log(shop);
const jsonString = JSON.stringify(shop);
const jsonParse = JSON.parse(jsonString);


console.log(jsonString);
console.log(jsonParse);