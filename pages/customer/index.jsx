import React from 'react'

import axios from '../../src/components/axios'

export default function CustomerHomePage () {
  const handleFormSubmit = event => {
    event.preventDefault()

    axios.post('/api/customer/care-request', {
      name: event.target.name.value,
      request: event.target.request.value,
      date: event.target.date.value
    })
      .then(res => res.data)
      .then(data => console.dir(data))
      .catch(err => console.error(err)) // TODO
  }

  return (
    <form action='#' onSubmit={handleFormSubmit}>
      <label htmlFor='name'>Customer Name</label>
      <input id='name' name='name' type='text' />
      <br />
      <label htmlFor='request'>Request</label>
      <input id='request' name='request' type='text' multiple />
      <br />
      <label htmlFor='date'>Request Date</label>
      <input id='date' name='date' type='date' />
      <button type='submit'>Send</button>
    </form>
  )
}
