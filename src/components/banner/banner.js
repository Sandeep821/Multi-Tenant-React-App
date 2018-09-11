import React, { Component } from 'react';

class Banner extends Component {
  render() {
    const banner = {
        background: '#fff',
        padding: '10px'
    };

    let listItems = this.props.data.map(function(item) {
        return (
            <div class="col-lg-2" style={banner}>
            <img class="pull-left" width={350} height={200} src={item.image}></img>
            <h2 class="pull-left">{item.title}</h2>
            </div>
        );
      });

    return (
        <div> {listItems}</div>
    )}
}

export default Banner;