import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Container from '../components/container'
import Layout from '../components/layout'
import Talks from '../components/Talks'
import Interviews from '../components/interviews'
import WorkCarousel from '../components/work-carousel'

class SpeakingIndex extends React.Component {
  render() {
    const speakingContent = get(this, 'props.data.allContentfulSpeakingPage.edges[0].node')
    const homeContent = get(this, 'props.data.allContentfulHomePage.edges[0].node')
    const talkItems = get(this, 'props.data.allContentfulTalkItem.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title="Speaking - Frank Bach" />

        <div className="pb-24">
          <div className="speaking">
            <Container isNarrow className="px-6">
              <div className="flex items-center mt-10 md:mt-40 mb-14">
                <h1
                  className="w-full"
                  dangerouslySetInnerHTML={{
                    __html: speakingContent.heroCopy.childMarkdownRemark.html,
                  }}
                />
                <img src="/speaking-icon.png" alt="splat" className="w-3/12" />
              </div>

              <WorkCarousel data={speakingContent.heroImages} slideHeight={550}
                slightWidth={parseInt(speakingContent.heroImages[0].fluid.aspectRatio * 550, 10)} />
              <p className="font-light text-lg mt-10 mb-10 md:mb-0 mx-auto w-5/6 text-center">{speakingContent.speakingTitle}</p>
              <div className="md:flex items-center py-2">
                <img className="speakingImage pl-4 md:pl-0 md:pr-4" src="/speaking-joy.png" alt="Frank speaking at a conference" />
                <div className="md:w-8/12">
                  <h4 className="font-bold text-lg text-blu">Designing for Joy</h4>
                  <p>How to go beyond functionality to add joy and delight to your digital products. Filled with engaging visuals and wraps up with a clear list of take-aways.</p>
                  <Link to="/contact" className="text-blu text-sm font-space uppercase">Learn More &#8594;</Link>
                </div>
              </div>
              <div className="md:flex items-center py-2">
                <img className="speakingImage pl-4 block md:hidden" src="/speaking-mindful.png" alt="Frank speaking at a conference" />
                <div className="md:w-8/12">
                  <h4 className="font-bold text-lg text-blu">Mindful Tips</h4>
                  <p>A series of mindfulness and meditation techniques that you can apply to your life, work, creative process, meetings, etc. to make you a stronger team player and individual contributor.</p>
                  <Link to="/contact" className="text-blu text-sm font-space uppercase">Learn More &#8594;</Link>
                </div>
                <img className="speakingImage md:pl-4 hidden md:block" src="/speaking-mindful.png" alt="Frank speaking at a conference" />
              </div>
              <div className="md:flex items-center py-2">
                <img className="speakingImage last pl-4 md:pl-0 md:pr-4" src="/speaking-apex.png" alt="Frank speaking at a conference" />
                <div className="md:w-9/12">
                  <h4 className="font-bold text-lg text-blu">Find your APEX: Transitioning from Senior to Lead</h4>
                  <p>In this workshop we  focus on two topics: how to grow your career as a Lead Product Designer, and how to build trust and influence as an Individual Contributor. Through discussions and a few fun activities, this workshop will leave you with clarity and energy towards the next step of your career.</p>
                  <Link to="/contact" className="text-blu text-sm font-space uppercase">Learn More &#8594;</Link>
                </div>
              </div>
            </Container>
          </div>

          <Container isNarrow className="speakingGrid">
            <Talks talkList={talkItems} />
            <Interviews
              interviewWebList={homeContent.interviewWeb}
              interviewPodcastList={homeContent.interviewPodcast}
            />
          </Container>

        </div>

      </Layout>
    )
  }
}

export default SpeakingIndex

export const pageQuery = graphql`
  query SpeakingIndexQuery {
    allContentfulSpeakingPage(filter: {}) {
      edges {
        node {
          heroCopy {
            childMarkdownRemark {
              html
            }
          }
          heroImages {
            contentful_id
            title
            fluid(maxHeight: 550, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          speakingTitle
        }
      }
    }
    allContentfulHomePage(filter: {}) {
      edges {
        node {
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
    allContentfulTalkItem(filter: {}) {
      edges {
        node {

          contentful_id
          location
          city

        }
      }
    }
  }
`
