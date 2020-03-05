const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Sign in page route
    app.get("/sign-in", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/sign-in.html"));
    });
    // Sign up page route
    app.get("/sign-up", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/sign-up.html"));
    });
};