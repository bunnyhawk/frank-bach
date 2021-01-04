import React from 'react'


import Header from './header'
import Footer from './footer'

import './base.css'

const Template = ({ children, workTitles }) => {

  return (
    <div className="mt-20">

      <Header />

      {children}



      <Footer workTitles={workTitles} />
    </div>
  )
}


export default Template
