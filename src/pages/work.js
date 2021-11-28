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
        <div className="pt-20">
          <Container isNarrow className="mb-20 text-center">
            <h1 className="font-header text-3xl mb-8">My design principles</h1>
            <p className="px-8">Put users in the centre and business next to them<br />
              Work in an iterative, flexible and collaborative manner<br />
              Not everything that matters is measurable</p>
            <img src={`/design-principles.png`} alt="design principles flow chart" className="w-9/12 m-auto" />
          </Container>
          {work.map(({ node }, index) => {
            const { title, slug, heroImages, description, role, body, workLinkText, workLinkHref } = node;
            const isEven = index % 2;
            return (
              <section id={slug}>
                <div className={isEven ? [styles.workDark, 'bg-black text-white pt-32 relative'].join(' ') : 'bg-white text-black pt-20'}>
                  <Container isNarrow className="px-6">
                    <h2 className="font-header text-4xl">{title}</h2>
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
              ...GatsbyContentfulFluid_withWebp
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
