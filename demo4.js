// npm i nodemailer
// password : zhab yhxr fsbe jprc
const express = require('express');
const nodemailer = require('nodemailer');
// tao server
const app =express();
// cau hinh gui email
let guiEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'kiendtph37589@fpt.edu.vn',
        pass:'zhab yhxr fsbe jprc'
    }
});

// thiet lap noi dung gui
let noiDung = {
    from : 'kiendtph37589@fpt.edu.vn',
    to:'dinhtrongkien2004@gmail.com',
    subject: 'Test email',
    text: 'dsks sdkfc dsj djdt gf'
};
//gui
guiEmail.sendMail(noiDung,(err,info)=>{
    if(err){
        console.log('Lỗi: '+err);
    }else{
        console.log('Đã gửi thành công: '+info);
    }
});
//chay server
app.listen(3005,()=>{
    console.log('server đang chạy');
});