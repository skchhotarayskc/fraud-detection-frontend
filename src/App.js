import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Account from './pages/Account'
import Mpin from './pages/Mpin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mpin" element={<Mpin />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  )
}

export default App