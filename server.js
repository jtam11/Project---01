var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require("./models"),
    Clothes = db.Clothes,
    User = db.User,
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    controllers = require("./controllers");


    console.log("i am server.js and I'm running");

app.use(cookieParser());
app.use(session({
  secret: 'supersecretkey', // change this!
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  if (req.user) {
    res.render('index', {user: JSON.stringify(req.user) + " || null"});
  } else {
    res.redirect('login'); //redirect to login if not
  }
});

app.get('/wardrobe', function (req, res) {
  res.render('wardrobe', {user: JSON.stringify(req.user) + " || null"});
});

// AUTH ROUTES

// show signup view
app.get('/signup', function (req, res) {
  res.render('signup');
});

// sign up new user, then log them in
// hashes and salts password, saves new user to db
app.post('/signup', function (req, res) {
  var new_user = new User({ username: req.body.username });
  User.register(new_user, req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

// show login view
app.get('/login', function (req, res) {
  res.render('login');
});

// log in user
app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(JSON.stringify(req.user));
  res.redirect('/');
});

// log out user
app.get('/logout', function (req, res) {
  console.log("BEFORE logout", JSON.stringify(req.user));
  req.logout();
  console.log("AFTER logout", req.user);
  res.redirect('/');
});


/*
 * API Endpoints
 */

// Show all API Endpoints
app.get('/api', controllers.api.index);

// Show all clothes
app.get('/api/clothes', controllers.clothes.index);

// Add a clothing item
app.post('/api/clothes', controllers.clothes.create);

// Delete a clothing item
app.delete('/api/clothes/:clothingId', controllers.clothes.destroy);

// Update a clothing item
app.put('/api/clothes/:clothingId', controllers.clothes.update);

// Show one article of clothing
app.get('/api/clothes/:clothingId', controllers.clothes.show);

// Show all clothes of the same type
app.get('/api/clothes/type/:type', controllers.clothes.type);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
