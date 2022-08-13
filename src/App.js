import React from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './component/Main'


const App = () => {
  return (
    <div className='app-container'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default App