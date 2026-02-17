
// new Promise(()=>{});

// this is a type of object coz it's created from a constructor fncn

// let myPrmoise = new Promise(()=>{});
// console.log(myPrmoise);

// this is a pending state
// promises are the organised form of callback fncn
// this promise fncn contains - rejected and resolved and pending state

// let myPromise = new Promise((res,rej)=>{
//     let data = "this is data"
//     res("Promise Resolved");
// });
// console.log(myPromise);

let myPromise = new Promise((res, rej) => {
    let data = "this is data";
    if (data) {
        res(data);
    } else {
        rej("error"); y
    }
    res("Promise Resolved");
});
myPromise.then((data) => { console.log(data) }, (error) => { console.log(error); });

myPromise.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

// fetch 
// response object in the form of promise 
// then we'll get json in the form of promise again
let resp = fetch('https://jsonplaceholder.typicode.com/todos/1');
resp.then((robj)=>{
    // console.log(robj);
    robj.json().then((data)=>{
        console.log(data);
    });
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((robj)=>{
//     robj.json().then((data)=>{
//         console.log(data);
//     })
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((robj)=>{
//     return robj.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(robj=>robj.json())
.then(data =>console.log(data))
.catch(err=>console.log(err));

 
