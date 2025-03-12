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
## Check if a Word is a Palindrome

### Using Functions

```javascript
let str = "racecar";
let rev = str.split('').reverse().join("");
if(str == rev) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}
```


### Without Using Functions

```javascript
let str = "racecar";
let rev = str.split('').reverse().join("");
if(str == rev) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}
```

### Find the Maximum Number in an Array

## Using Functions

```javascript
let arr = [1, 3, 2, 4, 7, 4, 3, 4];
let max = arr.sort();
console.log(max[arr.length-1]);
```

### Without Using Functions 

```javascript
let arr = [1, 3, 2, 4, 7, 4, 40, 3, 4];
let max = null;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] < arr[j]) {
            max = arr[j];
            arr[i] = arr[j];
        }
    }
}
console.log(max);
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