const { Router } = require('express')
const customer = require('./customer')
const caregiver = require('./caregiver')

const router = Router()

router.use('/customer', customer)
router.use('/caregiver', caregiver)

module.exports = router
