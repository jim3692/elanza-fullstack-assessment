const { Router } = require('express')
const { careRequests } = require('../../database')

const router = Router()

router.get('/care-requests', getCareRequests)

function getCareRequests (req, res) {
  return res.json(careRequests.data)
}

module.exports = router
