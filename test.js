const mongoose = require("mongoose");
const User = require("./models/User");


mongoose.connect('mongodb://localhost/portfolio-db-tst').then(() => {
  console.log("DB Connect!");
});

User.create({ 
  name: 'Enes',
  surName:'Çakır',
  description:"I'm a freelance creative web developer in İstanbul.",
  altDescription:"Actually, I'm a final year computer engineering student right now.",
  social:{
    linkedin:"https://www.linkedin.com/in/kuzudoli/",
    instagram:"http://instagram.com/kuzudoli/",
    github:"https://github.com/kuzudoli/"
  },
  education:{
    highschool:{
      name:"Ahmet Rasim Anatolian Highschool",
      graduation:"2018"
    },
    university:{
      name:"Duzce University, Computer Engineering",
      graduation:"2022"
    }
  },
  skills:[
    "C++",
    "Java",
    "ASP .NET",
    "NodeJS",
    "HTML/CSS",
    "MsSQL",
    "PostgreSQL",
    "MongoDB",
    "Solidity"
  ],
  skillsLearning:[
    "React",
    "JQuery"
  ]
  }, function (err, small) {
    if (err) return handleError(err);
    return;// saved!
  }
)