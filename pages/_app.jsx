import React from 'react'
import NavBar from '../src/components/navbar'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
