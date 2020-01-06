const http = require('http');
const express = require('express');
const PORT = 3000;
const app = express();

const server = http.createServer(app);

const VIPS = {'Joe':"How wonderfully splendid it is to be in your presence again!",
'Oakley': "Oh hey....",
'Matt Damon': "Hello, "};

app.get(`/`, (req, res) => {
    res.send(`Please enter your name after the / in the URL`);
})

app.get(`/:name`, (req, res) => {
    if (Object.keys(VIPS).includes(req.params.name)) {
        res.send(`${VIPS[req.params.name]}`);
    } else{
        res.send(`Hello, ${req.params.name}!`);
    }
})

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})