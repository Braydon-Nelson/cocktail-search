const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));


$(document).ready(function () {
    // Getting references to our form and inputs
    let loginForm = $("form.login");
    let usernameInput = $("input#username-input");
    let passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an username and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
            let signedIn = false;
            localStorage.setItem('signedIn', JSON.stringify(signedIn));
            return;
        }

        // If we have an username and password we run the loginUser function and clear the form
        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        })
            .then(function () {
                let signedIn = true;
                localStorage.setItem('signedIn', JSON.stringify(signedIn));
                localStorage.setItem('userSignedIn', JSON.stringify(username));
                window.location.replace("/");
                console.log("SOMETHING WORKED");

            })
            .catch(function (err) {
                let signedIn = false;
                localStorage.setItem('signedIn', JSON.stringify(signedIn));
                console.log("SOMETHING BROKE");

                console.log(err);
            });

    }

    let signUpForm = $("form.signup");
    let signUpUsername = $("input#signUpUsername")
    let signUpEmail = $("input#signUpEmail");
    let signUpPassword = $("input#signUpPassword");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        console.log("submited");

        var userData = {
            username: signUpUsername.val().trim(),
            email: signUpEmail.val().trim(),
            password: signUpPassword.val().trim()
        };
        console.log("User data made");

        if (!userData.email || !userData.password || !userData.username) {
            console.log("Somthing is missing");
            console.log(userData);


            return;
        }

        console.log("Something is there");

        // If we have an email and password, run the signUpUser function
        signUpUser(userData.username, userData.email, userData.password);
        signUpUsername.val("");
        signUpEmail.val("");
        signUpPassword.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(username, email, password) {
        $.post("/api/signup", {
            username: username,
            email: email,
            password: password
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
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});
