import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'

import Container from '../components/container'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from './blog.module.css'

const BlogIndex = ({ data, location }) => {

  const posts = get(data, 'allContentfulBlogPost.edges')
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(posts.length)

  let tags = new Set()
  let firstPosts = []
  let laterPosts = []

  if (!posts || !posts.length) return;

  [...posts].forEach((post, index) => {
    const postTags = post.node.tags || [];
    postTags.forEach((tag) => tags.add(tag))
    if (index < 2) {
      firstPosts.push(post)
    } else {
      laterPosts.push(post)
    }
  })



  return (
    <Layout location={location}>
      <Helmet title="Blog - Frank Bach" />
      <Container isNarrow className="mt-7 md:pb-24">
        <div className="blogMenu z1 mb-4">
          <button {...buttonProps} className="block rounded-t-lg text-lg font-header">All posts</button>
          <ul className={isOpen ? 'shadow-md visible rounded-b-lg' : ''}>
            {[...tags].map((tag, index) => (
              <li key={tag} className="font-space text-xs mb-2" {...itemProps[index]}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {firstPosts.map(({ node }) => (
            <li key={node.slug} className="mb-12">
              <ArticlePreview article={node} isBlogHome />
            </li>
          ))}
          <li>
            <div className={styles.twitter}>
              <div className={styles.twitterImage}>
                <Img
                  className="inline-block"
                  alt={posts[0].node.author.image.title}
                  fluid={posts[0].node.author.image.fluid}
                />
              </div>
              <div className={[styles.twitterText, "inline-block"].join(' ')}>
                <strong>Hey, I'm {posts[0].node.author.firstName}</strong>

                <p>If you like what you’re reading, I invite you to say hello on <a href={`https://twitter.com/${posts[0].node.author.twitter}`} rel="noreferrer" target="_blank">Twitter</a> and follow along for updates.
                </p>
              </div>
            </div>
          </li>
          {laterPosts.map(({ node }) => (
            <li key={node.slug} className="mb-12">
              <ArticlePreview article={node} isBlogHome />
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          author {
            firstName
            twitter
            image {
              title
              fluid(maxWidth: 98) {
                ...GatsbyContentfulFluid
              }
            }
          }
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1200, maxHeight: 700, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
