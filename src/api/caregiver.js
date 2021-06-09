const { Router } = require('express')
const { careRequests } = require('../../database')

const router = Router()

router.get('/care-requests', getCareRequests)
router.get('/care-requests/:id', getCareRequestDetails)

function getCareRequests (req, res) {
  return res.json(careRequests.data)
}

function getCareRequestDetails (req, res) {
  const careRequest = careRequests.data.find(request => request.id.toString() === req.params.id.toString())

  if (!careRequest) {
    return res.status(404)
      .json({
        error: `Care request ${req.params.id} not found.`
      })
  }

  return res.json(careRequest)
}

module.exports = router
