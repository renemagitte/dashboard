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
    
    setTheme = (incomingTheme) => {
        this.setState({ theme: incomingTheme });
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
        
        <div className={settingsClass}>
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose theme
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" onClick={() => this.setTheme('defaultTheme')}>Default Theme</a>
                <a class="dropdown-item" onClick={() => this.setTheme('incrementalGameTheme')}>Ode To Incremental Game Theme</a>
              </div>
            </div>
        </div>
        
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
