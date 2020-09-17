

const express = require("express");

var app = express();
var port = 3000;

app.use(express.static("public")); // to specify to look out static assets in public folder.
app.set("view engine","ejs");

app.get("/",(req,res) => {
    
    res.render("city");
    
})

app.get("/europe",(req,res)=>{
    res.render("eu")
  })

app.get("/europe/:london",(req,res)=>{
    var x = req.params.london;
    res.render("london",{city:x});
  })
  
app.listen(port, function(){
    console.log('server running on '+ port);
})