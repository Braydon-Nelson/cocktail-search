const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Sign in page route
    app.get("/login", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    // Sign up page route
    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
};