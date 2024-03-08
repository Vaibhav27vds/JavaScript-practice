const User = {
    name: {
        fullname: {
            firstName: "Vaibhav",
            middleName: "Deep",
            lastName: "Srivastava",
        },
    },
}

const User2 = {
    name:"Hitesh",
    age:20,
    phone:9457234223,

}

const obj = Object.assign( {}, User2, User)

const newobj = {...User2, ...User}

console.log(newobj);

// for array of objects 

const arr = [
    {id:"123a1a", name:"vaibhav", email:"vds@gmail.com"},
    {id:"12erga", name:"hitesh", email:"vds@email.com"},
    {id:"123adfgda", name:"nikunj", email:"vds@premail.com"},
    {id:"fdgd", name:"alex", email:"vds@yahoo.com"}
]

console.log(arr[1].name)

console.log(Object.keys(arr[1]))
console.log(Object.values(arr[0]));
console.log(Object.entries(arr[0]));

console.log(User2.hasOwnProperty("name"));