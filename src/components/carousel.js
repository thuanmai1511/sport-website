import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Carousel1 from '../img/background2.jpg';
import Carousel2 from '../img/background1.jpg';
import Carousel3 from '../img/carousel3.png';




const items = [
  {
    src: Carousel2,
    key: '1'
  },
  {
    src: Carousel1,
    key: '2'
  },
  {
    src:  Carousel3,
    key: '3'
  }
];

const Example = () =><div  > <UncontrolledCarousel items={items} /></div>;

export default Example;