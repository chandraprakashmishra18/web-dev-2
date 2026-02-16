// console.log("Start...")
// function myFunction(){
//     console.log("Hello world");
// }
// myFunction();
// console.log("End...");
// function myFunction() {
//     setTimeout( ()=>{
//         return " Hello World";
//     },5000);
// }
// console.log(myFunction);
console.log("Start...");
function myFunction(cb) {
    setTimeout (()=>{
        cb("Hello World");
    },5000);
}
myFunction((data)=>{
    console.log(data);
});
console.log("End..");