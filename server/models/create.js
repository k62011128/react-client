const User=require('./db');
let one=new User(
    {
        userId:"123",
        userName:"kanami",
        userPassword:123456
    }
)
User.create(one).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})