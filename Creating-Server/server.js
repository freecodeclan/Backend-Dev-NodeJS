const express = require("express"); //-- Creating instance of express
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//-- Activating server on port number 3000
app.listen(3000, () => {
  console.log("Server live at port num: 3000");
});

//-- Creating route
app.get("/e", (req, res) => {
  res.send("Hello I am example of route");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});
