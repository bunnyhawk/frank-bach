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
        {/* <script id="mcjs"  type="text/javascript">{`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b2ac57f991427e5f4a30aab6f/f2db8796c444cca9514807730.js");`}</script> */}
        
      </Helmet>
      <Header />

      {children}



      <Footer />
      <script
          id="mcjs"
          type="text/javascript"
          dangerouslySetInnerHTML= {{ __html:
            `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b2ac57f991427e5f4a30aab6f/f2db8796c444cca9514807730.js");`
          }}
        />
    </div>
  )
}


export default Template
