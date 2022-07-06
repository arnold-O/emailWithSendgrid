const catchAsyncWares = require("../middlewares/catchAsyncWares");
const nodemailer = require('nodemailer')



exports.sendEmail = catchAsyncWares(async(req,res,next)=>{
    // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alize.considine42@ethereal.email',
        pass: 'PcvTYEEDpbawQZYmyw'
    }
});

let infoMessage = await transporter.sendMail({
    from:"Arnold oghiator <arnold@gmail.com>",
    to:'arnoldoghitord.com',
    subject:"Sending Email",
    html:'<h2>Sending email for testing</h2>'
})


    res.json({
        message:"heyyyy gooood",
        infoMessage
    })
})