const express = require("express");
const mongoose = require("mongoose");

const pageRoute = require("./routes/pageRoute")
const userRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRoute")

mongoose.connect('mongodb://localhost/portfolio-db-tst').then(() => {
  console.log("DB Connect!");
});

const app = express();

//Template Engine
app.set("view engine","ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",pageRoute)
app.use("/user",userRoute)
app.use("/admin",adminRoute)


const port = 7000;
app.listen(port,() => {
  console.log("http://localhost:7000");
})