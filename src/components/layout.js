import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'

import './base.css'

const Template = ({ children, workTitles, isShort }) => {

  const wrapperClasses = isShort
    ? "flex flex-col justify-between min-h-screen pt-20 overflow-y-hidden"
    : "pt-20 overflow-y-hidden";

  return (
    <div className={wrapperClasses}>
      <Helmet
        script={[{
          type: 'text/javascript',
          innerHTML: `
            // Check if API exists
            if (document && document.fonts) {    
              // Do not block page loading
              setTimeout(function () {           
                document.fonts.load('16px "DrukWide-Bold"').then(() => {
                  // Make font using elements visible
                  document.documentElement.classList.add('font-loaded') 
                })
              }, 500)
            } else {
              // Fallback if API does not exist 
              document.documentElement.classList.add('font-loaded') 
            }
          `
        }]}
      >
        <link rel="preload" href="/fonts/AllianceNo1-Bold.ttf" as="font" type="font/ttf" crossorigin />
        <link rel="preload" href="/fonts/AllianceNo1-Light.woff" as="font" type="font/woff" crossorigin />
        <link rel="preload" href="/fonts/AllianceNo2-Light.woff" as="font" type="font/woff" crossorigin />
        <link rel="preload" href="/fonts/DrukWide-Bold.ttf" as="font" type="font/ttf" crossorigin />
        <link rel="preload" href="/fonts/SpaceMono-Bold.ttf" as="font" type="font/ttf" crossorigin />
        <link rel="preload" href="/fonts/SpaceMono-BoldItalic.ttf" as="font" type="font/ttf" crossorigin />
        <link rel="preload" href="/fonts/SpaceMono-Italic.ttf" as="font" type="font/ttf" crossorigin />
        <link rel="preload" href="/fonts/SpaceMono-Regular.ttf" as="font" type="font/ttf" crossorigin />
        
      </Helmet>
      <Header />

      {children}



      <Footer />
    </div>
  )
}


export default Template
