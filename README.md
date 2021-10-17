# my-first-express-server
Here is my first experience with NodeJS web application framework - Express

### How to add express to your project

NOTE: you can start with only empty server.js file in your directory, commands below will generate the rest to you automatically

0. make sure you have node installed on your computer
1. open terminal
2. cd to the directory
3. enter ```node npm init```
4. enter ```npm install express```

### How to run server

NOTE: at this step, I have already modified server.js by add this command to the code.

```
const express = require("express");
const app = express();

app.get("/", function(request,response){
	response.send("<h1>This is root page</h1>");
})

```

1. open terminal
1. cd to the directory
2. enter ```node server.js``` to run server
3. open your search engine to localhost:3000(depend on your defined port)
4. you should see word "This is root page" (at root)
5. This is how to create express server
6. you also can add different routes, see more in server.js
