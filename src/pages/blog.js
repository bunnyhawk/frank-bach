import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'

import Container from '../components/container'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const BlogIndex = ({ data, location }) => {

  const posts = get(data, 'allContentfulBlogPost.edges')
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(posts.length)

  let tags = new Set()
  let firstPosts = []
  let laterPosts = []

  if (!posts) return

  posts.forEach((post, index) => {
    post.node.tags.forEach((tag) => tags.add(tag))
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
        <div className="blogMenu rounded-t-lg shadow-md z1">
          <button {...buttonProps} className="text-lg font-header">All posts</button>
          <ul className={isOpen ? 'shadow-md visible rounded-b-lg' : ''} role='menu'>
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
          <li>TESTING</li>
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
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1200, maxHeight: 700, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_withWebp
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
