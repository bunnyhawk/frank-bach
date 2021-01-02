import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'
import CtaButtonLink from '../components/cta-button-link';

class NotFoundIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Container className="pt-24">
          <Helmet title={siteTitle} />
          <div className="pt-20 pb-12">
            <h1 className="font-header text-3xl mb-8">This page doesn’t exist <span role="img" aria-label="black hole">🕳</span></h1>
            <p>Does anything truly exist?</p>
            <p>What if reality in its entirety a dream, an illusion? What if there was nothing at all, nothing that could be experienced?</p>
            <CtaButtonLink to="/" text="Go Home &#8594;" />
          </div>
        </Container>
      </Layout>
    )
  }
}

export default NotFoundIndex