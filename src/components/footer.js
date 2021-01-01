import React from 'react'
import { Link } from 'gatsby'

import TopBackground from './top-bg';

import styles from './footer.module.css'

import Twitter from '../../static/twitter.svg'
import Instagram from '../../static/instagram.svg'
import LinkedIn from '../../static/linkedin.svg'

const Footer = ({ workTitles }) => {
  const year = new Date().getFullYear();
  return (
    <>
      <TopBackground />

      <footer className={[styles.footer, "bg-black text-white px-10"].join(' ')}>
        <div className="container m-auto">
          <nav role="navigation" className={[styles.footerNav, 'text-sm lh-2 flex'].join(' ')}>
            <div className="container flex m-auto">
              <Link to="/" className="font-header flex-1">Home</Link>
              <ul className="flex-1">
                <li className="font-header">
                  <Link to="/work/">Work</Link>
                </li>
                {workTitles && workTitles.map(({ node }) => (
                  <li key={node.slug}>
                    <Link to={`/work/#${node.slug}`}>{node.title}</Link>
                  </li>
                ))}
              </ul>
              <ul className="font-header flex-1">
                <li>
                  <Link to="/speaking/">Speaking</Link>
                </li>
                <li>
                  <Link to="/blog/">Blog</Link>
                </li>
                <li>
                  <Link to="/shop/">Shop</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
              <div className="flex-1">
                <div className="font-header mb-4">Follow along</div>
                <ul className="flex">
                  <li className="mr-5">
                    <Link to="https://twitter.com/francois_bach">
                      <Twitter />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </li>
                  <li className="mr-5">
                    <Link to="https://instagram.com/francoisbach_">
                      <Instagram />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/francoisbach/">
                      <LinkedIn />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
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
    </>
  )
}

export default Footer
