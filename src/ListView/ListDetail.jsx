import React, { Component } from 'react';
import '../style.css';

class ListDetail extends React.Component {  
  render() { 
    console.log(this.props);
    console.log(this.props.match.params.name)
    return (
      <div className="list_detail">
        <h4>List Detail</h4>
        <p>Name: {this.props.match.params.name}</p>        
      </div>
    );
  }
}

export default ListDetail;

// <img src={this.props.params.img} className="img-responsive" />