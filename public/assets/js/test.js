// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION


$(".favoriteDrink").on("click", function (event) {
    console.log(this.parentNode);

    $(this.children[0]).attr("src", "assets/images/png/001-martini.png");

    $.post("/api/signup", {
        drinkName: username,
        imgURL: email,
        ingredients: password,
        ingredientMeasurements: asdf,
        description: asdf
    })
        .then(function (data) {
            console.log("Should be redirecting");
            let signedIn = true;
            localStorage.setItem('signedIn', JSON.stringify(signedIn));
            localStorage.setItem('userSignedIn', JSON.stringify(username));

            window.location.replace("/");
            // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);

})




// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION
