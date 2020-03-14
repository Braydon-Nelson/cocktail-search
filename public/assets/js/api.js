$(document).ready(function () {


    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        submitCards()
    }, false);

    function submitCards() {
        var selectedOption = document.getElementById("optionsButton").value;
        var searchText = document.getElementById("searchBar").value;


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

        function containsAlcohol() {
            var alcohol = document.getElementById("Checkmark").checked;
            if (alcohol === true) {
                api += "&a=Alcohol";
            } else if (alcohol === false) {
                api += "&a=Non_Alcoholic"
            }
        };


        var settings = {
            "url": api,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            callback(response);
        });

    };


    function callback(APIdata) {
        for (i = 0; i < APIdata.length; i++) {

            var cardData = {}

            cardData.name = APIdata.drinks[0].strDrink;
            cardData.alcoholic = APIdata.drinks[0].strAlcoholic;
            cardData.glass = APIdata.drinks[0].strGlass;
            cardData.instructions = APIdata.drinks[0].strInstructions;
            cardData.image = APIdata.drinks[0].strDrinkThumb;
            cardData.ingredient1 = APIdata.drinks[0].strIngredient1;
            cardData.measure1 = APIdata.drinks[0].strMeasure1;
            cardData.ingredient2 = APIdata[i].drinks.strIngredient2;
            cardData.measure2 = APIdata[i].drinks.strMeasure2;
            cardData.ingredient3 = APIdata[i].drinks.strIngredient3;
            cardData.measure3 = APIdata[i].drinks.strMeasure3;

        }

        var creatingCard = document.createElement('div');
        creatingCard.classList.add('card');
        creatingCard.style.width = '400px';
        document.getElementsByClassName("dynamicCards")[0].appendChild(creatingCard);

        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        creatingCard.appendChild(cardBody);

        var title = document.createElement('h4');
        title.classList.add('card-title');
        title.innerHTML = APIdata.drinks[0].strDrink;
        cardBody.appendChild(title);

        var image = document.createElement('img');
        image.classList.add('card-img-top');
        image.style.width = '100%';
        image.setAttribute('src', APIdata.drinks[0].strDrinkThumb);
        cardBody.appendChild(image);

        var ul = document.createElement('ul');
        ul.classList.add('list-group-item', 'list-group-item-action');
        var in1 = document.createElement('p');
        in1.innerHTML = APIdata.drinks[0].strMeasure1 + " " + APIdata.drinks[0].strIngredient1;

        var in2 = document.createElement('p');
        in2.innerHTML = APIdata.drinks[0].strMeasure2 + " " + APIdata.drinks[0].strIngredient2;

        var in3 = document.createElement('p');
        in3.innerHTML = APIdata.drinks[0].strMeasure3 + " " + APIdata.drinks[0].strIngredient3;

        cardBody.appendChild(ul);
        ul.appendChild(in1);
        ul.appendChild(in2);
        ul.appendChild(in3);



    };

});

