const ssaveMaterial = require("express").Router();
const modelMaterial = require("../../Modely/materialy");

ssaveMaterial.post("/save-material",(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    const surovina = new modelMaterial({
        //name:req.body.name
        name:name
    })
    surovina.save((err, document) => {
        if(err)
        {
            return res.json({msg:"Bohužel nedošlo k uložení suroviny"});
        }
        else
        {
            return res.json({msg:`Uložil se recept ${JSON.stringify(document)}`});
        }
    });
    /*res.send("Byl jsi v setu :D");
    res.send("Byl jsi v setu :D");*/
    //return;
})

ssaveMaterial.get("/save-material",(req,res)=>{
    res.send("Byl jsi v getu :D");
})

module.exports = ssaveMaterial;