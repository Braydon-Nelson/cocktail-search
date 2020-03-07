<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

$(document).ready(function () {
    // up here have code that grabs the dropdown option and search text



    // move on here
    api = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";

    switch (dropDownOption) {
        case "Search by name":
            api += "s=" + searchText;
            break;
        case "Search by ingredients ":
            api += "i=" + searchText;
            break;
        case "Search by glass":
            api += "g=" + searchText;
            break;
    };

    //if statement for checkmark to decide whether or not its alcoholic
    function containsAlcohol() {
        var alcohol = document.getElementById("Checkmark").checked;
        if (alcohol === true) {
            api += "&a=Alcohol";
        } else if (alcohol === false) {
            api += "&a=Non_Alcoholic"
        }
    };

    //ajax call
    var settings = {
        "url": api,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).then(function (response) {
        console.log(response);
    });


});