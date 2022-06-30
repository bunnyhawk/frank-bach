import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
// import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from '../components/container'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


class BlogList extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    let tags = new Set()
    let firstPosts = []
    let laterPosts = []

    if (!posts && !posts[0].node.article.description) return

    posts.forEach((post, index) => {
      post.node.tags.forEach((tag) => tags.add(tag))
      if (index < 2) {
        firstPosts.push(post)
      } else {
        laterPosts.push(post)
      }
    })

    // const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(tags.size)

    return (
      <Layout location={this.props.location}>
        <Helmet title="Blog - Frank Bach" />
        <Container isNarrow className="md:pb-24">
          {/* <button {...buttonProps}>Example</button> */}
          <ul className={'visible pt-2 test'}>
            {[...tags].map((tag, index) => (
              <li key={tag} className="mb-2">
                {tag.toLowerCase()}
              </li>
            ))}
          </ul>
          <ul>
            {firstPosts.map(({ node }) => (
              <li key={node.slug} className="mb-12">
                <ArticlePreview article={node} isBlogHome />
              </li>
            ))}
            <li className="mb-12">
              <div className="twitter">
                <GatsbyImage
                  className="block w-24 mx-auto mb-3"
                  alt={post.author.image.title}
                  image={post.author.image}
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
              gatsbyImageData(height: 98, layout: CONSTRAINED)
            }
          }
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(height: 700, width: 1200, layout: CONSTRAINED)
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