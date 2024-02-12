import React from 'react'
import adhaar from '../assets/Adhar.png'
import OIP from '../assets/settings.avif'
import './OperatorHeader.scss'
const OperatorHeader = () => {
  return (
    <div className='operator-main-header'>
        <div className='header-main-adhaar'>

        <img src={adhaar} id='header-adhaar' alt="" />
        </div>
        <div className='operator-header'>Synchronize Operator Details</div>
        <div>
            <img src={OIP} id='header-oip' alt="" />
        </div>
    </div>
  )
}

export default OperatorHeader