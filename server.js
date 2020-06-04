const express = require("express");
const compression = require("compression");
var passport = require("./config/passport");

const app = express();
app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());


require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);

db.sequelize.sync({ force: true, alter: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});