import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Container from '../components/container'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import * as styles from './blog.module.css'

const BlogIndex = ({ data, location, pageContext }) => {

  const posts = get(data, 'allContentfulBlogPost.edges')
  let tags = new Set()
  let firstPosts = []
  let laterPosts = []

  if (!posts || !posts.length) return;

  [...posts].forEach((post, index) => {
    const postTags = post.node.tags || [];
    postTags.forEach((tag) => tags.add(tag))

    if (
      !post.node.tags ||
      (
        pageContext.tag &&
        !!post.node.tags &&
        !post.node.tags.includes(pageContext.tag)
      )
    ) {
      return;
    }

    if (index < 2) {
      firstPosts.push(post)
    } else {
      laterPosts.push(post)
    }
  })

  return (
    <Layout location={location}>
      <Helmet title="Blog - Frank Bach" />
      <Container isNarrow className="blogContainer mt-7 md:pb-24">
        <div className="mb-4">
          <ul className="blogMenu">
            <li className="inline-block font-space text-sm mr-2 text-gray-400">
              <Link to="/blog/" className="text-gray-400">All</Link>
            </li>
            {[...tags].map((tag, index) => (
              <li key={tag} className="inline-block font-space text-sm mr-2 text-gray-400">
                <Link to={`/blog/tags/${tag.toLowerCase()}`} className="text-gray-400">{tag}</Link>
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
                <GatsbyImage
                  className="inline-block"
                  alt={posts[0].node.author.image.title}
                  image={posts[0].node.author.image.gatsbyImageData}
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
              gatsbyImageData(width: 98, layout: CONSTRAINED)
  
            }
          }
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(width: 1200, height: 700, layout: CONSTRAINED)
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
