import React from 'react'
import Img from 'gatsby-image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import Container from './container'
import styles from './hype.module.css'


const Hype = ({ data }) => {
  return (
    <Container>
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={225}
        totalSlides={data.length}
        className={[styles.carousel, "m-auto relative px-20"].join(' ')}
      >
        <Slider>
          {data.map(({ node, index }) => (
            <Slide index={index} key={node.contentful_id}>
              <figure className="flex items-center" style={{ width: 600, height: 225 }}>
                <Img fluid={node.picture.fluid} className="mr-8" alt={node.picture.title} style={{ width: 90 }} />
                <div className="flex-1">
                  <blockquote>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.quote.childMarkdownRemark.html,
                      }}
                    />

                  </blockquote>
                  <figcaption className="font-space">
                    <span className="text-blu">{node.name}</span> {node.title}
                  </figcaption>
                </div>
              </figure>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className={[styles.carouselButton, styles.carouselLeftButton].join(' ')}>
          <img src="/left-arrow.png" alt="Left Arrow" />
          <span className="sr-only">Back</span>
        </ButtonBack>
        <ButtonNext className={[styles.carouselButton, styles.carouselRightButton].join(' ')}>
          <img src="/right-arrow.png" alt="Right Arrow" />
          <span className="sr-only">Next</span>
        </ButtonNext>
      </CarouselProvider>
    </Container>
  );
}

export default Hype;
