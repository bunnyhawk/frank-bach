import React, { useEffect, useState, useRef } from 'react'
import Img from 'gatsby-image'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import styles from './hero.module.css'

const Hero = ({ data }) => {
  let imageRef = useRef(null);
  const [imagePosition, setImagePosition] = useState(null)
  const [transitionSun, setTransitionSun] = useState(false)


  useEffect(() => {
    setImagePosition(imageRef.current.getBoundingClientRect())
  }, [imageRef]);

  useScrollPosition(
    ({ currPos }) => {
      const relativePageOffset = -currPos.y + (window.pageYOffset + window.innerHeight * 1.5);
      // setImagePosition(imageRef.current.getBoundingClientRect());

      if (!transitionSun && relativePageOffset > imagePosition.top) {
        setTransitionSun(true)
      }
    },
    [imagePosition],
    null,
    false,
    300
  )



  return (
    <div className={styles.hero}>
      <div className={styles.heroHeadline}>
        <div className="font-space text-xs text-gray-400 uppercase">Designer &amp; Speaker</div>
        <h3 className="font-title text-5xl md:text-6xl uppercase mt-2 mx-auto">Frank Bach</h3>
      </div>
      <div className={["sunWrapper", transitionSun ? '' : ''].join(' ')}>
        <img className="sun" src="/sun_symbol.png" alt="an illustrative sun" />
      </div>
      <div ref={imageRef} className={styles.heroImageWrapper}>
        <Img
          className={styles.image}
          alt={data.name}
          fluid={data.fluid}
          backgroundColor={true}
        />
      </div>
      <p className="block md:hidden mx-4">I’m interested in how mindfulness can empower us to be more thoughtful designers, unlock our creativity, better collaborate, and align teams ambitions and goals.</p>
      <p className="hidden md:block font-space uppercase text-sm text-gray-400 mb-8">
        I’ve worked with some of the world’s most loved brands and products
      </p>
    </div>
  )
}

export default Hero;