import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'
import WorkCarousel from '../components/work-carousel'
import LetsWork from '../components/lets-work'

import * as styles from './work.module.css'

class WorkIndex extends React.Component {
  render() {
    const work = get(this, 'props.data.allContentfulWork.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title="Work - Frank Bach" />
        <div className="mt-10 md:mt-20">
          <div className="border-b border-grey">
            <Container isNarrow className="px-6">
              <h1 className="font-header text-2xl md:text-3xl mb-8">My design principles</h1>
              <div className="pb-14 text-xl md:text-2xl">
                <ul>
                  <li className="pb-6">In my work, I balance human needs, business goals, and technology. If you put people in the centre, the rest of the pieces fall into place.</li>
                  <li className="pb-6">Keep things iterative, flexible and collaborative. Be open to hearing other's ideas.</li>
                  <li className="pb-6">Rely on your gut for experimentation, but let data guide decision-making.</li>
                  <li className="pb-6">Measure what matters (but not everything that matters is measurable).</li>
                  <li className="pb-6">Below is a small selection of work and teams I've been a part of over the past decade. <span role="img" aria-label="Down arrow">⤵️</span></li>
                </ul>
              </div>
            </Container>
          </div>
          {work.map(({ node }, index) => {
            const { title, slug, heroImages, description, role, body, workLinkText, workLinkHref } = node;
            const isEven = index % 2;
            return (
              <section id={slug}>
                <div className={isEven ? [styles.workDark, 'bg-black text-white pt-32 mb-20 relative'].join(' ') : 'bg-white text-black pt-20'}>
                  <Container isNarrow className="px-6">
                    <h2 className="font-header text-3xl md:text-4xl">{title}</h2>
                    <p
                      className="text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                      }}
                    />
                  </Container>
                  <WorkCarousel
                    data={heroImages}
                    className="w-5/6 mt-10"
                    darkTheme={!!isEven}
                    slideHeight={heroImages[0].gatsbyImageData.height}
                    slightWidth={heroImages[0].gatsbyImageData.width}
                  />
                  <Container isNarrow className="pt-10 pb-16 px-6">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-5/12 mb-4 text-sm font-space uppercase">
                        <strong>Role:</strong> {role}<br />
                        <a href={workLinkHref} target="_blank" rel="noreferrer">{workLinkText}</a>
                      </div>
                      <div className="md:w-7/12">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: body.childMarkdownRemark.html,
                          }}
                        />
                      </div>
                    </div>
                  </Container>
                </div>
              </section>
            )
          })}

        </div>
        <LetsWork isDark={work.length % 3} />
      </Layout>
    )
  }
}

export default WorkIndex

export const pageQuery = graphql`
  query WorkIndexQuery {
    allContentfulWork(sort: { fields: [postDate], order: DESC }) {
      edges {
        node {
          title
          slug
          heroImages {
            contentful_id
            title
            gatsbyImageData(layout: CONSTRAINED)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          role
          body {
            childMarkdownRemark {
              html
            }
          }
          workLinkText
          workLinkHref
          postDate
        }
      }
    }
  }
`
