import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
              <h2 className='custom'> Copyright © {year} -  Thali INC. </h2>
        </div>
  )
}

export default Footer