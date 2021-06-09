import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function RequestList ({ requests, handleRequestClick }) {
  requests.map(request => (
    <div key={request.id} onClick={() => handleRequestClick(request.id)}>{request.customerName}</div>
  ))
  return (
    <ListGroup>
      {requests.map(request => (
        <ListGroup.Item key={request.id} onClick={() => handleRequestClick(request.id)}>{request.customerName}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}
