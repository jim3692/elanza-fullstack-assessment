import React, { useEffect, useState } from 'react'
import axios from '../../src/components/axios'

import RequestList from '../../src/pages/caregiver/request-list'
import RequestModal from '../../src/pages/caregiver/request-modal'

export default function CaregiverOverviewPage () {
  const [requests, setRequests] = useState([])
  const [details, setDetails] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(
    () => {
      axios('/api/caregiver/care-requests')
        .then(res => res.data)
        .then(setRequests)
        .catch(console.error) // TODO
    }
    , []
  )

  const handleRequestClick = id => axios('/api/caregiver/care-requests/' + id)
    .then(res => res.data)
    .then(setDetails)
    .then(() => setShowModal(true))
    .catch(console.error) // TODO

  const handleRequestApplyClick = id => axios.post('/api/caregiver/care-requests/apply', { id, apply: true })
    .then(res => res.data)
    .then(setDetails)
    .catch(console.error) // TODO

  return (
    <div>
      <RequestList requests={requests} handleRequestClick={handleRequestClick} />
      {details && <RequestModal request={details} showModal={showModal} setShowModal={setShowModal} handleRequestApplyClick={() => handleRequestApplyClick(details.id)} />}
    </div>
  )
}
