// // Reverse a String with Functions
// let str = "hello world"
// let rev = str.split('').reverse().join('')
// console.log(rev);


// // Reverse a String Without Functions
// let str = "hello world"
// let rev = "";
// for(let i = 0 ; i<str.length ; i++)
// {
//     rev += str[str.length - (i + 1)]
// }
// console.log(rev);


// // Check wheather a Word is palidrome or not by using Functions
// let str = "racecar";
// let rev = str.split('').reverse().join("")
// if(str == rev)
// {
//     console.log(`${str} is palidrome`);
// }
// else
// {
//     console.log(`${str} is not a palidrome`);

// }



// // check wheather a word is palidrome or not without using function
// let str = "racecar";
// let rev = ""
// for(let i = 0 ; i < str.length ; i++) 
// {
//     rev += str[str.length - (i + 1)]
// }
// if(str == rev)
// {
//     console.log(`${str} is palidrome`)
// }
// else
// {
//     console.log(`${str} is not a palidrome`)
// }



// // Find the max number in a array with function
// let arr = [1,3,2,4,7,4,3,4]
// let max = arr.sort();
// console.log(max[arr.length-1]);



// // Find the max number without using the array without function
// let arr = [1,3,2,4,7,4, 40, 3,4]
// let max = null;
// for (let i = 0 ; i < arr.length ; i++) 
// {
//     for (let j = 0  ; j < arr.length ; j++)
//     {
//         if(arr[i] < arr[j])
//         {
//             max = arr[j]
//             arr[i]  = arr[j]
//         }
//     }
// }
// console.log(max);



// // remove the duplicate number from an array with functions
// let arr = [1, 2, 2, 3, 4, 4, 5]
// let arr2  = [...new Set(arr)]
// console.log(arr2);



// remove the duplicate number from array without functions
// let arr = [1, 2, 2, 3 , 3, 3, 4, 4, 5 , 3]
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j] && i != j) {
//             arr[i]  = null
//         }
//     }
// }
// console.log(arr.sort());


// promise in js
// const promise = new Promise((resolve , reject) => {
//     let a = false;
//     if(a)
//     {
//         resolve('promise is resolve')
//     }
//     else
//     {
//         reject('promise is reject')
//     }
// })

// promise
// .then((res) => console.log(res))
// .catch((error) => console.error(error))


// const Promise1 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         resolve("promise1 is resolve")
//     }
//     else
//     {
//         reject("promise1 is reject")
//     }
// })

// const Promise2 = new Promise((resolve , reject) => {
//     let a = false
//     if(a)
//     {
//         resolve("promise2 is resolve")
//     }
//     else
//     {
//         reject("promise2 is reject")
//     }
// })

// const Promise3 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         resolve("promise3 is resolve")
//     }
//     else
//     {
//         reject("promise3 is reject")
//     }
// })

// Promise.all([Promise1 , Promise2 , Promise3])
// .then((res) => console.log(res))
// .catch((error) => console.error(error))
// .finally(() => console.log("promise is resolved"))



// promise.race
// const Promise1 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise1 is resolve")
//         }, 1000);
//     }
//     else
//     {
//         reject("promise1 is reject")
//     }
// })

// const Promise2 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise2 is resolve")
//         }, 200);
//     }
//     else
//     {
//         reject("promise2 is reject")
//     }
// })

// const Promise3 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise3 is resolve")
//         }, 4000);
//     }
//     else
//     {
//         reject("promise3 is reject")
//     }
// })
// Promise.race([Promise1 , Promise2 , Promise3])
// .then((res) => console.log(res))
// .catch((error) => console.error(error))



// promise.allSettled
// const Promise1 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise1 is resolve")
//         }, 1000);
//     }
//     else
//     {
//         reject("promise1 is reject")
//     }
// })

// const Promise2 = new Promise((resolve , reject) => {
//     let a = false
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise2 is resolve")
//         }, 200);
//     }
//     else
//     {
//         reject("promise2 is reject")
//     }
// })

// const Promise3 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise3 is resolve")
//         }, 4000);
//     }
//     else
//     {
//         reject("promise3 is reject")
//     }
// })

// Promise.allSettled([Promise1 , Promise2 , Promise3])
// .then((res) => console.log(res))
// .catch((error) => console.error(error))


// promise.any
// const Promise1 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise1 is resolve")
//         }, 1000);
//     }
//     else
//     {
//         reject("promise1 is reject")
//     }
// })

// const Promise2 = new Promise((resolve , reject) => {
//     let a = false
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise2 is resolve")
//         }, 200);
//     }
//     else
//     {
//         reject("promise2 is reject")
//     }
// })

// const Promise3 = new Promise((resolve , reject) => {
//     let a = true
//     if(a)
//     {
//         setTimeout(() => {
//             resolve("promise3 is resolve")
//         }, 4000);
//     }
//     else
//     {
//         reject("promise3 is reject")
//     }
// })

// Promise.any([Promise1 , Promise2 , Promise3])
// .then((res) => console.log(res))
// .catch((error) => console.error(error))