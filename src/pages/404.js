import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'
import CtaButtonLink from '../components/cta-button-link';

class NotFoundIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} isShort>
        <Helmet title="404 - Frank Bach" />
        <Container isNarrow>

          <div className="flex items-center py-40 px-10">
            <div className="w-8/12 pr-4">
              <h1 className="font-header text-3xl mb-8">This page doesn’t exist <span role="img" aria-label="black hole">🕳</span></h1>
              <p>Does anything truly exist?</p>
              <p>What if reality in its entirety a dream, an illusion?<br />
                What if there was nothing at all, nothing that could be experienced?</p>
              <CtaButtonLink to="/" text="Go Home &#8594;" />
            </div>
            <img className="w-4/12" src={`/404-snoop.png`} alt="Snoopy asking what the meaning of life is" />
          </div>
        </Container>
      </Layout>
    )
  }
}

export default NotFoundIndex