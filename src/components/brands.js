import React from 'react'
import Img from 'gatsby-image'

import styles from './brands.module.css'

export default ({ data }) => (
  <>
    <ul className="brands pt-10 pb-10 px-4 justify-center relative">
      {data.map((brand) => (
        <li key={brand.contentful_id} className={[styles.brandItem, 'inline-block mx-8'].join(' ')}>
          <Img src={brand.file.url} alt={brand.title} fluid={brand.fluid} />
        </li>
      ))}
    </ul>
  </>
)
