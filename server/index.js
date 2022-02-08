const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const User = require('./models/db');

let data;
User.find({
        userId: /123/,
    }).then(result => {
        data = result[0]
        console.log(data)
    
    })
    .catch(err => {
        console.log(err)
    })

app.post('/login', (req, res, next) => {
    console.log(req.body)
    const {username,password}=req.body
    if(username===data.userName&&password===data.userPassword)
    {
        res.send({
            data,
            status: 1
        });
    }
    next();
})

app.listen(5000, () => {
    console.log('5000端口监听中');
})