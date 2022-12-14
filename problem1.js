var number = [1, 2, 3, 4];
var copynumber = number; 
number = [0]; 
function test(array, value) { 
    array.push(5); //mutated or change 
    // array = [200, 300]; 
    // assign console.log(array); 
} 
test(number, 5); 
console.log(number); 
console.log(copynumber); 

// *****************************//

// function a(){
//     console.log('hi');
// }

// var a = 10;
// function outer(){
//     var b = 20;
//     function inner(){
//         var c = 30 
//         console.log(a,b,c);
//     }
//     inner();
// }
// outer();
// console.log(a, b, c);
//**************************//