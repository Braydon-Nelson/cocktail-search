// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION


$(".favoriteImage").on("click", function (event) {
    event.preventDefault();
    var itemList = [];
    for (let i = 0; i < this.parentNode.children[3].children.length; i++) {
        const element = this.parentNode.children[3].children[i].innerHTML;
        itemList.push(element);
    }

    console.log(this.parentNode.children[0].src);
    $(this.children[0]).attr("src", "assets/images/png/001-martini.png");

    $.post("/api/favorite", {
        drinkName: this.parentNode.children[0].innerHTML,
        imgURL: this.parentNode.children[2].src,
        ingredients: itemList,
        description: this.parentNode.children[4].innerHTML
    })
        .then(function (data) {
            console.log("Posted to db");

            // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch();

})




// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION
// THIS FILE SHOULD BE DELETED FOR PRODUCTION
