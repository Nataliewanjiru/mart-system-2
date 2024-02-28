import { useState } from 'react'
import './App.css'
import MartLogin from './MartLogin'
import {Route, Routes } from 'react-router-dom';
import MartRegister from './MartRegister';
import MartVerification from './MartVerification';

function App() {

  return (
    <>
      <Routes>
        <Route path="/martlogin" element={<MartLogin />} />
        <Route path="/martregister" element={<MartRegister />} />
        <Route path="/martverification" element={<MartVerification />} />
      </Routes>
    </>
  )
}

export default App
