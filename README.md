# JavaScript Practice Coding Problems

## Reverse a String

### Using Functions

# JavaScript Practice Coding Problems

## Reverse a String

### Using Functions
```javascript
let str = "hello world";
let rev = str.split('').reverse().join('');
console.log(rev);
```

### Without Using Functions

```javascript
let str = "hello world";
let rev = "";
for(let i = 0; i < str.length; i++) {
    rev += str[str.length - (i + 1)];
}
console.log(rev);
```


```javascript
const Promise1 = new Promise((resolve , reject) => {
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
.catch((error) => console.error(error))```