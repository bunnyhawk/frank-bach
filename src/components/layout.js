import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'

import './base.css'



const Template = ({ children, workTitles }) => {


  return (
    <div className="pt-20">
      <Helmet
        script={[{
          type: 'text/javascript',
          innerHTML: `
          function loadFonts() {
            if ('fonts' in document) {
          
              var bold = new FontFace("DrukWide-Bold", "url(DrukWide-Bold.ttf) format('ttf')", { weight: "700" });
          
              Promise.all([bold.load()]).then(function (fonts) {
                fonts.forEach(function (font) {
                  document.fonts.add(font);
                });
              });
            }
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



      <Footer workTitles={workTitles} />
    </div>
  )
}


export default Template
