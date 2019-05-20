const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/register", function (req, resp) {
    resp.render("register");
});

app.post("/register", function (req, resp) {
    resp.send("Post " + req.body.fullName + " - " + req.body.username);
});

app.listen(port, function () {
    console.log("App started success, port " + port);
})