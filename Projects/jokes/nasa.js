var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('express');

var axios = require('axios');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
//making routes.
// static assests -> public -> styles, images and icons, etc.
// use and set?
//
app.use(express.static("public")); // to specify to look out static assets in public folder.
app.set("view engine","ejs"); // view engine is a engine which views/renders the page, you gotta specify which templating engine you are using.

app.get("/nasa",(req,res)=>{
    res.render("nasa-home");
  })

  app.get("/viewdetails",(req,res)=>{
    res.render("viewdetails");
  })

  app.post("/search",(req,response)=>{
    
    var url = `https://apodapi.herokuapp.com/api/?count=5`;
    console.log(url);
    axios.get(url).then((res)=> {
    console.log(res);
    response.render("viewdetails",{data:res.data});
  
    }).catch((err)=>{
          console.log(err)
          // response.render("error");
        })

    })
  
  app.listen(port, function(){
      console.log('server running on '+ port);
  })

