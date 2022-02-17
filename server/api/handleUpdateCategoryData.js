const Categorys = require("../models/categories");

module.exports=  function handleUpdateCategoryData(para){
    return new Promise((resolve,reject) => {
        const {categoryId,categoryName} = para
        Categorys.updateMany({
            _id: categoryId
        }, {
            name:categoryName
        }).then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        })
        Categorys.find({
            _id: categoryId,
        }).then(result => {
            resolve(result)
        }).catch(err => {
            console.log(err)
        })

    })
}