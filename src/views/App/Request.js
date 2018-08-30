

export const workWithResponse = (res, city) =>{
  let result = [];

  const length = res.list.length;
  let weather;
  for(let i = 0; i < length; i++){
    weather = res.list.shift();
    if(checkHour(weather, i)){
      result.push(weather);
    }
  }

  result = formatResultArray(result, city);
  return result;
};

//this method select weather for every day at 15:00
function checkHour(weather, index){
  if(weather.dt_txt.split(' ')[1].substr(0, 2) > 15 && index == 0){
    return true;
  } else if (weather.dt_txt.split(' ')[1].substr(0, 2) == 15){
    return true;
  } else{
    return false;
  }
}

//this method addopt the API format to App format
function formatResultArray(arr, city){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result.push({
      city: city,
      date: arr[i].dt_txt.split(' ')[0],
      weatherId: arr[i].weather[0].id,
      iconId: arr[i].weather[0].icon + '.png',
      temp: Math.round(arr[i].main.temp) + ' °C',
      humidity: arr[i].main.humidity + ' %',
    });
  }
  return result;
}
