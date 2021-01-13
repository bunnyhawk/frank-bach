import React from 'react'
import { Link } from 'gatsby'

import NavigationFooter from './navigation-footer';

import styles from './footer.module.css'

import Twitter from '../../static/twitter.svg'
import Instagram from '../../static/instagram.svg'
import LinkedIn from '../../static/linkedin.svg'

const Footer = ({ workTitles }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={[styles.footer, "bg-black text-white relative"].join(' ')}>
      <div className="container m-auto">
        <NavigationFooter className="md:hidden" />
        <nav role="navigation" className={[styles.footerNav, 'hidden md:block text-sm lh-2 flex'].join(' ')}>
          <div className="container flex m-auto items-start">
            <div className="flex-1">
              <Link to="/" className="font-header text-white">Home</Link>
            </div>
            <ul className="flex-1">
              <li className="font-header">
                <Link to="/work/" className="text-white">Work</Link>
              </li>
              {workTitles && workTitles.map(({ node }) => (
                <li key={node.slug}>
                  <Link to={`/work/#${node.slug}`} className="text-white">{node.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="font-header flex-1">
              <li>
                <Link to="/speaking/" className="text-white">Speaking</Link>
              </li>
              <li>
                <Link to="/blog/" className="text-white">Blog</Link>
              </li>
              <li>
                <Link to="/shop/" className="text-white">Shop</Link>
              </li>
              <li>
                <Link to="/contact/" className="text-white">Contact</Link>
              </li>
            </ul>
            <div className="flex-1">
              <div className="font-header mb-4">Follow along</div>
              <ul className="flex">
                <li className="mr-5">
                  <a href="https://twitter.com/francois_bach" className="text-white">
                    <Twitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li className="mr-5">
                  <a href="https://instagram.com/francoisbach_">
                    <Instagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/francoisbach/" className="text-white">
                    <LinkedIn />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="m-auto text-center">
          <small className="font-space">© <span id="year">{year}</span> Today Tomorrow Forever <span role="img" aria-label="palm tree">🌴</span><span role="img" aria-label="fire"></span>🔥 Los Angeles</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
