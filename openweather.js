const options = {method: 'GET', headers: {Authorization: 'Bearer zpka_18813895939744d7939d680c277ad144_a7f2b0ef'}};

fetch('https://dataservice.accuweather.com/currentconditions/v1/202396', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
