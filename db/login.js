const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/login").then(() => {
    console.log("admin db is connected.....!");
}).catch((err) => {
    console.log("admin db is not connected.....!", err);
})