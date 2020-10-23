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

app.get("/holidays",(req,res)=>{
    res.render("holidays");
  })

  app.get("/list",(req,res)=>{
    res.render("list");
  })

  app.post("/search",(req,response)=>{

    var data = req.body.dropdown;
    var year = req.body.year

    console.log(req.body);
    console.log(year)
    
    var url = `https://date.nager.at/api/v2/publicholidays/${year}/${data.split(" ")[0]}`;
    // console.log(url);
    axios.get(url).then((res)=> {
    // console.log(res);
    var dataToBePassed={
      country:data.split(" ")[1],
      data:res.data
    }
    response.render("list",{data:dataToBePassed});
    }).catch((err)=>{
          console.log(err)
          // response.render("error");
        })
    })
  


  app.listen(port, function(){
      console.log('server running on '+ port);
  })
