const User = require('./db');

User.find({
        userId: /123/,
    }).then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })