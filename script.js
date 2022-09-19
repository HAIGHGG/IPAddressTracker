var map = L.map('map', { zoomControl: false }).setView([34.04915, -118.09462], 13);
document.getElementById("map").removeAttribute("tabIndex")

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([34.04915, -118.09462]).addTo(map);


const ipAddres = document.querySelector('.ip-addres')
const city = document.querySelector('.city')
const region = document.querySelector('.region')
const timezone = document.querySelector('.timezone')
const isp = document.querySelector('.isp')
const btn = document.querySelector('.search-field')

const inputIp = document.querySelector('.ip-input')
const API_LINK = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_ED6ocglchz44LVBe9HwiUJ2EzzNIx&ipAddress='


const getLocation = () => {
    const ip = inputIp.value || '192.212.174.104'
    const URL = API_LINK + ip
    fetch(API_LINK+ip)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        ipAddres.textContent = data.ip
        city.textContent = data.location.city
        region.textContent = data.location.region
        timezone.textContent = data.location.timezone
        isp.textContent = data.isp
        map.flyTo([data.location.lat, data.location.lng], 13)
        marker.setLatLng([data.location.lat, data.location.lng])
    })


}



btn.addEventListener('click', getLocation)

inputIp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getLocation()
    }
});











