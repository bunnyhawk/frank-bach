import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import Navigation from './navigation'
import Container from './container'

import Twitter from "../../static/twitter.svg"
import Instagram from "../../static/instagram.svg"

const Header = ({ children, workTitles }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return (
    <header id="header" className={[hideOnScroll ? 'visible' : 'hide', "fixed bg-white pl-10 pr-20 md:pr-10"].join(' ')}>
      <Container>
        <div className={["menu block md:hidden"].join(' ')}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <Navigation className="nav" isMobile />
        </div>
        <div className="flex items-center">
          <div className="flex-1 font-header text-lg"><Link to="/">Frank Bach</Link></div>
          <div className="flex-1 text-center">
            <div className="flex items-center my-7">
              <div className="flex-1 text-lg">
                <Navigation className={["hidden md:block"].join(' ')} />
              </div>

              <ul className="flex">
                <li className="flex-1 mr-6">
                  <a href="https://twitter.com/francois_bach">
                    <Twitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li className="flex-1 mr-2">
                  <a href="https://instagram.com/francoisbach_">
                    <Instagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}


export default Header
