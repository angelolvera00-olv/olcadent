document.addEventListener("DOMContentLoaded", function () {

    const mapContainer = document.getElementById("map");

    if (!mapContainer) return; // evita error en otras páginas

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=hMJf6a16fB6q7UjhzmoS',
        center: [-97.83434717534753, 22.249451943256616],
        zoom: 20
    });

    new maplibregl.Marker()
        .setLngLat([-97.83434717534753, 22.249451943256616])
        .addTo(map);

});
