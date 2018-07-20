import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Content from './content/Content';
import RightColumn from './rightColumn/RightColumn.jsx';
class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-12'>
              <Header/>
            </div>
        </div>
          <div className='container'>
          <div className='row'>
        
            <div className='col-sm-8'>
             <Content/>
            </div>
            <div className='col-sm-1'></div>
            <div className='col-sm-3'>
              <RightColumn/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
