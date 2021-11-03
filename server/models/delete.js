const User=require('./db');


User.remove({ userId: '123' }).then(result=>{
console.log(result);
})
.catch(err=>{
    console.log(err);
})