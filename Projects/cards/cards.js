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