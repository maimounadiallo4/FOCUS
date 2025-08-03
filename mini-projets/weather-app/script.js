const apiKey = 'c8782969485e0a0d76c469a0e9bcea90'; 
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    cityName.textContent = data.name;
                    temperature.textContent = `Température: ${data.main.temp}°C`;
                    description.textContent = `Description: ${data.weather[0].description}`;
                } else {
                    alert('Ville non trouvée!');
                }
            })
            .catch(error => console.error('Erreur lors de la récupération des données météo:', error));
    }
});