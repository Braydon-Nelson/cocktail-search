$(document).ready(function () {

    //geolocation API
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

    //google map
    // function initAutocomplete() {
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: -33.8688, lng: 151.2195 },
    //         zoom: 13,
    //         mapTypeId: 'roadmap'
    //     });

    //     // Create the search box and link it to the UI element.
    //     var input = document.getElementById('pac-input');
    //     var searchBox = new google.maps.places.SearchBox(input);
    //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    //     // Bias the SearchBox results towards current map's viewport.
    //     map.addListener('bounds_changed', function () {
    //         searchBox.setBounds(map.getBounds());
    //     });

    //     var markers = [];
    //     // Listen for the event fired when the user selects a prediction and retrieve
    //     // more details for that place.
    //     searchBox.addListener('places_changed', function () {
    //         var places = searchBox.getPlaces();
    //         if (places.length == 0) {
    //             return;
    //         }

    //         // Clear out the old markers.
    //         markers.forEach(function (marker) {
    //             marker.setMap(null);
    //         });

    //         markers = [];

    //         // For each place, get the icon, name and location.
    //         var bounds = new google.maps.LatLngBounds();
    //         places.forEach(function (place) {
    //             if (!place.geometry) {
    //                 console.log("Returned place contains no geometry");
    //                 return;
    //             }
    //             var icon = {
    //                 url: place.icon,
    //                 size: new google.maps.Size(71, 71),
    //                 origin: new google.maps.Point(0, 0),
    //                 anchor: new google.maps.Point(17, 34),
    //                 scaledSize: new google.maps.Size(25, 25)
    //             };

    //             // Create a marker for each place.
    //             markers.push(new google.maps.Marker({
    //                 map: map,
    //                 icon: icon,
    //                 title: place.name,
    //                 position: place.geometry.location
    //             }));

    //             if (place.geometry.viewport) {
    //                 // Only geocodes have viewport.
    //                 bounds.union(place.geometry.viewport);
    //             } else {
    //                 bounds.extend(place.geometry.location);
    //             }
    //         });
    //         map.fitBounds(bounds);
    //     });
    // }



    //Google Maps API
    // var map;
    // var service;
    // var infowindow;
    // function initialize() {
    //     var sandy = new google.maps.LatLng(40.586680, -111.895080);
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: sandy,
    //         zoom: 15
    //     });
    //     var request = {
    //         location: sandy,
    //         radius: '500',
    //         type: ['liquor store']
    //     };
    //     service = new google.maps.places.PlacesService(map);

    //     service.nearbySearch(request, callback);

    //     service.textSearch(request, callback);

    // }
    // function callback(results, status) {
    //     if (status == google.maps.places.PlacesServiceStatus.OK) {
    //         for (var i = 0; i < results.length; i++) {
    //             createMarker(results[i]);
    //         }
    //     }
    // }

    // var settings = {
    //     "url": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFK5Zw23f4gfIGvnMwCVk5seAXh6whHW8&libraries=places",
    //     "method": "GET",
    //     "timeout": 0,
    // };

    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });


});