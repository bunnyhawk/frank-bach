import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroHeadline}>
      <div className="font-space text-xs text-gray-400 uppercase">Designer &amp; Speaker</div>
      <h3 className="font-title text-6xl uppercase mt-2 mx-auto">{data.name}</h3>
    </div>
    <div className={styles.heroImageWrapper}>
      <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
        backgroundColor={true}
      />
    </div>
    <p className="font-space uppercase text-sm text-gray-400 mb-8">I’ve worked with some of the world’s most loved brands and products</p>
  </div>
)
