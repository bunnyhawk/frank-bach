import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Container from '../components/container'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Brands from '../components/brands'
import TopBackground from '../components/top-bg';
import BottomBackground from '../components/bottom-bg';

import styles from './home.module.css';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const workTitles = get(this, 'props.data.allContentfulWork.edges')
    const brands = get(this, 'props.data.allContentfulBrands.edges[0].node.logos')
    const storyCopy = get(this, 'props.data.allContentfulHomePage.edges[0].node.story.childMarkdownRemark')
    const speakingCopy = get(this, 'props.data.allContentfulHomePage.edges[0].node.speaking.childMarkdownRemark')

    return (
      <Layout location={this.props.location} workTitles={workTitles}>
        <div style={{ background: '#fff' }}>
          <Container>
            <Helmet title={siteTitle} />
            <Hero data={author.node} />
            <Brands data={brands} />
          </Container>
          <TopBackground />
          <div className={[styles.homeCopyWrapper, "bg-black text-white pt-12"].join(' ')}>
            <Container className={styles.homeCopy}>
              <h2>My Story</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: storyCopy.html,
                }}
              />
              <h2>Speaking Engagements</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: speakingCopy.html,
                }}
              />
              <button className="mb-12">Want to chat? Let's talk! &#8594;</button>
            </Container>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              # background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulWork(sort: { fields: [postDate], order: DESC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulBrands(filter: {}) {
      edges {
        node {
          logos {
            title
            file {
              url
             
            }
            fluid(
                maxWidth: 200
                maxHeight: 40
                resizingBehavior: PAD
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
          }
        }
      }
    }
    allContentfulHomePage(filter: {}) {
      edges {
        node {
          story {
            childMarkdownRemark {
              html
            }
          }
          speaking {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
