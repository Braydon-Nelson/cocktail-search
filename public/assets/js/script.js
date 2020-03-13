let signedIn = localStorage.getItem('signedIn');
let userSignedIn = localStorage.getItem('userSignedIn');
if (signedIn == "true") {
    let userArea = document.querySelector("#userArea").innerHTML = `<a id="navLinks" class="nav-link signupButton" href="signup.html">${userSignedIn}</a> | <a id="navLinks" class="nav-link signupButton" href="signup.html">Logout</a>`;

}


$(document).ready(function () {

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});

