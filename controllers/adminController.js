const mongoose = require("mongoose")
const User = require("../models/User")


exports.getAdminPage = async(req,res) => {
    const user = await User.find().then(data=>{return data[0]})
    const name = `${user.name} ${user.surName}`;
    const page = "Home";
    res.status(200).render("admin",{
        name,
        user,
        page
    });
}

//Edus
exports.getEducationsPage = async(req,res) => {
    const user = await User.find().then(data=>{return data[0]})

    const name = `${user.name} ${user.surName}`;
    const page = "Education";
    res.status(200).render("educations",{
        name,
        user,
        page
    });
}

//Single Edu
exports.getEducationPage = async(req,res) => {
    const user = await User.find().then(data=>{return data[0]})
    const name = `${user.name} ${user.surName}`;
    const page = "Education";
    res.status(200).render("education",{
        name,
        user,
        page
    });
}

exports.getSkillsPage = async(req,res) => {
    const user = await User.find().then(data=>{return data[0]})
    const name = `${user.name} ${user.surName}`;
    const page = "Skills";
    res.status(200).render("skills",{
        name,
        user,
        page
    });
}

