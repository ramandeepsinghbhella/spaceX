const axios = require('axios');
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let url = "https://api.spacexdata.com/v3/launches?limit=100";

    axios.get(url)
    .then(function (response) {
        res.render("index", {FullData:(response.data)});
    })
    .catch(function (error) {
        // handle error
        res.send(error);
    })
});

app.post("/launch_year", function (req, res) {
    const launchYear = req.body.year;
    var url = "https://api.spacexdata.com/v3/launches?launch_year="+launchYear;
    axios.get(url)
        .then(function (response) {
            // handle success
            res.render("index", {FullData:(response.data)});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.post("/successful_launch", function(req, res){
    var url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true";
    axios.get(url)
        .then(function (response) {
            // handle success
            res.render("index", {FullData:(response.data)});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.post("/unsucessful_launch", function(req, res){
    var url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=false";
    axios.get(url)
        .then(function (response) {
            // handle success
            res.render("index", {FullData:(response.data)});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.post("/successful_land", function(req, res){
    var url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true";
    axios.get(url)
        .then(function (response) {
            // handle success
            res.render("index", {FullData:(response.data)});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

app.post("/unsucessful_land", function(req, res){
    var url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false";
    axios.get(url)
        .then(function (response) {
            // handle success
            res.render("index", {FullData:(response.data)});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});







app.listen(3000, function () {
    console.log("server started");
});