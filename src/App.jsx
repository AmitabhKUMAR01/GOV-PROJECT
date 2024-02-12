import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import OtpGenerator from './components/OtpGenerator'
import OperatorLogin from './pages/OperatorLogin'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<OperatorLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
 {/* <OtpGenerator/> */}
    </>
  )
}

export default App
