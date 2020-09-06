"use strict";
let request = require("request");

let  url = "http://www.ukr.net";

request(url, function (error, response, body) {
    if (!error) {
        console.log(body);
    } else {
        console.log("Жахлива помилка: " + error);
    }
}
);
