import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'


const brandListItem = (brand) => (
  <li key={brand.contentful_id} className="w-full relative" style={{ maxHeight: 45 }}>
    <Img alt={brand.title} fluid={brand.fluid} className="h-full" imgStyle={{ objectFit: 'contain' }} />
  </li>
);

const ContactItem = ({ children }) => (
  <div className="flex-1 text-center mb-6">{children}</div>
)

class ContactIndex extends React.Component {
  render() {
    const brandsCollaborated = get(this, 'props.data.allContentfulBrandsCollaborated.edges[0].node.brand')

    return (
      <Layout location={this.props.location}>
        <Helmet title="Contact - Frank Bach" />
        <Container isNarrow className="mb-40">
          <div className="m-auto mb-12" style={{ width: 225 }}>
            <img src="/blackdot.gif" alt="growing black dot" />
          </div>
          <div className="flex flex-col md:flex-row mb-20">
            <ContactItem>
              <div className="font-bold"><span role="img" aria-label="Talking Head">🗣</span> Speaking engagements</div>
              <Link to="#">Fill out this form</Link>
            </ContactItem>
            <ContactItem>
              <div className="font-bold"><span role="img" aria-label="Painting with frame">🖼</span> Design projects</div>
              <a href="mailto:f@francoisbach.com">f@francoisbach.com</a>
            </ContactItem>
            <ContactItem>
              <div className="font-bold"><span role="img" aria-label="Star">🌟</span> Influencer collabs</div>
              <a href="mailto:f@francoisbach.com">f@francoisbach.com</a>
            </ContactItem>
          </div>
          <h2 className="font-space text-center text-sm mb-6">Brands I’ve collaborated with</h2>
          <ul className="flex flex-wrap mx-2">
            {brandsCollaborated.map(brandListItem)}
          </ul>
        </Container>
      </Layout>
    )
  }
}

export default ContactIndex;

export const pageQuery = graphql`
  query ContactIndexQuery {
    allContentfulBrandsCollaborated(filter: {}) {
      edges {
        node {
          brand {
            contentful_id
            title
            fluid(maxHeight: 45, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }  
          }
        }
      }
    }
  }
`