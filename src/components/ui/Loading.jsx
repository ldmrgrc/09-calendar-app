import React from 'react'
import '../../styles/Loading.css'

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className='loading'></div>
      <samp className='ms-3'>Loading...</samp>
    </div>
  )
}
