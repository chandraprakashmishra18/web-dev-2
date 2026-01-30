let str= "Javascript is a programming language.";
let sub= str.slice(-21,-1  );
console.log(sub);

let str2=str.substring(0,15);
console.log(str2);

// find out the occurrence of "r" in the string .
// let str3="tu meri me tera me tera tu meri";
// let count=0;
// for(let i=0;i<str3.length;i++){
//     if(str3[i]==='r'){
//         count++;
//     }
// }
// console.log(count);

let str3="tu meri me tera me tera tu meri";
let count=str3.split("r").length -1;
console.log(count);

