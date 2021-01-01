import React from 'react'


import Header from './header'
import Footer from './footer'

import './base.css'

const Template = ({ children, workTitles }) => {

  return (
    <>

      <Header />

      {children}



      <Footer workTitles={workTitles} />
    </>
  )
}


export default Template
