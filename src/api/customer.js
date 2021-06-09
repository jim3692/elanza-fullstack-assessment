const { Router } = require('express')
const { careRequests } = require('../../database')

const router = Router()

router.post('/care-request', postCareRequest)

function postCareRequest (req, res) {
  const careRequest = {
    id: careRequests.newIndex,
    customerName: req.body.name,
    request: req.body.request,
    date: req.body.date
  }

  careRequests.data.push(careRequest)

  return res.json(careRequest)
}

module.exports = router
