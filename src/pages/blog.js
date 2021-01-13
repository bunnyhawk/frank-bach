import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Container from '../components/container'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styles from './blog.module.css'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title="Blog - Frank Bach" />
        <Container isNarrow className="md:pb-24">
          <ul>
            {posts && posts.map(({ node }) => {
              return (
                <li key={node.slug} className="mb-12">
                  <ArticlePreview article={node} isBlogHome />
                </li>
              )
            })}
          </ul>
        </Container>
      </Layout>
    )
  }
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
              ...GatsbyContentfulFluid_tracedSVG
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
