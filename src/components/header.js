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
    false,
    false,
    300
  )

  return (

    <header id="header" className={[hideOnScroll ? 'visible' : 'hide', "bg-white  px-10"].join(' ')}>
      <Container>
        <div className="flex items-center">
          <div className="flex-1 font-header text-lg"><Link to="/">Frank Bach</Link></div>
          <div className="flex-1 text-center">
            <div className="flex items-center my-7">
              <div className="flex-1 text-lg">
                <Navigation />
              </div>

              <ul className="flex">
                <li className="flex-1 mx-4"><Twitter /></li>
                <li className="flex-1 mx-4"><Instagram /></li>
              </ul>

            </div>
          </div>
        </div>
      </Container>
    </header>

  )

}


export default Header
