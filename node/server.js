const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req, res)=>{
    res.end('This is root path');
});

app.get('/home', (req, res)=>{
    res.end('This is root home');
});

app.post('/api', (req, res)=>{
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    // res.end('MasterUNG Feedback => userName: ' + userName + ', passWord: ' + passWord);
    res.json({result: 'Success', userName: userName, passWord: passWord});
});

app.listen(3000, ()=>{
    console.log('Server Work...');
})