const User = require('../models/users');
const username='kanami'
User.find({
        userName:new RegExp(username,'i')
    }).then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })