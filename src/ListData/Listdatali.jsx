import React, { Component } from 'react';
import '../style.css';

class ListDataLi extends React.Component {
  render() {
    return (
      <li>
        <p>I'm <b>{this.props.name}</b> and i am <b>{this.props.age}</b> years old! 
          <a href="#" 
            onClick={this.props.click} 
            className="badge">Delete
          </a>
        </p>        
      </li>
    );
  }
}

export default ListDataLi;
