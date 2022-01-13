import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import Navigation from './navigation'
import Container from './container'
import Sun from './sun'

import Twitter from "../../static/twitter.svg"
import Instagram from "../../static/instagram.svg"

const Header = ({ children, workTitles }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y >= -200 || currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return (
    <header id="header" className={[hideOnScroll ? 'visible' : 'hide', "fixed bg-white pl-10 pr-16 md:pr-10"].join(' ')}>
      <Container>
        <div className={["menu block md:hidden"].join(' ')}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <Navigation className="nav" isMobile />
        </div>
        <div className="flex items-center">
          <div className="md:flex-1 font-title text-lg uppercase">
            <Link to="/" className="text-black hover:text-black"><Sun />Frank Bach</Link>
          </div>
          <div className="flex-1 text-center">
            <div className="flex items-center my-7">
              <div className="flex-1 text-lg">
                <Navigation className={["hidden md:block"].join(' ')} />
              </div>

              <ul className="flex">
                <li className="flex-1 mr-2 md:mr-6">
                  <a href="https://twitter.com/zendadddy" target="_blank" rel="noreferrer" className="icon">
                    <Twitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li className="flex-1 mr-2">
                  <a href="https://instagram.com/zen.daddy" target="_blank" rel="noreferrer" className="icon">
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
