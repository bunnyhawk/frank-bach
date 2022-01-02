import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article, isBlogHome }) => (

  <Link to={`/blog/${article.slug}`} className="text-black w-full">
    <Img alt={article.heroImage.title} fluid={article.heroImage.fluid} className={isBlogHome ? 'mb-7' : ''} />
    <div className="px-6 md:px-0 pt-4">
      <h3 className="text-xl">
        {article.title}
      </h3>
      {article.description && (
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      )}
      {isBlogHome && <div className="text-blu text-sm pb-2 font-space uppercase">Read More &#8594;</div>}
    </div>
  </Link>
)
