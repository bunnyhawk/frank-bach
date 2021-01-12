import React from 'react'
import get from 'lodash/get'
import { graphql, useStaticQuery } from 'gatsby'
// import { Link } from 'gatsby'

import Container from './container'
import ArticlePreview from './article-preview'

import styles from './read-more.module.css'

const ReadMore = () => {
  const data = useStaticQuery(graphql`
    query ReadMoreQuery {
      allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            tags
            heroImage {
              fluid(maxWidth: 300, maxHeight: 200, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const posts = get(data, 'allContentfulBlogPost.edges')
  console.log(posts)
  return (
    <section className={[styles.readMoreWrapper, 'relative -m-20'].join(' ')}>
      <div className={[styles.readMore, 'pt-20 pb-40'].join(' ')}>
        <Container>
          <h3 className="text-sm text-center font-space text-grey-400 uppercase pb-12">Read more</h3>
          <ul className="flex items-start justify-between">
            {posts.map(({ node }) => (
              <li key={node.slug} className="w-2/6 mx-12 my-4"><ArticlePreview article={node} /></li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}

export default ReadMore

