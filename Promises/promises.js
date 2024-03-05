        // Here we are creating Promises.
const promiseOne = new Promise(function(resolved , reject){
            // Do an async task
            //DB calls , cryptography , network calls
    setTimeout(function(){
        console.log("Async1 is complete")
        resolved()
    },2000)
})
        // Here we are consuming Promises: means we are taking from somewhere or its like an Api
promiseOne.then(function(){
    console.log("Promise consumed");
})

            // One more way to written this, lets see.
    
new Promise(function(resolved , reject){
    setTimeout(function(){
        console.log("Async2 is completed")
        resolved()
    },2000)
})
.then(function(){
    console.log("Here Promises again consumed")
})


const promiseThree = new Promise(function(resolved , reject){
    setTimeout(function(){
        resolved({username : "Akhilesh Thakur" , rollNumber : "123456"})
    },2000)
})

promiseThree
.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolved , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
        resolved({userName : "Thakur Sahab" , userPassword : "@thakursahab"})
        }else{
            reject("ERROR : Something went wrong guys")
        }
    },1000)
})
promiseFour
.then(function(user){
    console.log(user);
    return user.userName
})
.then(function(userName){
    console.log(userName)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){console.log("I m always run because i m in finally")})



                    // async , await same as then 

const promiseFive = new Promise(function(resolved , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolved({courseName : "JavaScript" , courseId : "100"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})         

    async function consumePromiseFive(){
        /* in asyn it is not handle the error directly so here we are using the try and catch block */
        try {
            const response = await promiseFive
            console.log(response);
        }
        catch (error) {
            console.log(error)
        }
        finally{
            console.log("HEyyyyyyyyyyyyyyyyyy")
        }
    }
    consumePromiseFive();



                    // actual work : means we call an api
    async function getAllUserData(){
        try{
            const respose = await fetch('https://jsonplaceholder.typicode.com/users')
            const data =  await respose.json()
            console.log(data.name)
        }
        catch(error){
            console.log("Error:" , error)
        }
    }
    getAllUserData();

            // we actually do same thing with then

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(response){
    console.log(response)
})
.catch(function(error){console.log("ERROR:" , error)})

