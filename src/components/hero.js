import React from 'react';
import Img from 'gatsby-image';

import styles from './hero.module.css';

const Hero = ({ data }) => {

  return (

    <div className={styles.hero}>

      <div className={styles.heroImageWrapper}>
        <Img
          className={styles.image}
          alt={data.name}
          fluid={data.fluid}
          backgroundColor={true}
        />
      </div>
      <div className={styles.heroHeadline}>
        <h3 className="font-title text-3xl md:text-6xl mb-10 mt-2 mx-auto">Designing for mindfulness</h3>
      </div>
      <p className="hidden md:block font-space uppercase text-sm text-gray-400 mb-8">
        I’ve worked with some of the world’s most loved brands and products
      </p>
    </div>
  )
}

export default Hero;