import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'
import WorkCarousel from '../components/work-carousel'
import LetsWork from '../components/lets-work'
class WorkIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const work = get(this, 'props.data.allContentfulWork.edges')


    return (
      <Layout location={this.props.location}>
        <Helmet title="Work - Frank Bach" />
        <div className="pt-40 -m-20">
          <Container isNarrow className="mb-32 text-center">
            <h1 className="font-header text-3xl mb-8">My design principles</h1>
            <p className="font-space">Put users in the centre and business next to them<br />
            Work in an iterative, flexible and collaborative manner<br />
            Not everything that matters is measurable</p>
            <img src={`/design-principles.png`} alt="design principles flow chart" className="w-9/12 m-auto" />
          </Container>
          {work.map(({ node }, index) => {
            const { title, slug, heroImages, description, role, body, workLinkText, workLinkHref } = node;
            return (
              <section id={slug}>
                <div className={index % 2 ? 'bg-black text-white py-20' : 'bg-white text-black py-20'}>


                  <Container isNarrow>
                    <h2 className="font-header fs-40">{title}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                      }}
                    />
                  </Container>
                  <WorkCarousel data={heroImages} />
                  <Container isNarrow className="mt-10 mb-20">
                    <div className="flex">
                      <div className="w-5/12 text-sm font-space uppercase">
                        <strong>Role:</strong> {role}<br />
                        <a href={workLinkHref}>{workLinkText}</a>
                      </div>
                      <div className="w-7/12">
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
        <LetsWork />
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
            fluid(maxWidth: 1200, maxHeight: 550, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
