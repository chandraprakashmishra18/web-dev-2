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
// console.log("Start...");
// function myFunction(cb) {
//     setTimeout (()=>{
//         cb("Hello World");
//     },5000);
// }
// myFunction((data)=>{
//     console.log(data);
// });
// console.log("End..");
console.log("Start...");
function login(uname, password, cb) {
    setTimeout (()=>{
        cb({uname: uname, isLoggedIn:true , Message: "Login Successfully"});
    },1000);
}
function getVideolist(email,cb) {
    setTimeout (()=>{
    cb([{title:"video 1"},{title: "Video 2"}]);
},2000);
}
function getVideoDetail(video,cb){
    setTimeout(()=>{
        cb({title: video.title,description: "This is the req video" +video.title});
    },2000);
}
login( "prashant" , "password123" , (userdata)=>{
    console.log(userdata);
    getVideolist(userdata.uname, (VideoList)=>{
        console.log(VideoList);
        getVideoDetail(VideoList[0] , (videoDetail)=>{
            console.log(videoDetail);
        });
    });
});
console.log("End..");

