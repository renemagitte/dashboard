import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
    state = {
        theme: 'defaultTheme',
        toggleSettings: true
    }

    handleToggle = () => {
        this.setState({ toggleSettings: !this.state.toggleSettings });
    }
    
  render() {
     
    let settingsClass = 'settingsContainer';
    if(!this.state.toggleSettings){ settingsClass += ' invisible'; }
    
    return (

    <React.Fragment>
            <div className="fillButtonDiv" onClick={this.handleToggle}>
                <ion-icon name="color-fill"></ion-icon>
            </div>
        
        
        
        <div className={'totalContainer ' + this.state.theme }>
        
        <div className={settingsClass}></div>
        
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
