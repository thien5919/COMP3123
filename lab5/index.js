const express = require('express');
const fs = require('fs');
const app = express();
const router = express.Router();
const user = require('./user');

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hello World');});
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.use(express.static(__dirname));
router.get('/home', (req,res) => {
  res.sendFile(__dirname + '/home.html');
});

/*
- Return all details from user.json file to client as JSON format
*/

router.get('/profile', (req,res) => {
  fs.readFile('user.json', 'utf-8', (err, data) => {
    if(err) {
      console.log(err);
      return res.status(500).send('Server Error');
    }
    console.log(data);
    res.json(JSON.parse(data));
});
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req,res) => {
  const { username, password } = req.body;

  // Read user.json file
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading user data" });
    }

    const users = JSON.parse(data);
 
    // Check if username exists
    if (user.username !== username) {
      return res.json({ status: false, message: "User Name is invalid" });
    }

    // Check if password is valid
    if (user.password !== password) {
      return res.json({ status: false, message: "Password is invalid" });
    }

    // Username and password are valid
    res.json({ status: true, message: "User Is valid" });
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const  username  = req.query.username;
  if (username) {
    res.send(`<b>${username} successfully logout.<b>`);
  }else{
    res.send('<b>username not provide for logout.<b>');
  }
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));