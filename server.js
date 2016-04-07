var express = require('express'),
    db = require("./models"),
    app = express();

    console.log("i am server.js and I'm running");

// serve static files from public folder
app.use(express.static(__dirname + '/public'));


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * API Endpoints
 */

app.get('/api/sanity', function sanity (req, res) {
  res.json({
    message: "Hello, World!"
  });
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
