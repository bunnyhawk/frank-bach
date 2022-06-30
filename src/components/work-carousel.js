import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'
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
            <GatsbyImage image={node.gatsbyImageData} className="" alt={node.title} />
          </Slide>
        ))}
      </Slider>
      <DotGroup className={darkTheme ? 'is-dark' : ''} />
    </CarouselProvider>
  );
}

export default WorkCarousel;
