const express = require("express");
const app = express();

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

app.listen(3000, function(){
	console.log("Server started on port 3000");
});



