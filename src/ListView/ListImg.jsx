import React, { Component } from 'react';
import '../style.css';


class ListImg extends React.Component {
  render() {
    const { name, img, description , price, count, clicked } = this.props;
    return (
      <div className="list_img" onClick={clicked}> 
        <img src={img} className="img-responsive" />
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    );
  }
}

export default ListImg;
