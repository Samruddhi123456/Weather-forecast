alert("Hello user");
// REGISTER

async function register(){

    const username =
    document.getElementById(
    "registerUsername").value;

    const password =
    document.getElementById(
    "registerPassword").value;

    const response =
    await fetch(
    "http://localhost:8080/register",

    {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            username,
            password
        })
    });

    const result =
    await response.text();

    if(result==="SUCCESS"){

        alert("✅ Registration Successful");

        window.location.href =
        "login.html";

    }else{

        alert("❌ Registration Failed");
    }
}


// LOGIN

async function login(){

    const username =
    document.getElementById(
    "loginUsername").value;

    const password =
    document.getElementById(
    "loginPassword").value;

    const response =
    await fetch(
    "http://localhost:8080/login",

    {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            username,
            password
        })
    });

    const result =
    await response.text();

    if(result==="SUCCESS"){

        alert("✅ Login Successful");

        window.location.href =
        "dashboard.html";

    }else{

        alert("❌ Invalid Username or Password");
    }
}
const apiKey = "a089137c7e4e682410d77118da9f3a6f";

// WEATHER FUNCTION

async function getWeather(){

    const city =
    document.getElementById("city").value;

    // CURRENT WEATHER

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response =
    await fetch(url);

    const data =
    await response.json();

    document.getElementById("cityName").innerHTML =
    data.name;

    document.getElementById("temp").innerHTML =
    `🌡 Temperature : ${data.main.temp} °C`;

    document.getElementById("humidity").innerHTML =
    `💧 Humidity : ${data.main.humidity}%`;

    document.getElementById("wind").innerHTML =
    `🌬 Wind Speed : ${data.wind.speed} km/h`;

    document.getElementById("pressure").innerHTML =
    `📊 Pressure : ${data.main.pressure} hPa`;

    document.getElementById("condition").innerHTML =
    `☁ Condition : ${data.weather[0].description}`;

    // WEATHER ICON

    document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // FORECAST API

    const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const forecastResponse =
    await fetch(forecastUrl);

    const forecastData =
    await forecastResponse.json();

    let output = "";

    for(let i=0;i<40;i+=8){

        let item = forecastData.list[i];

        output += `

        <div class="forecast-card">

            <p>
            ${item.dt_txt.split(" ")[0]}
            </p>

            <img src=
            "https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">

            <p>
            ${item.main.temp} °C
            </p>

            <p>
            ${item.weather[0].main}
            </p>

        </div>
        `;
    }

    document.getElementById(
    "forecastContainer").innerHTML = output;

    // AQI API

    const lat = data.coord.lat;
    const lon = data.coord.lon;

    const aqiUrl =
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const aqiResponse =
    await fetch(aqiUrl);

    const aqiData =
    await aqiResponse.json();

    document.getElementById("aqi").innerHTML =
    `AQI : ${aqiData.list[0].main.aqi}`;
}

// DARK MODE

function toggleTheme(){

    document.body.classList.toggle("dark");
}