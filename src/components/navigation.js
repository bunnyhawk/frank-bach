import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav role="navigation">
    <ul className="flex font-header">
      <li className="flex-grow">
        <Link to="/work/">Work</Link>
      </li>
      <li className="flex-grow">
        <Link to="/speaking/">Speaking</Link>
      </li>
      <li className="flex-grow">
        <Link to="/blog/">Blog</Link>
      </li>
      <li className="flex-grow">
        <Link to="/shop/">Shop</Link>
      </li>
      <li className="flex-grow">
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)
