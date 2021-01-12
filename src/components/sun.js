import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Sun = () => {
  // let pathRef = useRef(null);
  // // const [pathPosition, setPathPosition] = useState(0)
  // const [docPosition, setDocPosition] = useState(null)

  const [pathPosition, setSunPosition] = useState({ height: 1 })
  // const [pathLength, setPathLength] = useState(null)
  // const [sunStyle, setSunStyle] = useState(`translate(100%, 100%)`)

  // useEffect(() => {
  //   setDocPosition(document.body.getBoundingClientRect())
  //   setPathPosition(pathRef.current.getBoundingClientRect())
  //   setPathLength(pathRef.current.getTotalLength())
  // }, [pathRef]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setPathPosition(pathRef.current.getBoundingClientRect())
      positionElements(currPos)
    },
    [pathPosition],
    null,
    false,
    300
  )

  const sunRef = useCallback(domNode => {
    if (domNode) {
      setSunDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  // // useCallback(domNode => {
  // //   if (domNode) {

  // //   }
  // // }, []);

  // // const path = document.querySelector('.path');
  // // const circle = document.querySelector('.circle');

  // // let pathPosition = path.getBoundingClientRect();
  // // let documentPosition = document.body.getBoundingClientRect();
  // // const pathTotalLength = path.getTotalLength();

  // const positionElements = (currPos) => {
  //   if (!pathRef) return

  //   // SVG passes center of screen
  //   const relativePageOffset = currPos.y + (window.pageYOffset + window.innerHeight);

  //   const pointPercentage = relativePageOffset / pathPosition.width;
  //   const pointOnPath = pointPercentage * pathLength;

  //   const pathPoint = pathRef.current.getPointAtLength(pointOnPath);
  //   console.log(pathPosition, pathPoint);
  //   setSunStyle(`translate(
  //     ${pathPosition.left + pathPoint.x}px,
  //     ${pathPosition.top + pathPoint.y}px
  //   )`)

  // }

  return (
    <div class="sunWrapper">
      {/* <svg width="1237" height="256" viewBox="0 0 1237 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={pathRef}
          d="M1 254.5C83.8333 168.5 346.4 -3.29987 610 1.50013C873.6 6.30013 1126.83 172.5 1236 254.5"
          stroke="black"
          stroke-opacity="0.1"
          stroke-width="2"
        />
      </svg> */}

      <img ref={sunRef} className="sun" src="/sun_symbol.png" alt="an illustrative sun" />
    </div>
  );
}

export default Sun
