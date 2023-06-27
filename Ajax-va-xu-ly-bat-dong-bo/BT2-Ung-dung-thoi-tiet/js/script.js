const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const defaultApiConfig = {
    lat: 0,
    lon: 0,
    units: "metric",
    lang: "en",
    apiKey: "ee28afe45d0af688efc6e90041910bc3",
};
const createLocationToGeoCodingRequest = (city) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${defaultApiConfig.apiKey}`;
const createWetherRequest = (apiConfig) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${apiConfig.lat}&lon=${apiConfig.lon}&units=${apiConfig.units}&lang=${apiConfig.lang}&appid=${apiConfig.apiKey}`;
const getWeatherIconURL = (iconCode) =>
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

const curentCity = {
    name: "",
    data: [],
};
const findCity = (city) => {
    axios
        .get(createLocationToGeoCodingRequest(city))
        .then((response) => {
            if (response.status === 200) {
                curentCity.data = response.data.map((item) => ({
                    name: item.name,
                    lat: item.lat,
                    lon: item.lon,
                }));
                appendCityList();
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
const appendCityList = () => {
    const cityList = $("#city-list");
    cityList.innerHTML = curentCity.data
        .map(
            (item) => `
    <button type="button" class="list-group-item list-group-item-action">${item.name}</button>
    `
        )
        .join("");
    const listItems = cityList.getElementsByTagName("button");
    for (let index in listItems) {
        listItems[index].onclick = (e) => {
            const activeItem = cityList.querySelector(".active");
            if (activeItem) {
                activeItem.classList.remove("active");
            }
            e.target.classList.add("active");
            showResult(index);
        };
    }
};
const showResult = (index) => {
    const config = {
        ...defaultApiConfig,
        lat: curentCity.data[index].lat,
        lon: curentCity.data[index].lon,
    };
    axios.get(createWetherRequest(config)).then((response) => {
        if (response.status === 200) {
            $("#current-weather").innerHTML = "";
            renderCurrentWeather(response.data);
        }
    });
};
const renderCurrentWeather = (data) => {
    $("#current-weather").innerHTML = `
    <div class="col-3 text-center">
        <img src="${getWeatherIconURL(data.weather[0].icon)}" alt="${
        data.weather[0].description
    }" class="img-fluid">
        <p class="text-danger text-uppercase">${data.weather[0].description}</p>
    </div>
    <div class="col-3 text-center">
        <h2 class="fw-bold">${data.main.temp} °C</h2>
        <p>Feels like <span class="fw-bold">${
            data.main.feels_like
        } °C</span></p>
    </div>
    <div class="col-2">
        <p>Min temp: <span class="fw-bold">${data.main.temp_min} °C</span></p>
        <p>Max temp: <span class="fw-bold">${data.main.temp_max} °C</span></p>
    </div>
    <div class="col-2">
        <p>Humidity: <span class="fw-bold">${data.main.humidity}%</span></p>
        <p>Pressure: <span class="fw-bold">${data.main.pressure}</span></p>
    </div>
    <div class="col-2">
        <p>Wind speed: <span class="fw-bold">${data.wind.speed}</span></p>
        <p>Wind deg: <span class="fw-bold">${data.wind.deg}</span></p>
    </div>
    `;
};

$("#find-btn").onclick = (e) => {
    const cityName = $("#city-name").value;
    if (cityName) {
        curentCity.name = cityName;
        findCity(cityName);
    }
};
