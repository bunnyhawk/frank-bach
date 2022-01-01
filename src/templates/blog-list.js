import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'

import Container from '../components/container'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


class BlogList extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
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

    const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(tags.size)

    return (
      <Layout location={this.props.location}>
        <Helmet title="Blog - Frank Bach" />
        <Container isNarrow className="md:pb-24">
          <button {...buttonProps}>Example</button>
          <ul className={isOpen ? 'visible pt-2' : 'pt-2'} role='menu'>
            {[...tags].map((tag, index) => (
              <li key={tag} className="mb-2" {...itemProps[index]}>
                {tag}
              </li>
            ))}
          </ul>
          <ul>
            {firstPosts.map(({ node }) => (
              <li key={node.slug} className="mb-12">
                <ArticlePreview article={node} isBlogHome />
              </li>
            ))}
            <li>
              <div className="twitter">
                <Img
                  className="block w-24 mx-auto mb-3"
                  alt={post.author.image.title}
                  fluid={post.author.image.fluid}
                />
                <strong>Hey, I'm {post.author.firstName}</strong>

                <p>If you like what you’re reading, I invite you to say hello on
                  <a href={`https://twitter.com/${post.author.twitter}`} rel="noreferrer" target="_blank">Twitter</a>
                  and follow along for updates.
                </p>
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
}

export default BlogList

export const pageQuery = graphql`
  query BlogListByTag($tag: String!) {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
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