let logBox = document.getElementById("log")
let historyBox = document.getElementById("history")

function log(text){
logBox.innerHTML += text + "<br>"
console.log(text)
}

function saveHistory(city){

let list = JSON.parse(localStorage.getItem("cities")) || []

if(!list.includes(city)){
list.push(city)
}

localStorage.setItem("cities",JSON.stringify(list))

showHistory()
}

function showHistory(){

historyBox.innerHTML=""

let list = JSON.parse(localStorage.getItem("cities")) || []

list.forEach(function(city){

let btn = document.createElement("button")

btn.innerText = city

btn.onclick = function(){
getWeather(city)
}

historyBox.appendChild(btn)

})
}

async function searchWeather(){

let city = document.getElementById("city").value

getWeather(city)

}

async function getWeather(city){

log("Sync Start")

try{

log("API Start fetching")

let res = await fetch("https://wttr.in/"+city+"?format=j1")

let data = await res.json()

log("Process (Microtask)")

document.getElementById("cityName").innerText = city
document.getElementById("temp").innerText = data.current_condition[0].temp_C+" °C"
document.getElementById("weather").innerText = data.current_condition[0].weatherDesc[0].value
document.getElementById("humidity").innerText = data.current_condition[0].humidity+"%"
document.getElementById("wind").innerText = data.current_condition[0].windspeedKmph+" km/h"

saveHistory(city)

}catch(e){

document.getElementById("cityName").innerText="City not found"

}

setTimeout(function(){
log("setTimeout (Macrotask)")
},0)

}

showHistory()