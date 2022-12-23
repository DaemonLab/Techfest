import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Compt from "../public/images/DBZposter.jpeg"

export default class extends React.Component {
  render() {
    return (
      <div className='flex flex-row'>
        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={125}
          totalSlides={3}
          className="flex flex-row justify-center"
        >
          <ButtonBack className='text-white text-3xl pl-4 lg:pl-8 hover:bg-gray-900 pr-4 lg:pr-8'>&lt;</ButtonBack>
          <Slider className='bg-red-500 w-96 lg:w-1/2 h-96-imp'>
            <Slide index={0} className="w-96 lg:w-1/2 h-96-imp"></Slide>
            <Slide index={1} className="w-96 lg:w-1/2 h-96-imp"></Slide>
            <Slide index={2} className="w-96 lg:w-1/2 h-96-imp"></Slide>
          </Slider>
          <Slider className='bg-red-500 w-1/2 h-96-imp ml-4 hidden lg:block'>
            <Slide index={0} className="w-96 lg:w-1/2 h-96-imp"></Slide>
            <Slide index={1} className="w-96 lg:w-1/2 h-96-imp"></Slide>
            <Slide index={2} className="w-96 lg:w-1/2 h-96-imp"></Slide>
          </Slider>
          <Slider className='bg-red-500 w-1/2 h-96-imp ml-4 hidden lg:block'>
            <Slide index={0} className="w-96 lg:w-1/2 h-96-imp"></Slide>
            <Slide index={1} className="w-96 lg:w-1/2 h-96-imp"></Slide>
            <Slide index={1} className="w-96 lg:w-1/2 h-96-imp"></Slide>
          </Slider>
          <ButtonNext className='text-white text-3xl pl-4 lg:pl-8 hover:bg-gray-900 pr-4 lg:pr-8'>&gt;</ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}