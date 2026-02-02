import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

class CustomCarousel extends React.Component{
  render(){
    return (
    <Carousel>
      <Carousel.Item>
        <img style={{width:"100%", height:"250px", marginRight:"0px"}} src="https://admin.beta.indiaretailing.com/files/uploads/2020/10/lifestyle-640x400-1-e1710485854475.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%", height:"250px", marginRight:"0px"}} src="https://admin.beta.indiaretailing.com/files/uploads/2020/10/lifestyle-640x400-1-e1710485854475.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%", height:"250px", marginRight:"0px"}} src='https://admin.beta.indiaretailing.com/files/uploads/2020/10/lifestyle-640x400-1-e1710485854475.jpg' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  }
}

export default CustomCarousel;