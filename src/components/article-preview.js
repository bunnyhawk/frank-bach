import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (

  <Link to={`/blog/${article.slug}`} className="text-black w-full">
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className="text-lg">
      {article.title}
    </h3>
    <small>{article.publishDate}</small>
    {article.description && (
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    )}
  </Link>
)
