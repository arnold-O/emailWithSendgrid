const express = require('express')
const { sendEmail } = require('../controllers/emailControllers')



const router = express()


router.route('/').post(sendEmail)






module.exports = router