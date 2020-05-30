const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passwordHash = require("password-hash");


//MONGOOSE 
let status = {
    status: "null"
}
console.log(status);

const connection = mongoose.connect('mongodb+srv://haseeb:khan123@dentalcluster-sdul0.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    number: String,
    date_created: {type: Date, default: Date.now},
});

const User = mongoose.model("User", UserSchema);


app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/redirect", function(req,res) {
    res.send(status);
})

// result.username.toLowerCase() === username.toLowerCase() &&  
//Login route



app.post("/login", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    const names = {
        value: 1,
    }

    User.findOne({
        username: username,
    }, function(err, result){

        if(result) {
            console.log(result);
            if(passwordHash.verify(password, result.password) && result.username.toLowerCase() === username.toLowerCase()) {
                res.status(200);
                status.status = "null";
                res.redirect("/");
            } else {
                status.status = "invalid";
                res.redirect("/login");
            }
        } else {
            //If no entry set status to no entry so that error message can be displayed
            status.status = "no entry found";
            //redirect to login route so that user can try again
        
            res.redirect("/login");

        }


    });
});





//Create an account route
app.post("/create-an-account", (req,res) => {
    console.log("Create route has been activated");
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let number = req.body.number;

    hashed_password = passwordHash.generate(password);

    let new_user = new User({
        username: username,
        password: hashed_password,
        email: email,
        number: number,
    });
    if(new_user.save()) {
        res.redirect("/login");
    }

    
}); 

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+"/build/index.html"));
});


let port = process.env.PORT;

app.listen(port || 5000, () => {
    console.log("Server has been started successfully");
});