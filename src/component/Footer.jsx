import React from 'react'
import '../scss/Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
      <p className='contain text-center text-white '>
        Copyright by Cormind {new Date().getFullYear()}
      </p>
    </footer>
    </>
  )
}

export default Footer