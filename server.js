const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));


// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname+"/build/index.html"));
// });

app.get("/people", (req, res) => {
    let people = {
        name: "haseeb",
        age: 18,
    }
    
    console.log("API triggered");

    res.send(people);
});



let port = process.env.PORT;

app.listen(port || 5000, () => {
    console.log("Server has been started successfully");
});