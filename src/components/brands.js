import React from 'react'
import Img from 'gatsby-image'

import styles from './brands.module.css'

export default ({ data }) => (
  <ul className="flex mt-10 mb-10">
    {data.map((brand) => (
      <li key={brand.contentful_id} className={[styles.brandItem, 'flex-1'].join(' ')}>
        <Img src={brand.file.url} alt={brand.title} fluid={brand.fluid} />
      </li>
    ))}
  </ul>
)
