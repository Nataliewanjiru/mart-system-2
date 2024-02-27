import { useState } from 'react'
import './App.css'
import MartLogin from './MartLogin'
import {Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<MartLogin />} />
      </Routes>
    </>
  )
}

export default App
