import React from 'react';
import Img from 'gatsby-image';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const WorkCarousel = ({ data, darkTheme, className, slideHeight, slightWidth }) => {

  return (
    <CarouselProvider
      naturalSlideWidth={slightWidth}
      naturalSlideHeight={slideHeight}
      totalSlides={data.length}
      className={["m-auto relative", className].join(' ')}
      isPlaying
    >
      <Slider>
        {data.map((node, index) => (
          <Slide index={index} key={node.contentful_id}>
            <Img fluid={node.fluid} className="" alt={node.title} />
          </Slide>
        ))}
      </Slider>
      <DotGroup className={darkTheme ? 'is-dark' : ''} />
    </CarouselProvider>
  );
}

export default WorkCarousel;
