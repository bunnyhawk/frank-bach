import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Container from '../components/container'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Brands from '../components/brands'
import TopBackground from '../components/top-bg';
import LetsWork from '../components/lets-work';
import Interviews from '../components/interviews';
import Hype from '../components/hype';
import CtaButtonLink from '../components/cta-button-link'

import styles from './home.module.css';

class RootIndex extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const workTitles = get(this, 'props.data.allContentfulWork.edges')
    const brands = get(this, 'props.data.allContentfulBrands.edges[0].node.logos')
    const homeContent = get(this, 'props.data.allContentfulHomePage.edges[0].node')
    const storyCopy = get(homeContent, 'story.childMarkdownRemark')
    const speakingCopy = get(homeContent, 'speaking.childMarkdownRemark')
    const hypeContent = get(this, 'props.data.allContentfulHypeItem.edges')

    return (
      <Layout location={this.props.location} workTitles={workTitles}>

        <Container>
          <Helmet title="Frank Bach - Designer &amp; Speaker" />
          <Hero data={homeContent.heroImage} />
          <Brands data={brands} />
        </Container>
        <TopBackground />
        <div className={[styles.homeCopyWrapper, "bg-black relative text-white"].join(' ')}>
          <Container className={[styles.homeCopy, 'pt-12 md:pt-36 pb-20 px-6'].join(' ')} isNarrow>
            <h2 className="font-space text-sm uppercase mb-4">My Story</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: storyCopy.html,
              }}
            />
            <h2 className="font-space text-sm uppercase mb-4 mt-12">Speaking Engagements</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: speakingCopy.html,
              }}
            />
            <CtaButtonLink text="Want to chat? Let's talk! &#8594;" to="/contact" className="mt-4" />
          </Container>

        </div>
        <div className="relative hidden md:block">
          <img src="/sun-rays.svg" alt="graphic of sun rays" className={[styles.homeImage, 'absolute'].join(' ')} />
        </div>
        <Container isNarrow className="speakingGrid mb-10 md:mb-40 pt-40">
          <Interviews
            interviewWebList={homeContent.interviewWeb}
            interviewPodcastList={homeContent.interviewPodcast}
            isHome
          />
        </Container>
        <Hype data={hypeContent} />
        <LetsWork />
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
        }
      }
    }
    allContentfulWork(sort: { fields: [postDate], order: DESC }) {
      edges {
        node {
          title
          slug
          postDate
        }
      }
    }
    allContentfulBrands(filter: {}) {
      edges {
        node {
          logos {
            contentful_id
            title
            file {
              url
             
            }
            fluid(
                maxWidth: 200
                maxHeight: 55
                resizingBehavior: PAD
              ) {
                ...GatsbyContentfulFluid_withWebp
              }
          }
        }
      }
    }
    allContentfulHomePage(filter: {}) {
      edges {
        node {
          heroImage {
            title
            fluid(
              maxWidth: 1180
              # maxHeight: 480
              resizingBehavior: FILL
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
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
          interviewWeb {
            contentful_id
            linkText
            linkHref
          }
          interviewPodcast {
            contentful_id
            linkText
            linkHref
          }
        }
      }
    }
    allContentfulHypeItem(
      filter: {}
    ) {
      edges {
        node {
          contentful_id
          name
          title
          quote {
            childMarkdownRemark {
              html
            }
          }
          picture {
            title
            fluid(
              maxWidth: 100
              maxHeight: 100
              resizingBehavior: PAD
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
