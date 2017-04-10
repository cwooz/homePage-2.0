var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    expressSanitizer = require("express-sanitizer");

// APP CONFIG
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.set("view engine", "ejs");


//ROUTES

// LANDING PAGE==============================
app.get("/", function(req, res) {
    res.render("index");    
});


//LISTEN===============================================
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED") ;
});