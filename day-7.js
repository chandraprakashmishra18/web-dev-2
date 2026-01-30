var a=10; 
// this is the 1 line , where firstly "a" is declared with memory allocation and termed as global variable with undefined value 
console.log(a);
// this is the 2 line , where the value 10 is assigned to the variable "a"
function demo(){
    // this is the 4 line , here function is declared 
    var b=20;
    // this is the 5 line , where "b" is declared with memory allocation and termed as local variable with assigned value 20
    console.log(b);
    // this is the 6 line , where the value of "b" is printed inside the function
}
// this is the 7 line used to exit the loop 
demo();
// this is the 3 line , where the function is called to execute the code inside the function , we can not access any fncn unless we call it