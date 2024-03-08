//  Immediately Invoked Function Expression (IIFE)


(function connect() {
    // named IIFE
    console.log(`DB connected`);
})(),

// used to remove the pollution from the global scope

((name) => {
    // unnamed IIFE
    console.log(`DB connected again ${name}`);
})("Mongo");