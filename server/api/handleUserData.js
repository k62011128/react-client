const Users = require("../models/users");
module.exports=function handleUserData(para){
    return new Promise((resolve,reject) => {
        const {username} = para
        let res
        Users.find({
            userName: new RegExp(username,'i'),
        }).then(result => {
            res= result[0]
            resolve(res)
        }).catch(err => {
            console.log(err)
        })
    })
}
