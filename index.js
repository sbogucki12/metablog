// imports express using require; node doesn't yet support importing modules 
const express = require('express');
// importing path to parse the domain from the url and add to the route identifer in our route handler.
// Youll see this in the res.sendFile method.
const path = require('path');
// this is an express app.  All route handlers, middleware, etc, goes through Express via app
const app = express(); 

// instead of using an explict route handler as show in the commented app.get code below, we will use 
// express's built-in capability to handle static files, by serving the "public" folder.

app.use(express.static('public'));


app.get('/public/stylesheet.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/stylesheet.css'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/public/archive1', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/nodeishowmybrainworks.html'))
});

app.get('/public/archive2', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/burnout.html'))
});

app.get('/public/archive3', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/learntwolanguages.html'))
})




// app.get receives request (req), returns response (res).
// our first route handler, sends the index.html file concatenated with its file path. 
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'))
// });

// for deployment, the hosting service will provide the port for express to monitor via an environment variable.
// During development, express will monitor port 5000.
const PORT = process.env.PORT || 5000
app.listen(PORT);