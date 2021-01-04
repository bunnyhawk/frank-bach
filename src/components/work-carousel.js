import React from 'react';
import Img from 'gatsby-image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const WorkCarousel = ({ data }) => {

  return (
    <CarouselProvider
      naturalSlideWidth={1200}
      naturalSlideHeight={550}
      totalSlides={data.length}
      className={["m-auto relative px-20"].join(' ')}
    >
      <Slider>
        {data.map((node, index) => (
          <Slide index={index} key={node.contentful_id}>
            <Img fluid={node.fluid} className="" alt={node.title} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}

export default WorkCarousel;
