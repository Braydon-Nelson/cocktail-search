var passport = require("../config/passport");
var db = require("../models");

module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        console.log("Got to the api route");
        res.json(req.user);

    });

    app.post("/api/signup", function (req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect("/");
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post("/api/favorite", function (req, res) {
        db.Favorite.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect("/");
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                id: req.user.id,
                username: req.user.username,
                email: req.user.email,
                password: req.user.password
            });
        }
    });


}