import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Container from '../components/container'
import Layout from '../components/layout'
import ReadMore from '../components/read-more'

import heroStyles from '../components/hero.module.css'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Container>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={[heroStyles.hero, 'mb-10'].join(' ')}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="relative md:absolute md:w-40 pb-8 md:pb-0">
            <a
              className="block mx-auto w-32 text-center"
              href={`https://twitter.com/${post.author.twitter}`}
              rel="noreferrer"
              target="_blank"
            >
              <Img
                className="block w-24 mx-auto mb-3"
                alt={post.author.image.title}
                fluid={post.author.image.fluid}
              />
              <div className="font-header text-base text-black">{post.author.name}</div>
              <div className="font-space text-xs text-blu uppercase pb-2">Follow on Twitter</div>
            </a>
          </div>

          <Container isNarrow className="blog mb-40 px-6">
            <div className="font-space text-gray-400 text-sm uppercase">{post.publishDate} / {post.category}</div>
            <h1 className="mb-4">{post.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </Container>
        </Container>
        <ReadMore />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author {
        name
        twitter
        image {
          title
          fluid(maxWidth: 98) {
            ...GatsbyContentfulFluid
          }
        }
      }
      title
      publishDate(formatString: "MMMM Do, YYYY")
      category
      heroImage {
        fluid(maxWidth: 1180, resizingBehavior: FILL) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
