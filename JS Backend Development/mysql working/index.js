const express = require("express");
const mysql  = require("mysql");
const app = express();

const port = 4000;
app.set("view engine","ejs");

// creating db connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"emp"
});
db.connect((err)=>{
    if(err){
        console.log("you fucked up!")
    }
    else{
        console.log("all good!")
    }
});

var BEdata;
var query  = `insert into empDetails(name, age) value ("Aman", 45);`;
var query2 = `select * from empDetails;`;
var jsonData = {
    name: "vikas",
    age:54
}

var query3 = `insert into empdetails SET ?;`;

db.query(query3,jsonData,(err,results)=>{
    if(err)
        console.log(err);
    else{
       BEdata = results;
       console.log("data saved!")
    }
        
});

// db.query(query,(err,results)=>{
//     if(err)
//         console.log(err);
//     else{
//        BEdata = results;
//        console.log(results);
//     }
        
// });

app.get("/",(req,res)=>{
    res.send("everything good!")
})

app.get('/showResults',(req,res)=>{
    res.render("showResults",{FEdata:BEdata});
    console.log(FEdata);
})
app.listen(port,function(){
    console.log(`app running on ${port}`)
})