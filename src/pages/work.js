import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'
import WorkCarousel from '../components/work-carousel'
import LetsWork from '../components/lets-work'

import styles from './work.module.css'

class WorkIndex extends React.Component {
  render() {
    const work = get(this, 'props.data.allContentfulWork.edges')


    return (
      <Layout location={this.props.location}>
        <Helmet title="Work - Frank Bach" />
        <div className="mt-10 md:mt-20">
          <Container isNarrow className="px-6">
            <h1 className="font-header text-2xl md:text-3xl mb-2">My design principles</h1>
            <div className="pb-14 text-xl md:text-2xl border-b border-grey">
              <ul className="pb-8 list-disc	pl-6">
                <li>Put users in the centre and business next to them</li>
                <li>Work in an iterative, flexible and collaborative manner</li>
                <li>Not everything that matters is measurable</li>
                <li>Everything is a work in progress</li>
              </ul>
              <p>See some of my work <span role="img" aria-label="Down arrow">⤵️</span></p>
            </div>
          </Container>
          {work.map(({ node }, index) => {
            const { title, slug, heroImages, description, role, body, workLinkText, workLinkHref } = node;
            const isEven = index % 2;
            return (
              <section id={slug}>
                <div className={isEven ? [styles.workDark, 'bg-black text-white pt-32 relative'].join(' ') : 'bg-white text-black pt-20'}>
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
                    slideHeight={500}
                    slightWidth={parseInt(heroImages[0].fluid.aspectRatio * 500, 10)}
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
        <LetsWork isDark />
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
            fluid(maxHeight: 500, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
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
