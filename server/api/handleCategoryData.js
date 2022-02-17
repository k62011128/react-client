const Categorys = require("../models/categories");

module.exports=  function handleCategoryData(para){
    return new Promise((resolve,reject) => {
        const {parentId} = para
        Categorys.find({
            parentId: new RegExp(parentId,'i'),
        }).then(result => {
            resolve(result)
        }).catch(err => {
            console.log(err)
        })
    })
}