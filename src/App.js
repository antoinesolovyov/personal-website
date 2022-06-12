import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Photos from './components/Photos/Photos'
import Main from './components/Main/Main'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  </>
)

export default React.memo(App)
