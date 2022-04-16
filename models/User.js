const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    surName: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    altDescription:String,
    social:{
        type:Object,
        linkedin:String,
        instagram:String,
        github:String,
        facebook:String,
        youtube:String
    },
    education:{
        type:Object,
        highschool:{
            type:String,
            name:String,
            graduation:String,   
        },
        university:{
            type:String,
            name:String,
            graduation:String,   
        }
    },
    skills:{
        type:Array,
        required:true
    },
    skillsLearning:Array
});

const User = mongoose.model("User",userSchema);


module.exports = User;