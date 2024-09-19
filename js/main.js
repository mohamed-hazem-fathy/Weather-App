
const serchbtn = document.querySelector(".search button");


serchbtn.addEventListener("click", () => {
  const apiKey = "bb6b6c7d9f864f57d100632aea45b9e3";
  const city =  document.querySelector(".search input").value;

  if(city =='')
    return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`).then(respons => respons.json()).then(json => {

      const image = document.querySelector(".weather img")
      const temp = document.querySelector(".temp")
      const nameOfCity = document.querySelector(".city")
      const humidity =  document.querySelector(".humidity")
      const wind = document.querySelector(".wind")
        switch (json.weather[0].main) {
          case 'Clear':
            image.src ='images/clear.png'
            break;

            case 'Rain':
            image.src ='images/rain.png'
            break;
            case 'Snow':
            image.src ='images/snow.png'
            break;
            case 'Clouds':
            image.src ='images/cloud.png'
            break;

            case 'Mist':
            image.src ='images/mist.png'
            break;

            case 'Haze':
            image.src ='images/mist.png'
            break;

            default:
              imge.src = 'images/cloud.png';
        }

        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
        nameOfCity.innerHTML = `${json.name}`
        humidity.innerHTML = `${json.main.humidity}%`
        console.log(json)
       wind.innerHTML = `${json.wind.speed}km/h`


    })

})



