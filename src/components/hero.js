import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';

import * as styles from './hero.module.css';

const words = ['health', 'happiness', 'mindfulness'];


const Hero = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 &&
      index !== words.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
      150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (

    <div className={styles.hero}>

      <div className={styles.heroImageWrapper}>
        <Img
          className={styles.image}
          alt={data.name}
          fluid={data.fluid}
          backgroundColor={true}
        />
      </div>
      <div className={styles.heroHeadline}>
        <h3 className="font-title text-3xl md:text-6xl md:mb-10 mt-2 mx-auto text-left">
          Designing for {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h3>
      </div>
      <p className="hidden md:block font-space uppercase text-sm text-gray-400 mb-8">
        I’ve worked with some of the world’s most loved brands and products
      </p>
    </div>
  )
}

export default Hero;