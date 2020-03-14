let signedIn = localStorage.getItem('signedIn');
let userSignedIn = localStorage.getItem('userSignedIn');
if (signedIn == "true") {
    let userArea = document.querySelector("#userArea").innerHTML = `<a id="navLinks" class="nav-link userButton" href="#">${userSignedIn}</a> | <a id="navLinks" class="nav-link logout" href="/">Logout</a>`;

}

$("#random").click(function () {
    let queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryUrl, method: "GET"
    }).then(function (data) {
        console.log(data);
        $(".card").removeClass("invisible");

        // $(".card").attr('style', 'display: none;')

        $(".card-img-top").attr("src", data.drinks[0].strDrinkThumb);
        $(".card-title").text(data.drinks[0].strDrink);
        for (let index = 1; index <= 3; index++) {
            if (data.drinks[0]["strMeasure" + index] !== null) {
                $(`.${index}`).text(data.drinks[0]["strMeasure" + index] + " " + data.drinks[0]["strIngredient" + index]);
            }
        }
        $(".card-text").text(data.drinks[0].strInstructions);
    });
});

$(".logout").click(function () {
    localStorage.clear();
})

$(document).ready(function () {

    $(function () {
        $('[data-toggle="popover"]').popover()
    })


});

