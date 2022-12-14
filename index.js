const radius = [3, 2, 1, 4];

const area = (x) =>  Math.PI * x * x;
const circumference = (x) =>  2 * Math.PI * x;










// console.log(radius.map(area));
// console.log(radius.map(circumference));









// const calculate =  (arr, logic) => {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));








// function calculateArea(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius)); 

// function calculateCircumference(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));


//filter

// const arr = [3, 4, 5, 1, 6, 7]

// const output = arr.filter( (x) => x % 2 );
// console.log(output );
// console.log(arr.filter( (x) => x % 2 ));







//reduce

const arr = [
    {firstName: 'Sahadat', lastName: 'Hossen', age: 28},
    {firstName: 'Fatima', lastName: 'Binte Shahadat', age: 2},
    {firstName: 'Akkas', lastName: 'Ali', age: 62},
    {firstName: 'Afroza', lastName: 'Khatun', age: 28}
];

const output = arr.reduce(function(acc, curr){
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output);