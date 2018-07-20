import React, { Component } from 'react';
import './Header.css';
import headerImage from './bg1.png';
class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
                <img className="bg " src={headerImage}/> 
                <div className="centered"><b>About Us</b></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
