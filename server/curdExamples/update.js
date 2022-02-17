const User = require('../models/users');

User.updateMany({
       userName: "kanami"
    }, {
       priority:'998'
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })