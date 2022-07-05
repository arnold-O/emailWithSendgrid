const catchAsyncWares = require("../middlewares/catchAsyncWares");







exports.sendEmail = catchAsyncWares(async(req,res,next)=>{



    res.json({
        message:"heyyyy gooood"
    })
})