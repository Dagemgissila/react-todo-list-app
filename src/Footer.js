import React from 'react'

function Footer() {
    const date=new Date()
  return (
    <p className='bg-warning p-2 mb-0 d-flex justify-content-center'>
          copyright &copy; Dagem {date.getFullYear()}
    </p>
  )
}

export default Footer