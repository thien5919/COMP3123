const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

// GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});


app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
