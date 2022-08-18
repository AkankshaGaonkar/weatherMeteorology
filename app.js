const express = require("express");
const https = require("https");

const app = express();
app.get("/",function(req,res){
    const url ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=3057a14e23347af71adb0492ecd5c080&units=metrix";
    https.get(url, function(response){
        console.log(response.statusCode);
        // response.on("data",function(data){
        //     const weatherData = JSON.parse(data)
        //     const object={
        //         name: "Ashu",
        //         favouriteFood: "Chocolate"
        //     }
            //console.log(JSON.stringify(object));
        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDesc = weatherData.weather[0]
            console.log(temp);
        
        })
    })
    res.send("Server is up & running");


});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});