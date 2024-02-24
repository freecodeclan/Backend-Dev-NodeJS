"use strict";

const express = require("express"); //-- Creating instance of express
const app = express();

//-- now running server on port number 3000
app.listen(3000, () => {
  console.log("Server live at port num: 3000");
});
