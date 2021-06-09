import React, { useEffect, useState } from 'react'
import axios from '../../src/components/axios'

export default function CaregiverOverviewPage () {
  const [requests, setRequests] = useState([])
  const [details, setDetails] = useState(null)

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
    .catch(console.error) // TODO

  const handleRequestApplyClick = id => axios.post('/api/caregiver/care-requests/apply', { id, apply: true })
    .then(res => res.data)
    .then(setDetails)
    .catch(console.error) // TODO

  return (
    <div>
      <ul>
        {requests.map(request => (
          <div key={request.id} onClick={() => handleRequestClick(request.id)}>{request.customerName}</div>
        ))}
      </ul>
      {details && (
        <div>
          <label htmlFor='name'>Customer Name</label>
          <input id='name' type='text' value={details.customerName} disabled />
          <br />
          <label htmlFor='request'>Request</label>
          <input id='request' type='text' value={details.request} disabled />
          <br />
          <label htmlFor='date'>Request Date</label>
          <input id='date' type='date' value={details.date} disabled />
          <label htmlFor='applied'>Applied</label>
          <br />
          <input id='applied' type='checkbox' checked={details.applied} disabled />
          <button onClick={() => handleRequestApplyClick(details.id)}>Apply for request</button>
        </div>
      )}
    </div>
  )
}
