import React, {
    Component
} from 'react';
import {
    Button,
    Jumbotron,
    Carousel
} from 'react-bootstrap';
import bugattiImage01Tp from '../../static/media/bugatti-veyron-png-2202.png';
import bugattiImage02White from '../../static/media/bigatti-white-small.jfif';

class Collage extends Component {

    render() {
            const carouselStyle = {
                background: '#fff',
                color: 'red',
                borderBottom:'1px solid #ddd'
            }
            const textStyle = {
                color: '#333'
            }
            const slideStyle = {
                margin: '0 auto',
                color: 'red'
            }
            console.log('Carousal data', this.props.data);
            let listItems = this.props.data.map(function (item) {

            return (
                <Carousel.Item >
                <img width={900} height={400} style={slideStyle} alt="900x500" src={item.image}/>
                <Carousel.Caption>
                <h3 style={textStyle}>{item.title}</h3>
                <p style={textStyle}>{item.description}</p>
                </Carousel.Caption>
                </Carousel.Item>
            );
          });
        return (
            <Carousel style={carouselStyle}>
            {listItems}
            </Carousel>
        )
    }
}

export default Collage;