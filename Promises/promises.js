    // db calls, async tasks
    // cryptography, network
    const promiseOne = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if(!error) 
                {
                    resolve()
                }
            else {
                reject()
            }
        }, 1000)
    })

    promiseOne.then(function(){
        console.log("Then is active");
    })

    promiseOne.catch(function(error) {
        console.log(error);
    })

    promiseOne.finally(function(){
        console.log('finally executed')
    })