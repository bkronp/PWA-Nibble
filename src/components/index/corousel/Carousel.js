import React from 'react'
import Carousel from 'nuka-carousel'

export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="/Image/banner1.png" />
        <img src="/Image/banner2.png" />
        <img src="/Image/banner3.png" />
      </Carousel>
    );
  }
}