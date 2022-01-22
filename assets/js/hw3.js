// Task 1


//let userNumber = prompt('Enter number', 1);

function squareRoot(number) {
    if (number >= 1) {
        let count = 0;
        for (let i = 1; i <= number; i++) {
            count += i * i;
        }
        return count;
    } else {
        console.log('Number less 1')
    }
}

//console.log(squareRoot(userNumber));

// TAsk 2

let arr3 = [3, 5, 12, 9, 23, 93, 17];

function checkArr(arr) {
    let sum = 0;
    for (let item of arr) {
        if (item > 2 && item < 30) {
            sum += item;
        }
    }
    return sum;
}

checkArr(arr3);


// TAsk 3

let arr4 = [
    [1, 6, 3, '6'],
    [10, 15, 13, '10']
]

function checkArray(arr) {
    let sum = 0;
    for (let item of arr) {
        for (let i of item) {
            if (typeof i === 'number' && i % 2 == 0) {
                sum += i;
            }
        }
    }
    return sum;
}
console.log(checkArray(arr4));


let userKey = prompt('Enter a new key', 'Car');
let userValue = prompt('Enter a new value', 'Porsh');

let newObj = {};

function pushNewOption(key, value) {
    newObj[key] = value;
    console.log(newObj)
}
pushNewOption(userKey, userValue)