//what is var, no data type, directly do let var const,
var a = 10;
var b = 20;
console.log(a);
console.log(b);

scope global 
var a = 10;
function fxn() {
    console.log(a);
}
fxn();
a = 

// returntype functionname(datatype1, datatype2)
//function functionname(var, var2)

//hoisting there is no value in variable we run and after that we add that value
// function exampleVar() {
//     console.log(a);
//     var a = 5;
//     console.log(a);
// }
// exampleVar();

function examplelet()
{
    let y=20;
    if(true) {
        let y = 30;
        console.log(y); //30
    }
    console.log(y); //20
}

// let cannot be reinitialised
// const cant change
// let reinitialisation happens
//var reinitilised happen





// total let vs var vs const
// var: 1. redecleration
//      2. reassignment
//      3.hoisting
//      4.global access

// let: redecleration
//          reassignment
//          hoistingnot
//          block ScriptProcessorNode

// const: 1. not
// not
// not
// block scope/




types of functions

regular name function
function sayHello(){
    console.log("Hello");
}
sayHello();


anonymousfunction
const sayHello = function ()
{
    console.log("hello");
}
sayHello();

// arrow function
const sayHello = () => {
    console.log("Hello");
}






// mostly use arrow function

const heralal=()=>{

}
heralal();




const sum = (a,b) =>{
    return a = b;
};
const result= sum(3,5);
console.log(result);






