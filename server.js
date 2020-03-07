const express = require("express");
var passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());


require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});