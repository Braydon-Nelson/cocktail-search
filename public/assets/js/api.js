$(document).ready(function () {
    //grabs the dropdown option and search text
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        submitCards()
    }, false);

    function submitCards() {
        var selectedOption = document.getElementById("optionsButton").value;
        var searchText = document.getElementById("searchBar").value;


        // move on here
        api = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";

        switch (selectedOption) {
            case "1":
                api += "s=" + searchText;
                break;
            case "2":
                api += "i=" + searchText;
                break;
            case "3":
                api += "g=" + searchText
                break;
        };

        console.log(api);

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

    };

});