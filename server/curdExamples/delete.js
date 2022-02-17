const User=require('../models/users');

User.remove({ userName: 'kanami' }).then(result=>{
console.log(result);
})
.catch(err=>{
    console.log(err);
})