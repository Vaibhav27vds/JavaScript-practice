//  for of 

const arr = new Array(1,2,3,4,5,6,7,8,9,10);

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`The char is ${greet}`);
}

// Maps

const maps = new Map ();
maps.set("Name", "John");
maps.set("Naam", "Vaibhav")



console.log(maps);

for (const [key, value]of maps) {
    console.log(key);
}

// objects are not iteratable 