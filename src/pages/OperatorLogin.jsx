import React from 'react'
import adhar from "../assets/Adhar.png"
import './OperatorLogin.scss'
import { useState } from 'react'
import { auth } from '../firebase/setup'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { operator } from './operatordata'
import { Navigate, useNavigate } from 'react-router-dom'
const OperatorLogin = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [otp, setOtp] = useState(null)
  const [user, setUser] = useState(null)
  function handleSelectChange(event) {

    setSelected(event.target.value)
    console.log(event.target.value, 'selected')
    console.log(selected, 'i am selected')
  }
  const sendOtp = async () => {
    console.log('Sending OTP', selected)
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
      const confirmation = await signInWithPhoneNumber(auth, selected, recaptcha)
      setUser(confirmation)
      console.log(confirmation, 'confirmation')
    } catch (error) {
      console.log(error);
    }

  }
  const verifyOtp = async () => {
    try {

      const isverified = await user.confirm(otp)
      console.log(isverified, 'isverified')
      if (isverified) {
        navigate('/dashboard')
      }

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <div className='operator-login-header'>Adhaar Login</div>
      <div className="operator-hero">
        <div className='sub-operator-one'>

          <img src={adhar} className='adhaar' alt="" />
        </div>
        <div className='sub-operator-two'>
          <label htmlFor="operatorId">Operator ID</label>
          <select onChange={handleSelectChange}>
            {operator.map((operator) => (
              <option key={operator.id} value={operator.phone}>
                {operator.operator_id}
              </option>
            ))}
          </select>
            
          <label htmlFor="operatorName">Name</label>
          <input type="text" placeholder='Enter Your Name' />
          <button onClick={sendOtp}>login</button>
          <div id="recaptcha"></div>
          <input onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" />
          <button onClick={verifyOtp}>verify</button>
        </div>
      </div>
      <div className="footer">
        Copyright (c) UID Authority of india , all rights reserved
      </div>
    </div>

  )
}

export default OperatorLogin 