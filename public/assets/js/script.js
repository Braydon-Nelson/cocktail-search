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

});