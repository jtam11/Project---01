var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require("./models"),
    controllers = require("./controllers");


    console.log("i am server.js and I'm running");

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


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
app.get('/api', controllers.api.index);

app.get('/api/clothes', controllers.clothes.index);



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
