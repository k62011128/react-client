const Category=require('../models/categories');
let category=new Category(
    {
        parentId:0,
        name:'图书'
    }
)
category.save().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})