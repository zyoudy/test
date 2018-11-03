var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var staticFiles = require ('serve-static');
// const fs = require('fs');
// const os = require('os');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// log all api traffic to console
app.use('api/*',req=>{
    console.log(req);
    next();
});



app.post('/api/login', function (req, res) {

    //why using 44 line while you can do it in 5 lines 
//store data in a text,json...etc file
//  var user = {
//  name = "Alex Jones",
//  email = 123@123.123,
//  password = 123123   
//  };

//push the data into the file 

// fs.appendFile('data.txt', ` ${user.name , email,...etc}!`);
// -------------------------------------------------
// we can also use some Yargs to fetsh the user data into a new file remove all of this 
//store the data into a new file (in case you don't want to use any type of DB'S) just store them in  a new file 
//and when he is out and want to login again we can just check his own data with the last appaned one :)


    if(req.body && req.body.email && req.body.password){
        if(req.body.email == '123@123.123'){

            if(req.body.password == '123123') {
                var user ={
                    name:"Alex Jones"
                    , email:req.body.email
                    , password:req.body.password
                    , profilePic:"http://lorempixel.com/500/500/people/"
                };
                var changeName = document.getElementsByTagName(h1).contentEditable = "true";
                res.send(200, user);
            }
            else
                res.send(400,{message:'hey lady, you sent me the wrong password.'});

        }else
            res.send(400,{message:'hey man, you sent me the wrong email.'});

    }
    else
        res.send(422,{message:'yo! you miss`n some stuff!'});
});


var serve = staticFiles('public/', {'index': ['index.html']});
app.use(serve);


app.listen(3000);
console.log("running on http://localhost:3000");