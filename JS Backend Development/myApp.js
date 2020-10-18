var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('express');

var axios = require('axios');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
//making routes.
// static assests -> public -> styles, images and icons, etc.
// pages -> views
// use and set?
//
app.use(express.static("public")); // to specify to look out static assets in public folder.
app.set("view engine","ejs"); // view engine is a engine which views/renders the page, you gotta specify which templating engine you are using.

// app.get("/",(req,res)=>{
//   res.render("home")
// })

// var recipes = [{
//   name:"Burger",
//   imgUrl:"http://localhost:3000/burger.jpg"
// },{
//   name:"Pizza",
//   imgUrl:""
// },{
//   name:"Lasagna",
//   imgUrl:""
// },{
//   name:"Mojito",
//   imgUrl:""
// }];
// app.get("/recipes",(req,res)=>{
//   res.render("recipes",{recipes:recipes});
// })

// var restaurant = [{
//   name:"Om Sweets & Snacks",
//   imgUrl:""
// },{
//   name:"Dominos Pizza",
//   imgUrl:""
// },{
//   name:"Diggin",
//   imgUrl:""
// },{
//   name:"The Big Chill Cafe",
//   imgUrl:""
// }];

// app.get("/recipes",(req,res)=>{
//   res.render("recipes",{recipes:recipes});
// })

// app.get("/restaurant",(req,res)=>{
//   // var x = req.params.restaurant;
//   res.render("restaurant",{restaurant:restaurant});
// })

// app.get("/dogs/:breed",(req,res)=>{
//   var x = req.params.breed;
//   res.render("breed",{dogBreed:x});
// })

// app.post("/addRecipe",(req,res)=>{
//   var obj = {
//             name:req.body.recipeName,
//             imgUrl:"",
//             };
//   recipes.push(obj);
//   res.redirect("/recipes");
// })

// app.post("/addRes",(req,res)=>{
//   var obj = {
//             name:req.body.resName,
//             imgUrl:"",
//             };
//   restaurant.push(obj);
//   res.redirect("/restaurant");
// })

// app.get("/github",(req,res)=>{
//   res.render("github");
// })
// app.get("/profile",(req,res)=>{
//   res.render("profile");
// })
// app.post("/search",(req,response)=>{
//   var name = req.body.user;
//   var url = `https://api.github.com/search/users?q=${name}`
//   axios.get(url).then((res)=>{
//     console.log(typeof(res.data.items))
//     response.render("profile",{cards:cards.image});
//   }).catch((err)=>{
//     console.log(err)
//     response.render("error");
//   })
  
// })

app.get("/cards",(req,res)=>{
  res.render("cards");
})

app.get("/viewCards",(req,res)=>{
  res.render("viewCards");
})


app.post("/search",(req,response)=>{
  var count = req.body.count;
  var url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${count}`;
  console.log(count);
  axios.get(url).then((res)=> {

    console.log(res.data.cards);

    response.render("viewCards",{data:res.data.cards});

  }).catch((err)=>{
        console.log(err)
        // response.render("error");
      })
})


app.listen(port, function(){
    console.log('server running on '+ port);
})