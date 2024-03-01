import { useState } from 'react'
import './App.css'
import MartLogin from './MartLogin'
import {Route, Routes } from 'react-router-dom';
import MartRegister from './MartRegister';
import MartVerification from './MartVerification';
import MartActivate from './MartActivate';

function App() {

  return (
    <>
      <Routes>
        <Route path="/martlogin" element={<MartLogin />} />
        <Route path="/martregister" element={<MartRegister />} />
        <Route path="/verification" element={<MartVerification />} />
        <Route path="/martactivate" element={<MartActivate />} />
      </Routes>
    </>
  )
}

export default App
