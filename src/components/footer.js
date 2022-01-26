import React from 'react'

import NavigationFooter from './navigation-footer'
import Container from './container'

import * as styles from './footer.module.css'

import Twitter from '../../static/twitter.svg'
import Instagram from '../../static/instagram.svg'
import LinkedIn from '../../static/linkedin.svg'
import TikTok from '../../static/tiktok.svg'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={[styles.footer, "bg-black text-white relative"].join(' ')}>
      <Container>
        <NavigationFooter className="md:hidden" />
        <nav role="navigation" className={[styles.footerNav, 'hidden md:block text-sm lh-2 flex'].join(' ')}>
          <div className="container flex m-auto justify-center">
            <div className="text-center">
              <div className="font-header mb-4">Follow along</div>
              <ul className="flex">
                <li className="mr-5">
                  <a href="https://twitter.com/zendadddy" className="icon" target="_blank" rel="noreferrer">
                    <Twitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li className="mr-5">
                  <a href="https://instagram.com/zen.daddy" className="icon" target="_blank" rel="noreferrer">
                    <Instagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
                <li className="mr-5">
                  <a href="https://www.linkedin.com/in/francoisbach/" className="icon" target="_blank" rel="noreferrer">
                    <LinkedIn />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@frankbach" className="icon" target="_blank" rel="noreferrer">
                    <TikTok />
                    <span className="sr-only">TikTok</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="m-auto text-center">
          <small className="font-space uppercase">© <span id="year">{year}</span> Today Tomorrow Forever <span role="img" aria-label="palm tree">🌴</span><span role="img" aria-label="fire"></span>🔥 Los Angeles</small>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
