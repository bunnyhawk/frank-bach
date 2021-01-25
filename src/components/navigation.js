import React from 'react'
import { Link } from 'gatsby'

import LinkedIn from '../../static/linkedin.svg'
import Twitter from '../../static/twitter.svg'
import Instagram from '../../static/instagram.svg'

const menuItems = [
  { title: 'Work', href: '/work/', },
  { title: 'Speaking', href: '/speaking/' },
  { title: 'Blog', href: '/blog/' },
  { title: 'Shop', href: 'https://sunshineshop.la/', isExternal: true },
  { title: 'Contact', href: '/contact/' },
]

export default ({ isMobile, className }) => (
  <nav role="navigation" className={[className, isMobile ? 'flex items-center justify-center' : 'mr-4 lg:mr-8'].join(' ')}>
    <ul className={["flex font-header", isMobile ? 'flex-col items-center' : ''].join(' ')}>
      {isMobile && (
        <li className="font-title text-2xl block uppercase mb-6"><Link to="/">Home</Link></li>
      )}
      {menuItems.map((item, index) => (
        <li key={`${item.title}-${index}`} className={[isMobile ? 'font-title text-2xl block uppercase mb-6' : '', "flex-grow"].join(' ')}>
          {
            item.isExternal
              ? (<a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>)
              : (<Link to={item.href}>{item.title}</Link>)
          }
        </li>
      ))}
      {isMobile && (
        <li className='mobile-social font-title text-2xl block uppercase flex mt-2'>
          <a href="https://twitter.com/francois_bach" className="mr-6" target="_blank" rel="noreferrer">
            <Twitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://instagram.com/francoisbach_" target="_blank" rel="noreferrer">
            <Instagram />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/francoisbach/" className="ml-6" target="_blank" rel="noreferrer">
            <LinkedIn />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
      )}
    </ul>
  </nav>
)