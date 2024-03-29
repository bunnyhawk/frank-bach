import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Container from '../components/container'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Brands from '../components/brands'
import TopBackground from '../components/top-bg'
import LetsWork from '../components/lets-work'
import Interviews from '../components/interviews'
import CtaButtonLink from '../components/cta-button-link'

import * as styles from './home.module.css';

class RootIndex extends React.Component {
  render() {
    const workTitles = get(this, 'props.data.allContentfulWork.edges')
    const brands = get(this, 'props.data.allContentfulBrands.edges[0].node.logos')
    const homeContent = get(this, 'props.data.allContentfulHomePage.edges[0].node')
    const storyCopy = get(homeContent, 'story.childMarkdownRemark')
    const speakingCopy = get(homeContent, 'speaking.childMarkdownRemark')

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
        <div className="relative">
          <img src="/sun-rays.svg" alt="graphic of sun rays" className={[styles.homeImage, 'absolute'].join(' ')} />
        </div>
        <Container isNarrow className="speakingGrid mb-10 pt-10 md:pt-40">
          <Interviews
            interviewWebList={homeContent.interviewWeb}
            interviewPodcastList={homeContent.interviewPodcast}
            isHome
          />
        </Container>
        <LetsWork />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
            gatsbyImageData(
              layout: CONSTRAINED,
              width: 200
            )

          }
        }
      }
    }
    allContentfulHomePage(filter: {}) {
      edges {
        node {
          heroImage {
            title
            gatsbyImageData(
              layout: CONSTRAINED,
              width: 1180
            )

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
  }
`
