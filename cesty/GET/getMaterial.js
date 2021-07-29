const getMaterials = require("express").Router();
const materials = require("../../Modely/materialy");
getMaterials.get("/get-materials",(req,res)=>{
    materials.find({},(err,docs) => {
        if(err)
        {
            return res.json({
                msg:"Bohužel jsem nezískal žádnej dokument",
                documents:[]
            })
        }
        else
        {
            return res.json({
                msg:"Úspěšně jsi získal suroviny",
                documents:docs
            })
        }
    })
})

module.exports = getMaterials;