const express = require('express')
const { sendEmail } = require('../controllers/emailControllers')



const router = express()


router.route('/').get(sendEmail)






module.exports = router