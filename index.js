const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys=require('./conifg/keys');

mongoose.connect(keys.mongoURI);

require('./model/Item');
require('./fetch')(app);

// For production
if (process.env.NODE_ENV === "production") {
  // returning production client side (static) assets
  app.use(express.static("client/build"));

  // If the route is not defined , it returns an index.html file
  // path is defined in the node lib
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// In case of dev environment, we would still use 5000
const HEROKU_PORT = process.env.PORT || 5000;

app.listen(HEROKU_PORT);
