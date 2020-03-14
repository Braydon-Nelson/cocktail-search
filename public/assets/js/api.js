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
        api = "https://www.thecocktaildb.com/api/json/v1/1/";

        switch (selectedOption) {
            case "1":
                api += "search.php?s=" + searchText;
                break;
            case "2":
                api += "filter.php?i=" + searchText;
                break;
            case "3":
                api += "filter.php?g=" + searchText
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

        $.ajax({
            url: api, method: "GET"
        }).then(function (data) {
            console.log(data);
            $(".card").removeClass("invisible");

            $(".card-img-top").attr("src", data.drinks[0].strDrinkThumb);
            $(".card-title").text(data.drinks[0].strDrink);
            for (let index = 1; index <= 16; index++) {
                if (data.drinks[0]["strMeasure" + index] !== null) {
                    $(`.${index}`).text(data.drinks[0]["strMeasure" + index] + " " + data.drinks[0]["strIngredient" + index]);
                }
            }
            $(".card-text").text(data.drinks[0].strInstructions);
        });

    };

    // var elem = document.createElement('div');
    // var test = document.createTextNode('test test');
    // elem.appendChild(test);
    // document.body.appendChild(elem);

    // function callback(APIdata) {
    //     for (i = 0; i < APIdata.length; i++) {

    //         var cardData = {}

    //         cardData.name = APIdata[i].drinks.strDrink;
    //         cardData.alcoholic = APIdata[i].drinks.strAlcoholic;
    //         cardData.glass = APIdata[i].drinks.strGlass;
    //         cardData.instructions = APIdata[i].drinks.strInstructions;
    //         cardData.image = APIdata[i].drinks.strDrinkThumb;
    //         cardData.ingredient1 = APIdata[i].drinks.strIngredient1;
    //         cardData.measure1 = APIdata[i].drinks.strMeasure1;

    //     }

    //     var creatingCard = document.createElement('div');
    //     creatingCard.classList.add('card');
    //     creatingCard.style.width = '400px';

    //     var cardBody = document.createElement('div');
    //     cardBody.classList.add('card-body');

    //     var title = document.createElement('h4');
    //     title.classList.add('card-title');
    //     //add api call for drink name

    //     var text = document.createElement('li');
    //     text.classList.add('list-group-item list-group-item-action');
    //     //add api call for ingredients

    //     var image = document.createElement('img');
    //     image.classList.add('card-img-bottom');
    //     image.style.width = '100%';
    //     //add api call for drink img




    // };

});

