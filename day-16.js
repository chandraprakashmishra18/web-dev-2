

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp=>console.log(resp));


// we have diff diff response object which on opearion tells us diff diff status value which tells whether it's functioning well or have any issue

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(resp=>resp.json())
// .then(data=>console.log(data));


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(resp=>{
//     if (!resp.ok){
//         throw new Error("Network response was not ok");
//     }else{
//         return resp.json();
//     }
// })


// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(resp=>resp.json())
// .then(data=>console.log(data));
// }
// getData();

// function getData(url){
//     fetch(url)
// .then(resp=>resp.json())
// .then(data=>console.log(data));
// }
// getData('https://jsonplaceholder.typicode.com/todos/1');

// async keyword along with await keyword:
// we use async keyword before such fncn coz we have to use await which makes the code simplier and easy to code and read 

// async function getData(url){
//     fetch(url)
// .then(resp=>resp.json())
// .then(data=>console.log(data));
// }
// getData('https://jsonplaceholder.typicode.com/todos/1'); 


async function getData(url){
let resp = await fetch(url);
let data = await resp.json();
}
getData('https://jsonplaceholder.typicode.com/todos/1')
.then(data=>console.log(data)); 
// we get promises when we call async fncn and we handle async fncn's promises with .await and .await can be used within async fncn only 
// to handle promises outside of async fncn we use .then only to deal with promises 


