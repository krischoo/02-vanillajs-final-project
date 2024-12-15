const API_KEY = "cad0cc253a1e3b43df9c25645c4e0e94";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log("당신의 위치:", lat, lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}1&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherIcon = document.querySelector(".weather-icon");
			const weather = document.querySelector("#weather span:nth-of-type(1)");
			const temperature = document.querySelector(
				"#weather span:nth-of-type(2)"
			);
			const city = document.querySelector("#weather span:nth-of-type(3)");

			weather.innerText = data.weather[0].main;
			temperature.innerText = `${Math.round(data.main.temp)}°C`;
			city.innerText = data.name;
			const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

			const icon = document.createElement("img");
			icon.src = iconUrl;
			weatherIcon.appendChild(icon);
		}); // 실제 URL에 갈 필요 없이 JavaScirpt가 대신 URL을 부른다
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
