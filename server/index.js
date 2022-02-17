const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
const handleUserData=require('./api/handleUserData')
const handleCategoryData=require('./api/handleCategoryData')
const handleUpdateCategoryData=require('./api/handleUpdateCategoryData')
app.get('/manage/category/list',async (req,res,next)=>{
    const {parentId}=req.body
    let data=await handleCategoryData(req.body)
    let status=1
    if(data[0]._id)
    {
        status=0
    }
    res.send({data,status})
    next()
})
app.post('/login', async (req, res, next) => {
    const {username, password} = req.body
    let data=await handleUserData(req.body)
    if (username === data.userName && password === data.userPassword) {
        res.send(
            data
        );
    }
    next();
})
app.post('/manage/category/update', async (req, res, next) => {
    let data=await handleUpdateCategoryData(req.body)
    let status=1
    res.send({data,status})
    next();
})
app.listen(5000, () => {
    console.log('5000端口监听中');
})