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

        // $.ajax({
        //     url: api, method: "GET"
        // }).then(function (data) {
        //     console.log(data);
        //     $(".card").removeClass("invisible");

        //     $(".card-img-top").attr("src", data.drinks[0].strDrinkThumb);
        //     $(".card-title").text(data.drinks[0].strDrink);
        //     for (let index = 1; index <= 16; index++) {
        //         if (data.drinks[0]["strMeasure" + index] !== null || undefined) {
        //             $(`.${index}`).text(data.drinks[0]["strMeasure" + index] + " " + data.drinks[0]["strIngredient" + index]);
        //         }
        //     }
        //     $(".card-text").text(data.drinks[0].strInstructions);
        // });

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

        var ul = document.createElement('ul');
        var text = document.createElement('li');
        text.classList.add('list-group-item', 'list-group-item-action');
        text.innerHTML = APIdata.drinks[0].strIngredient1;
        text.innerHTML = APIdata.drinks[0].strMeasure1;
        text.innerHTML = APIdata.drinks[0].strIngredient2;
        text.innerHTML = APIdata.drinks[0].strMeasure2;
        text.innerHTML = APIdata.drinks[0].strIngredient3;
        text.innerHTML = APIdata.drinks[0].strMeasure3;
        cardBody.appendChild(ul);
        ul.appendChild(text);

        var image = document.createElement('img');
        image.classList.add('card-img-bottom');
        image.style.width = '100%';
        image.setAttribute('src', APIdata.drinks[0].strDrinkThumb);
        cardBody.appendChild(image);


    };

});

