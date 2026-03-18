// async function fetchData(city) {
//     try {
//         const API_key = "1de0181b6dd424271dec30b076344656";
//         const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric);

//         const data = await response.json();
//         console.log(city);
//         console.log(data.main.temp);
//         console.log(data.main.humidity);
//     } catch (err) {
//         console.error(err);
//     }
// }
// fetchData("london")
async function fetchData(city) {
    try {
        const API_key = "1de0181b6dd424271dec30b076344656";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1de0181b6dd424271dec30b076344656`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")




