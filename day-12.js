// const textInput=document.getElementById("myInput");
// textInput.addEventListener(change,(event)=>{
//     event.preventDefault(),
//     console.log(event.target.value);
// })

// const form=document.getElementById("formInput");
// const textInput=document.getElementById("myInput");
// const courseInput=document.getElementById("course");
// const output=document.getElementById("output");
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     const name=textInput.value
//     const course=courseInput.value
//     console.log(name);
//     output.innerText=name+" "+course
// })

const form = document.getElementById("formInput")
const textInput = document.getElementById("myInput")
const courseInput = document.getElementById("course")
const output = document.getElementById("output")

form.addEventListener("submit",(event)=>{
    event.preventDefault( );

    const name = textInput.value
    const course = courseInput.value
    console.log(name);

    output.innerText = name + " " + course
})