const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragaraph .";
console.log(newParagraph);

const container = document.getElementById("container");
container.appendChild(newParagraph);

const rev = document.querySelector("#container p");
rev.remove();

// or alternate method where we'll be not assisgning a new variable for removing process||
// document.querySelector("#container p").remove();

const image = document.createElement("img");
image.setAttribute("src" , "https://imgs.search.brave.com/tA4GGA4fZ7tQuApx2apSfJ68hC4gta-qosCAYZwOtQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NzYwNjU2OS9waG90/by9sb25kb24tZW5n/bGFuZC12aXJhdC1r/b2hsaS1vZi1pbmRp/YS13YWl0cy1iZWZv/cmUtYmF0dGluZy1k/dXJpbmctZGF5LWZp/dmUtb2YtdGhlLWlj/Yy13b3JsZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RzA2/X0VNNTkyWXA3al9t/MzhvSDB3UTNhM3cx/ay1kU0ZGUVA4TXZk/bkRuWT0");
image.setAttribute("alt" , "Virat KOhli image");
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

//  Date method

let date = new Date()
console.log(date);

setInterval( () =>{
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

})