const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request,response){
	response.send("<h1>This is root page</h1>");
})

app.get("/about", function(request,response){
	response.send("<h1>This is about page</h1>");
})

app.get("/contact", function(request,response){
	response.send("<h1>This is contact page</h1>");
})

app.get("/calculator", function(request,response){
	response.sendFile(__dirname + "/index.html");
})

app.post("/calculator", function(request,response){
	var num1 = Number(request.body.num1);
	var num2 = Number(request.body.num2);
	var result = num1+num2

	response.send("Result = " + result)
})

app.listen(3000, function(){
	console.log("Server started on port 3000");
});



