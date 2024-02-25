# **Body-Parser**

Body-parser is a middleware in Express.js that is used to parse incoming request bodies in a middleware before your handlers. It provides several middleware to handle request data (in different formats like JSON, URL-encoded, text, raw bytes, etc.)
When you use body-parser, the data sent through HTTP POST request gets attached to the `req.body` object. This makes it easy to access the data in your route handlers.

Here's a simple example of how it works:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//-- parse application/json
app.use(bodyParser.json());

app.post('/api/data', function (req, res) {
console.log(req.body); // This will log the JSON data sent in the POST request
res.send('Data received');
});

app.listen(3000);
