var nodemail=require('nodemailer')

var transportmail=nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'tanujgaur288@gmail.com',
        pass:'kxucjmakapcblskq'
    }
});

var mailOptions={
    from :'tanujgaur288@gmail.com',
    to:'ysachin349@gmail.com',
    cc:'sssaxena058@gmail.com,	vishalofficial9634@gmail.com',
    subject:'padha likha karo',
    text:'padai likhai pr dyan do  kyuki tumhare future ko bs study hi change kr skti hai ',
    html: '<h1>Welcome</h1><p>That was easy!</p><br><h2>Today i learned how to send mail using node.js with attachment and html</h2><b<h4>Thanks</h4><h4>Regards</h4><h4>Tanuj Gaur</h4>',
     attachments: [
        { 
            filename: 'tan.jpeg',
            path: 'tan.jpeg'
        }
    ]
};

transportmail.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err)
    }else{
        console.log('Email gyo'+info.response)
    }
});