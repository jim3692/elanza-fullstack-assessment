import React, { useEffect, useState } from 'react'

export default function NavBar () {
  const localStorage = (typeof window !== 'undefined' && window.localStorage) || null

  const [isCaregiver, setIsCaregiver] = useState(false)

  useEffect(() => setIsCaregiver(
    JSON.parse(localStorage?.isCaregiver || false)
  ), [])
  useEffect(() => localStorage?.setItem('isCaregiver', isCaregiver), [isCaregiver, localStorage])

  const handleIsCaregiverChange = event => setIsCaregiver(event.target.checked)

  return (
    <div>
      <label htmlFor='is-caregiver'>Caregiver</label>
      <input id='is-caregiver' type='checkbox' checked={isCaregiver} onChange={handleIsCaregiverChange} />
    </div>
  )
}
