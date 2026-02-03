    const profile = document.getElementById("profile");
    profile.style.backgroundColor="Red";
    profile.style.padding="15px"
    profile.style.textAlign="center"

const Task2 = document.getElementsByClassName("taskclass");
console.log(Task2);
for(let i=0;i<Task2.length;i++){
    Task2[i].style.color="Green"
    Task2[i].style.fontSize="40px"
}
console.log(Task2.length)

