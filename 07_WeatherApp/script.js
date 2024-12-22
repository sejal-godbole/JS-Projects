const apiKey = 'f2f93dbafa57e2a84da58e7555d95157'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore'

async function checkWeather () {
    const response = await fetch(apiUrl  + &appid = $apiKey)
    var data = await response.json()

    console.log(data)
}
