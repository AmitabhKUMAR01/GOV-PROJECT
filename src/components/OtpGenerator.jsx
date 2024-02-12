import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from "../firebase/setup"
const OtpGenerator = () => {
    const [phone, setPhone] = useState('')
    const [user, setUser] = useState('');
    const [otp, setOtp] = useState('')
    const sendOtp = async () => {
        console.log('Sending OTP', phone)
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
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

        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div>
            {/* <button onClick={sendOtp}>send otp</button>
            <div id='recaptcha'></div> */}
            <input onChange={(e) => setOtp(e.target.value)} type="text" placeholder="otp" />
            <button onClick={verifyOtp}>verify</button>
        </div>
    )
}

export default OtpGenerator