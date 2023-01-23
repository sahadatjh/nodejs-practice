function sayHello(){
    return "Hello world";
}

let fn = sayHello;
console.log("Hello world");

function greet(fnMessage){
    console.log("Function passed as argument:", fnMessage());
}
greet(sayHello); //=>

function exampleThree(){
    console.log("i am function three");
}