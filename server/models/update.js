const User = require('./db');
let one = {
    userId: "123",
}

User.updateMany({
        userId: "123",
    }, {
        userName: "kano"
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })