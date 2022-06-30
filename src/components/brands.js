import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './brands.module.css'

export default ({ data }) => (
  <>
    <ul className="brands pt-10 pb-10 px-4 justify-center relative">
      {data.map((brand) => (
        <li key={brand.contentful_id} className={[styles.brandItem, 'inline-block mx-8'].join(' ')}>
          <GatsbyImage image={brand.gatsbyImageData} alt={brand.title} />
        </li>
      ))}
    </ul>
    <div className="shading"></div>
  </>
)
