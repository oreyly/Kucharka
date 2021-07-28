const express = require("express");
const app = express();
const PORT = process.env.PORT||5000;
const databa = require("./Databaze/connect");

databa.connect();
app.get("/",(req,res)=>{
    res.send("Hlavni strana!");
});

app.listen(PORT, (err)=>{
    console.log(`Port je ${PORT}`);
});