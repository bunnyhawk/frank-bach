import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article, isBlogHome }) => (

  <Link to={`/blog/${article.slug}`} className="text-black w-full">
    <Img alt="" fluid={article.heroImage.fluid} className={isBlogHome ? 'mb-7' : ''} />
    <h3 className="text-lg">
      {article.title}
    </h3>
    {article.description && (
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    )}
    {isBlogHome && <div className="text-blu text-sm pb-2">Read More &#8594;</div>}
  </Link>
)
