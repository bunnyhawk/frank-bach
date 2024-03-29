import React from 'react'
import get from 'lodash/get'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import ArticlePreview from './article-preview'

import * as styles from './read-more.module.css'

const ReadMore = () => {
  const data = useStaticQuery(graphql`
    query ReadMoreQuery {
      allContentfulBlogPost(limit: 2, sort: { fields: [publishDate], order: DESC}) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            tags
            heroImage {
              gatsbyImageData(
                layout: CONSTRAINED,
                width: 300,
                height: 200
              )
            }
          }
        }
      }
      allContentfulBlogAd(filter: {}) {
        edges {
          node {
            blogAdImage {
              title
              gatsbyImageData(
                layout: CONSTRAINED,
                width: 300,
                height: 200
              )
   
            }
            blogAdLink
          }
        }
      }
    }
  `)
  const posts = get(data, 'allContentfulBlogPost.edges')
  const blogAd = get(data, 'allContentfulBlogAd.edges[0].node')

  return (
    <section className={[styles.readMoreWrapper, 'relative -mb-20'].join(' ')}>
      <div className={[styles.readMore, 'pt-20 pb-10 md:pb-40'].join(' ')}>
        <Container>
          <h3 className="text-sm text-center font-space uppercase pb-12">Read more</h3>
          <ul className="flex items-start justify-between flex-col md:flex-row">
            {posts.map(({ node }) => (
              <li key={node.slug} className="w-full md:w-2/6 md:mx-12 mb-6 md:my-4">
                <ArticlePreview article={node} />
              </li>
            ))}
            <li className="w-full md:w-2/6 md:mx-12 mb-6 md:my-4">
              <a href={blogAd.blogAdLink} className="text-black w-full">
                <GatsbyImage
                  alt={blogAd.blogAdImage.title}
                  image={blogAd.blogAdImage.gatsbyImageData}
                />
                <div className="px-6 md:px-0 pt-4">
                  <h3 className="text-xl">
                    Sunshine Shop
                  </h3>
                  <p className="font-space text-blu uppercase text-xs">Shop tees, hoodies, etc.</p>
                </div>
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  )
}

export default ReadMore
