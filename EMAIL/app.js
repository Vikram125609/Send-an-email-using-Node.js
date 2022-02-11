let OTP = Math.random() * 100000;
OTP = Math.ceil(OTP);
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
	user: 'vs125609@gmail.com',
	pass: 'Vikram@123',
}
});
const mailOption = {
	from: 'vs125609@gmail.com',
	to: 'vikramthelucky43@gmail.com',
	subject: 'Sending Email using Node.js',
	text: `Your OTP IS ${OTP}`
};
transporter.sendMail(mailOption,(error,info)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Email Sent Successfully "+ info.response);
    }
})