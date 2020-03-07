const path = require("path");
var passport = require("../config/passport");
var db = require("../models");

module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });


    // Sign up API POST --- STILL NEED TO MAKE LOGIN!!!
    app.post("/api/signup", function (req, res) {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect("/api/login");
            })
            .catch(function (err) {
                res.json(err);
            });
    });




}