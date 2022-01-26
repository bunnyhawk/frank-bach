import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import * as styles from './lets-work.module.css'

const LetsWork = ({ isDark }) => {
  return (
    <div className={[styles.letsWorkWrapper, isDark ? 'bg-black' : ''].join(' ')}>
      <div className={[styles.letsWork, 'text-white px-6'].join(' ')}>
        <Container isNarrow>
          <h3 className={[styles.letsWorkHeader]}>Let’s work together <span role="img" aria-label="handshake">🤝</span></h3>
          <p>Hire me to speak at your event or conference in-person or via webinar. This year is booking up quickly, so get in touch soon.</p>
          <Link to="/contact" className="text-white hover:text-blu focus:text-blu active:text-blu bg-transparent hover:bg-white focus:bg-white active:bg-white border-2 border-white px-4 py-2 font-bold text-sm">Let's talk &#8594;</Link>
        </Container>
      </div>
    </div>
  )
}

export default LetsWork;
