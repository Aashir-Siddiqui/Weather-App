const apiKey = "5480029367ceae76755721ea591d7b91";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const respones = await fetch (apiUrl + city + `&appid=${apiKey}`);

    if (respones.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
    var data = await respones.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudes.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})