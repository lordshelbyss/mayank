const res = require("express/lib/response");
const mongoose = require("mongoose");



const connection = mongoose.connection;

module.exports = async (id) => {
  
  console.log(id, "dsdfsdf");
  connection.on("error", console.error.bind(console, "connection error:"));


  connection.once('open', async function () {

    const collection  = connection.db.collection("CysThioDB");
    collection.find({ "UniProt_ID": id }).toArray(function(err, data){
        console.log(data); // it will print your collection data
    });
  });


  
};
