import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Photos from './components/Photos/Photos'
import Main from './components/Main/Main'
import Videos from './components/Videos/Videos'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/photos" element={<Photos />} />
      <Route path='/videos' element={<Videos />} />
    </Routes>
  </>
)

export default React.memo(App)
