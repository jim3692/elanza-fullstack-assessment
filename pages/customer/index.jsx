import React from 'react'

export default function CustomerHomePage () {
  return (
    <form method='POST' action='/api/customer/care-request'>
      <label htmlFor='name'>Customer Name</label>
      <input id='name' name='name' type='text' />
      <br />
      <label htmlFor='request'>Request</label>
      <input id='request' name='request' type='text' multiple />
      <br />
      <label htmlFor='data'>Request Date</label>
      <input id='date' name='date' type='date' />
      <button type='submit'>Send</button>
    </form>
  )
}
