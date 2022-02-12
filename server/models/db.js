// 导入 mongoose 模块
const mongoose = require('mongoose');
// 设置默认 mongoose 连接,如果没有对应名字的数据库会自动创建
const url = 'mongodb://localhost:27017/User';
mongoose.connect(url);
//检查是否连接成功
var db = mongoose.connection;
db.on('connected', (err) => {
    if (err) {
        console.log("连接数据库失败:" + err);
    }
    else {
        console.log("连接数据库成功!");
    }
})
//设置自定义的数据结构
var userSchema = new mongoose.Schema(
    {
        "userId":String,
        "userName":String,
        "userPassword":String
    }
);
//第一个参数是模型名称，貌似没用，第二个参数是自定义的结构，第三个参数是连接的数据库中的集合,没有会自动创建
module.exports=mongoose.model('user',userSchema,'users');
