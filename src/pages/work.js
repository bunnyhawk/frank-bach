import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

class WorkIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const work = get(this, 'props.data.allContentfulWork.edges')
    console.log(work)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="pt-20 pb-12 text-center">
            <h1 className="font-header text-3xl mb-8">My design principles</h1>
            <p className="font-space">Put users in the centre and business next to them<br />
            Work in an iterative, flexible and collaborative manner<br />
            Not everything that matters is measurable</p>
          </div>
        </div>
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
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
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
