import React from 'react'
import { Link } from 'gatsby'

import LinkedIn from '../../static/linkedin.svg'
import Twitter from '../../static/twitter.svg'
import Instagram from '../../static/instagram.svg'

const menuItems = [
  { title: 'Work', href: '/work/' },
  { title: 'Speaking', href: '/speaking/' },
  { title: 'Blog', href: '/blog/' },
  { title: 'Shop', href: '/shop/' },
  { title: 'Contact', href: '/contact/' },
]

export default ({ className }) => (
  <nav role="navigation" className={[className, 'flex items-center justify-center'].join(' ')}>
    <ul className="flex font-header flex-col items-center py-20">

      <li className="block text-lg block mb-4"><Link to="/" className="text-white">Home</Link></li>

      {menuItems.map((item, index) => (
        <li key={`${item.title}-${index}`} className="block text-lg block mb-4">
          <Link to={item.href} className="text-white">{item.title}</Link>
        </li>
      ))}

      <li className="mobile-social block flex mt-2">
        <a href="https://twitter.com/francois_bach" className="mr-6">
          <Twitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://instagram.com/francoisbach_">
          <Instagram />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/francoisbach/" className="ml-6">
          <LinkedIn />
          <span className="sr-only">LinkedIn</span>
        </a>
      </li>

    </ul>
  </nav>
)