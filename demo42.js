// npm i jsonwebtoken
// thu vien
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// tao app
const app= express();
// ho tro nhan du lieu json
app.use(bodyParser.urlencoded({extended:true}));// ho tro chay qua postman
app.use(bodyParser.json());
// mang user
const users = [
    {
    id:1,
    username:'user001',
    password:'123456'
},
];
// token bi mat
const tokenBiMat = '37589';
// ham tao token
function hamTaoToken(user){
    return jwt.sign(user,tokenBiMat, {expiresIn:'15m'});// co gia tri trong 15p
}
// tien hanh login (goi qua postman, khong ho tro qua trinh duyet)
app.post('/login',(req,res)=>{
    const {username,password} = req.body; // nhan gia tri truyen tu postman 
    console.log('Thông tin nhận được');
    console.log(username);
    console.log(password);// in ra console
    // tim kiem trong mang xem co user nhu nguoi dung nhap khong ???
    const user = users.find((u)=>u.username===username 
    && u.password=== password);
    if(!user){// neu nhap sau u,p
        console.log("Sai username, password");
        return;

    }
    //neu nhap dung thi tao token
    const tokenCongKhai = hamTaoToken(
        {id:user.id,username:user.username,password:user.password}
        );
        // tra token cho nguoi dung
        res.json(tokenCongKhai);
        console.log("Token sinh ra: "+tokenCongKhai);
});
app.listen(3007,()=>{
    console.log("Server đang chạy");
});