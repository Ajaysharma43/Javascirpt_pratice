```const Promise1 = new Promise((resolve , reject) => {
    let a = true
    if(a)
    {
        setTimeout(() => {
            resolve("promise1 is resolve")
        }, 1000);
    }
    else
    {
        reject("promise1 is reject")
    }
})

const Promise2 = new Promise((resolve , reject) => {
    let a = false
    if(a)
    {
        setTimeout(() => {
            resolve("promise2 is resolve")
        }, 200);
    }
    else
    {
        reject("promise2 is reject")
    }
})

const Promise3 = new Promise((resolve , reject) => {
    let a = true
    if(a)
    {
        setTimeout(() => {
            resolve("promise3 is resolve")
        }, 4000);
    }
    else
    {
        reject("promise3 is reject")
    }
})

Promise.any([Promise1 , Promise2 , Promise3])
.then((res) => console.log(res))
.catch((error) => console.error(error)) ```