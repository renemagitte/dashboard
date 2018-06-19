import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
    state = {
        theme: 'defaultTheme',
        
    }

    
  render() {
    
    return (

    <React.Fragment>
        <div className={'outerContainer ' + this.state.theme }>
            <div className="row">
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
            </div>
        </div>
    </React.Fragment>
        
    );
  }
}

export default App;
