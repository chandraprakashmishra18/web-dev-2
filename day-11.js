// function handleClick(){
//     document.getElementById("btn").
//     textContent="Clicked"
// }

// function handleClick(){
//     const head=document.querySelector("h1");
//     head.style.color="Tomato"
//     head.textContent="New heading"
// }
function handleClick(){
    const spanEle=document.createElement("span").textContent = "This is span Element";
    const image = document.createElement("img");

    image.setAttribute("src","https://imgs.search.brave.com/faJ_UcMfACkn-NVdJHlx2kVOZmww3RuJHSMJ8t40ub8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/MTc5Nzk4NC9waG90/by9tZWxib3VybmUt/YXVzdHJhbGlhLXZp/cmF0LWtvaGxpLW9m/LWluZGlhLWxvb2tz/LW9uLWluLXRoZS1k/dWdvdXQtZHVyaW5n/LWRheS1maXZlLW9m/LXRoZS1tZW5zLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1r/M2tVTFlNbDJ3cGRK/WkF5ODdFQkk0Uy0w/a28ycVZ3V0xlWlc4/TjBBRFZnPQ");
    image.setAttribute("alt","Virat Kohli");
    document.getElementById("content").append(spanEle);
    document.getElementById("content").append(image);
}
document.getElementById("btn").addEventListener("click",()=>{
    const spanEle=document.createElement("span").textContent = "This is span Element";
    const image = document.createElement("img");

    image.setAttribute("src","https://imgs.search.brave.com/faJ_UcMfACkn-NVdJHlx2kVOZmww3RuJHSMJ8t40ub8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/MTc5Nzk4NC9waG90/by9tZWxib3VybmUt/YXVzdHJhbGlhLXZp/cmF0LWtvaGxpLW9m/LWluZGlhLWxvb2tz/LW9uLWluLXRoZS1k/dWdvdXQtZHVyaW5n/LWRheS1maXZlLW9m/LXRoZS1tZW5zLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1r/M2tVTFlNbDJ3cGRK/WkF5ODdFQkk0Uy0w/a28ycVZ3V0xlWlc4/TjBBRFZnPQ");
    image.setAttribute("alt","Virat Kohli");
    document.getElementById("content").append(spanEle);
    document.getElementById("content").append(image);
})
