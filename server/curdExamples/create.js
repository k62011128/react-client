const User=require('../models/users');
let user=new User(
    {
        userName:"kanami",
        userPassword:'123456',
        identity:'administrator',
        priority:'999'
    }
)
user.save().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
//或者用下面的写法
// User.create(user).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// })