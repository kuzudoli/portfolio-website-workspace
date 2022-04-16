const mongoose = require("mongoose")
const User = require("../models/User")


exports.getHomePage = async(req,res) => {
    const user = await User.find().then(data=>{return data[0]})
    //console.log(user);
    res.render("index",{
        user
    });
}