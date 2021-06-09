import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CaregiverOverviewPage () {
  const [requests, setRequests] = useState([])

  useEffect(
    () => axios('/api/caregiver/care-requests')
      .then(res => res.data)
      .then(setRequests)
      .catch(console.error) // TODO
    , []
  )

  return (
    <ul>
      {requests.map(request => (
        <div key={request.id}>{request.customerName}</div>
      ))}
    </ul>
  )
}
