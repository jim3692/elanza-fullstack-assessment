import React, { useState, useEffect } from 'react'
import logo from './logo.png'
import './App.css'

function App () {
  const [data, setData] = useState({ name: 'unknown', counter: 0 })

  const fetchData = async () => {
    const response = await fetch('/api/data')
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='main'>
      <img src={logo} alt='' width='100' /><br />
      Hello {data.name}, you called the backend {data.counter} times.
    </div>
  )
}

export default App
