import React, { Component } from 'react';
import { Button, Jumbotron, Carousel } from 'react-bootstrap';

class Collage extends Component {

    render () {
        const carouselStyle = {
            background: '#fff',
            color: 'red'
        }
        const textStyle = {
            color: '#333'
        }
        const slideStyle = {
            margin: '0 auto',
            color: 'red'
        }
        return (
         
                    <Carousel style={carouselStyle}>
                    <Carousel.Item >
                        <img width={900} height={400} style={slideStyle} alt="900x500" src="https://s7d9.scene7.com/is/image/Audiusastaging/2018-Audi-R8-Spyder-Tango-Red?wid=1332&hei=685" />
                        <Carousel.Caption>
                        <h3 style={textStyle}>First slide label</h3>
                        <p style={textStyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={400} style={slideStyle} alt="900x500" src="https://s7d9.scene7.com/is/image/Audiusastaging/2018-Audi-R8-Spyder-Mythos-Black?wid=1332&hei=685" />
                        <Carousel.Caption>
                        <h3 style={textStyle}>Second slide label</h3>
                        <p style={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={400} style={slideStyle} alt="900x500" src="https://s7d9.scene7.com/is/image/Audiusastaging/2018-Audi-R8-Spyder-Vegas-Yellow?wid=1332&hei=685" />
                        <Carousel.Caption>
                        <h3 style={textStyle}>Third slide label</h3>
                        <p style={textStyle}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
        )
    }
}

export default Collage;