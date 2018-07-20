import React, { Component } from 'react';
import './Rightcol.css';
import r1 from './r1.png';
import r2 from './rimp.jpg';
import r3 from './r7.png';


class RightColumn extends Component {
  render() {
    return (
   
   <div className="pt-5 pb-5 img1 ">
     
        <img className=" img img-fluid pt-5 pb-5      " src={r1} />
        
        <img className="img img-fluid img-responsive   pt-5 pb-5 "  src={r3} />
  
        
        <img className="img img-fluid img-responsive    pt-5 pb-5 "  src={r2} />
    </div>
       
    );
  }
}

export default RightColumn;
 