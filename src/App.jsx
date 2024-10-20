import { useState } from 'react'
import Header from './components/1.Header/Header'
import Hero from './components/2.Hero/Hero'
import Main from './components/3.Main/Main'
import ContactUs from './components/4.ContactUs/ContactUs'
import Footer from './components/5.Footer/Footer'

function App() {


  return (
    <div className='container'>
      <Header/>
      
      <Hero/>
      <div className='divider'/>
      <Main/>
      <div className='divider'/>
      <ContactUs/>
      <div className='divider'/>
      <Footer/>
<button className='scroll2top'></button>
     
    </div>
  )
}

export default App
