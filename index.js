const http = require('http');
const express = require('express');
const PORT = 3000;
const app = express();

const server = http.createServer(app);

const VIPS = ['Joe', 'Oakley', 'Matt Damon'];

app.get(`/`, (req, res) => {
    res.send(`Please enter your name after the / in the URL`);
})

app.get(`/:name`, (req, res) => {
    if (VIPS.includes(req.params.name)) {
        res.send(`How wonderfully splendid it is to be in your presence again, ${req.params.name}! You look magnificent today.`);
    } else{
        res.send(`Hello, ${req.params.name}!`);
    }
})

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})