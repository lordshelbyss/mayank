const mongoose = require("mongoose");
const connection = mongoose.connection;
const Item=mongoose.model("trial");

module.exports=(app)=>{

    app.get('/fetch/:id', (req,res)=>{
       
        // fetch api using mongoose 
        Item.find({UniProt_ID:req.params.id}).then((docs)=>{
            res.send(docs);
        }).catch(err=> res.status(403).send("Error while querying db"));
       
    })
};