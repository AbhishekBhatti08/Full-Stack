const express = require("express");
const mysql = require('mysql');
const bodyParser = require("body-parser");
const cors = require('cors');

const app  = express();

app.use(cors);

app.use(bodyParser.urlencoded({ extended: true}))

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"twitter"
})

db.connect((err)=>{
    if(!err)
    console.log("all good bud! -> DB running")
});


const port = 4000;

app.use(express.static('public'))
app.set("view engine","ejs");


app.get('/',(req,res)=>{
    var query = `select * from tweets;`;
    var data;
    db.query(query,(err,results)=>{
        if(err){
            console.log("you fucked up!")
        }
        else{
            return results;
        }
    })
    // console.log("data->",data)
})


app.post("/postTweet",(req,res)=>{
    console.log("hello");
    console.log(req.body);
    var data = req.body;
    console.log(data);

     res.send('data from backend');
    

    var sql = `insert into tweets set ?`;
    var sort = 'select * from tweets order by ts desc';
    
    console.log(req.body);
    db.query(sql,data,(err,results)=>{
        if(err){
            console.log("Tweet not saved!")
        }
        else{
            
                db.query(sort,(err,result)=>{
                if (err) {throw err,
                console.log("Tweet saved!")
                }

                else {
                    return result;
                }
            });
        }
    
    })   
    setTimeout(() => {
        res.redirect("http://localhost:3000");
    }, 1000);
    

}


)

app.listen(port, function(){
    console.log(`App running on ${port}`)
})