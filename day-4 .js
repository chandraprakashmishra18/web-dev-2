///let arr=[0,112,311,159,0,183,0]
// let arr2=[]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr2.push(arr[i]);
//     }
// }
// for(var j=0;j<arr.length;j++){
//     if(arr[j]===0){
//         arr2.push(arr[j]);
//     }
// }
// console.log(arr2);
// question no 4 
// let arr=[2,3,2,3,9,3,2]
// let arr2=[]
// for( var i=0;i<arr.length;i++){
    // if(arr2.indexOf(arr[i])===-1){
        // arr2.push(arr[i]);
    // }
// }
// console.log(arr2);

// OR
// let arr=["apple","banana"];
// let arr2=["cherry"," mango"];
// let combined=[...arr,...arr2];
// console.log(combined);


// TERNARY OPERATOR 
// let age=18;
// let canVote= age>=18 ? "yes":"no";
// console.log(canVote);

// let no=prompt("Enter a number: ");
// let result=no%2==0 ? "even":"odd";
// console.log(`The number is ${result}`);

// let year=prompt("Enter a year: ");
// let isLeap= (year%4==0 && year%100!=0) || (year%400==0) ? "leap year":"not a leap year";
// console.log(`The year is ${isLeap}`);

setInterval(function(){
    let date=new Date();
    console.log(date.toLocaleTimeString());
},1000);