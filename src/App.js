import React from 'react'
import Header from './components/Header/header'
import Grid from './components/Grid/grid'
import './app.css'

const App = () => (
  <>
    <Header />
    <Grid />
  </>
)

export default React.memo(App)
