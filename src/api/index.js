const { Router } = require('express')
const customer = require('./customer')

const router = Router()

router.use('/customer', customer)

module.exports = router
