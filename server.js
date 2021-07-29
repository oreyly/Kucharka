const express = require("express");
const app = express();
const PORT = process.env.PORT||5000;
const databa = require("./Databaze/connect");
const getMaterials = require("./cesty/GET/getMaterial");
const saveMaterial = require("./cesty/POST/saveMaterial");

databa.connect();

/*
*Middleware
*Povolme přijímat JSON z frontendu
*/
app.use(express.json({extended:false}));
app.use(express.text({extended:false}));
/*
*Cesty - GET
*/
app.use("/",getMaterials);
/*
*Cesty - SET
*/
app.use("/",saveMaterial);


app.get("/",(req,res)=>{
    res.send("Hlavni strana!");
});

app.listen(PORT, (err)=>{
    console.log(`Port je ${PORT}`);
});