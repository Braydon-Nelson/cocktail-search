const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));


$(document).ready(function () {

    // -------------------------------------------------------------------------Sign in section

    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function () {
                window.location.replace("/index");
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
        console.log("!!!!!!!!!!!!!SUCCESS!!!!!!!!!!!!!");

    }

    // -------------------------------------------------------------------------Sign up section
    var signUpForm = $("form.signup");
    var usernameInput = $('input#username');
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password || !userData.username) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.username, userData.email, userData.password);
        usernameInput.Val("");
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
        $.post("/api/signup", {
            username: username,
            email: email,
            password: password
        })
            .then(function (data) {
                window.location.replace("/members");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});
