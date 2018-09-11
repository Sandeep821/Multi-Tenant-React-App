import React from 'react';
import Collage from '../components/collage/collage'
import Banner from '../components/banner/banner'

class Home extends React.Component {
    render() {
        const wrapper = {
            background: '#fff'
            }
        
        const bannerHeading = {
         margin: '10px 0 20px -8px'
        }
        
        return (
                <div style={wrapper}>
                   <div class="row">
                    <div class="col-lg-12">
                    <Collage data={this.props.data.element.details.carouselData}></Collage>
                    </div>
                    </div>
        
                <div class="row align-items-start">
                <div class="col-lg-10 offset-lg-3">
                    <h1 class="pull-left" style={bannerHeading}>{this.props.data.verbiage.bannerheading}</h1>
                    </div>
                    <div class="col-lg-9 offset-lg-3">
                    <Banner data={this.props.data.element.details.bannersData}></Banner>
                    </div>
                </div>

            </div>
               
        )
    }
}
export default Home 
