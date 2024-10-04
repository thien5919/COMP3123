const prompt= require('prompt-sync')({sigint: true});
const express = require('express');
const app = express();
const SERVER_POST = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});