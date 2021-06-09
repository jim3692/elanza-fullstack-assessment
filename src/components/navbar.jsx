import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar () {
  const localStorage = (typeof window !== 'undefined' && window.localStorage) || null

  const [isCaregiver, setIsCaregiver] = useState(false)

  useEffect(() => setIsCaregiver(
    JSON.parse(localStorage?.isCaregiver || false)
  ), [])
  useEffect(() => localStorage?.setItem('isCaregiver', isCaregiver), [isCaregiver, localStorage])

  const handleIsCaregiverChange = event => setIsCaregiver(event.target.checked)

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Elanza Assignment</Navbar.Brand>
      <Form className='d-flex'>
        <Form.Check>
          <Form.Check.Input type='checkbox' isValid checked={isCaregiver} onChange={handleIsCaregiverChange} />
          <Form.Check.Label>Caregiver</Form.Check.Label>
        </Form.Check>
      </Form>
    </Navbar>
  )
}
