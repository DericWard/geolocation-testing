let lat;
let lon;
let marker;
let map;

// let map;

function findMe() {

    navigator.geolocation.getCurrentPosition((position) => {

        lat = position.coords.latitude;

        lon = position.coords.longitude;
      
        map = L.map('map').setView([lat, lon], 17);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
      
        marker = L.marker([lat, lon]).addTo(map);
                
       }) ;
} ;


function followMe() {
    
    navigator.geolocation.watchPosition((position) => {
        
        lat = position.coords.latitude;

        lon = position.coords.longitude;
      
        map = L.map('map').setView([lat, lon], 17);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
      
        marker = L.marker([lat, lon]).addTo(map);
                
       }) ;
} ;