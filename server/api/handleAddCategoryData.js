const Categorys = require("../models/categories");

module.exports=  function handleAddCategoryData(para){
    return new Promise((resolve,reject) => {
        const {categoryName,parentId} = para
        let category=new Categorys(
            {
                parentId:parentId,
                name:categoryName
            }
        )
        category.save().then(res=>{
            console.log(res)
            resolve(res)
        }).catch(err=>{
            console.log(err)
        })

    })
}