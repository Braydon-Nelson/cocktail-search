$(document).ready(function () {

    var map;
    var service;
    var infowindow;
    function initialize() {
        var sandy = new google.maps.LatLng(40.586680, -111.895080);
        map = new google.maps.Map(document.getElementById('map'), {
            center: sandy,
            zoom: 15
        });
        var request = {
            location: sandy,
            radius: '500',
            type: ['liquor store']
        };
        service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, callback);

        service.textSearch(request, callback);

    }
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    var settings = {
        "url": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFK5Zw23f4gfIGvnMwCVk5seAXh6whHW8&libraries=places",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    geo = navigator.geolocation

    function geoFindMe() {

        const status = document.querySelector('#status');
        const mapLink = document.querySelector('#map-link');

        mapLink.href = '';
        mapLink.textContent = '';

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            status.textContent = '';
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        }

        function error() {
            status.textContent = 'Unable to retrieve your location';
        }

        if (!navigator.geolocation) {
            status.textContent = 'Geolocation is not supported by your browser';
        } else {
            status.textContent = 'Locating…';
            navigator.geolocation.getCurrentPosition(success, error);
        }

    }

    document.querySelector('#find-me').addEventListener('click', geoFindMe);

});