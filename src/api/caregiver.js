const { Router } = require('express')
const { careRequests } = require('../../database')

const router = Router()

router.use((req, res, next) => {
  if (!JSON.parse(req.header('X-IS-CAREGIVER') || false)) {
    return res.status(401)
      .json({
        error: 'You are not a caregiver.'
      })
  }

  return next()
})

router.get('/care-requests', getCareRequests)
router.get('/care-requests/:id', getCareRequestDetails)
router.post('/care-requests/apply', postCareRequestApply)

function getCareRequests (req, res) {
  return res.json(careRequests.data)
}

function getCareRequestDetails (req, res) {
  const careRequest = careRequests.data.find(request => request.id.toString() === req.params.id?.toString())

  if (!careRequest) {
    return res.status(404)
      .json({
        error: `Care request ${req.params.id} not found.`
      })
  }

  return res.json(careRequest)
}

function postCareRequestApply (req, res) {
  const careRequest = careRequests.data.find(request => request.id.toString() === req.body.id?.toString())

  if (!careRequest) {
    return res.status(404)
      .json({
        error: `Care request ${req.params.id} not found.`
      })
  }

  careRequest.applied = req.body.apply
  return res.json(careRequest)
}

module.exports = router
