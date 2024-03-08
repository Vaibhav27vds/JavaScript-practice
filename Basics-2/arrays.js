const myArr = [23,25,64,6,6,666,54]

// shallow copy and deep copy 

const newArr = new Array (1,2,3,4,5,6,7,8)


newArr.push(10)

console.log(`A   ${newArr}`);

newArr.pop()

console.log(`B   ${newArr}`);

newArr.shift();

console.log(`C   ${newArr}`);

console.log(`D   ${newArr.filter(element=>element>7)}`);


console.log(`E   ${newArr.slice(2,4)}`);

console.log(`F   ${newArr}`);

console.log(`G   ${newArr.splice(0,3)}`);

console.log(`H   ${newArr}`);

console.log(`I   ${newArr.length}`);

