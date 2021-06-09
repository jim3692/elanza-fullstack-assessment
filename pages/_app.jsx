import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../src/components/navbar'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
