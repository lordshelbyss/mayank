const mongoose=require('mongoose');
const {Schema}=mongoose;

const itemSchema=new Schema({
    UniProt_ID: String,
    res: String,
    Modifications: String,
    sequences: String 
});

// creating the users collection with userSchema 
mongoose.model('trial',itemSchema);