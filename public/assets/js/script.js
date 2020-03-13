let signedIn = localStorage.getItem('signedIn');
let userSignedIn = localStorage.getItem('userSignedIn');
if (signedIn == "true") {
    let userArea = document.querySelector("#userArea").innerHTML = `<a id="navLinks" class="nav-link signupButton" href="signup.html">${userSignedIn}</a> | <a id="navLinks" class="nav-link signupButton" href="signup.html">Logout</a>`;

}

$("#random").click(function () {
    let queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryUrl, method: "GET"
    }).then(function (data) {
        console.log(data);
        $(".card").removeClass("invisible");

        $(".card-img-top").attr("src", data.drinks[0].strDrinkThumb);
        $(".card-title").text(data.drinks[0].strDrink);
        $(".1").text(data.drinks[0].strMeasure1 + " " + data.drinks[0].strIngredient1);
        $(".2").text(data.drinks[0].strMeasure2 + " " + data.drinks[0].strIngredient2);
        $(".3").text(data.drinks[0].strMeasure3 + " " + data.drinks[0].strIngredient3);
        $(".card-text").text(data.drinks[0].strInstructions);

    });
});

$(document).ready(function () {

    $(function () {
        $('[data-toggle="popover"]').popover()
    })


});

