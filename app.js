//Array Slice;
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//Array Splice
let addFood = foods.splice(2, 0, 'noodles', 'icecream');
console.log(foods);

//Array Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArray) {
    let even = numberArray.filter(function (num) {
        return (!(num & 1));
    });
    return even;
}

console.log(isEven(numberArray));

function isPrime(numberArray) {
    let isprime = numberArray.filter(function (num) {
        let p = 0;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                p = 1;
                break;
            }
        }

        return (p == 0);

    }); return isprime;
}
console.log(isPrime(numberArray));


//Reject
let nonPrime = numberArray.filter(function (num) {
    return (!(isPrime(numberArray).includes(num)));
});
console.log(nonPrime);


//Lambda

let iseven = numberArray.filter(num => !(num & 1));
console.log(iseven);


//Map
function findSquareOfNumbers(myArray) {
    return myArray.map(num => num * num);
}

const myArray = [11, 34, 20, 5, 53, 16];
let sqArr = findSquareOfNumbers(myArray);
console.log(sqArr);


//Reduce
function multiply(myArray) {
    return myArray.map(num => num).reduce(function (acc, item) {
        return acc * item;
    }, 1);
}
console.log(multiply([2, 3, 5, 10]));