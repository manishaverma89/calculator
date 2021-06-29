const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// As Body Parser works with Express so we write app.use
// bodyParser.urlencoded is special mode that we use when we're trying to parse data that comes from an HTML form.
//  option called ‘extended’, and we're going to set it to be true And by setting that extended option to true, that basically just allows us to post nested objects. 
// So this is basically the code that you need to write every single time you want to use Body Parser.

app.get("/",function(req , res){
    res.sendFile(__dirname + "/index.html");  // __dirname is just a constant that allows us to grab hold of the current file location at any given time, so we can use that location and append the location of another file to it.

});

app.post("/" , function(req , res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1+num2;
    res.send("Result of the calculation is " + result) ;
})

app.listen(3000 , function(){
    console.log("server started on port 3000");
});


