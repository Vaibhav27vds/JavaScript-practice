let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())
console.log(mydate.getHours())
console.log(mydate.getMinutes())
console.log(mydate.getSeconds())
console.log(typeof mydate)

let myCreatedDate = new Date(2001,  4, 30, 5, 6, 6,5);
console.log(myCreatedDate.toLocaleString()) 



let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());

console.log(mydate.toLocaleString('default', {
    weekday: "long",
}))
