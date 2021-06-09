import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

export default function RequestModal ({ request, showModal, setShowModal, handleRequestApplyClick }) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{request.customerName}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type='text' value={request.customerName} readonly />
          </Form.Group>
          <Form.Group className='mb-3' controlId='request'>
            <Form.Label>Request</Form.Label>
            <Form.Control type='text' value={request.request} readonly />
          </Form.Group>
          <Form.Group className='mb-3' controlId='date'>
            <Form.Label>Request Date</Form.Label>
            <Form.Control type='date' value={request.date} readonly />
          </Form.Group>
          <Form.Group className='mb-3' controlId='applied'>
            <Form.Label>Applied</Form.Label>
            <Form.Control type='checkbox' checked={request.applied} readonly />
          </Form.Group>
          <Button onClick={handleRequestApplyClick}>Apply</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
