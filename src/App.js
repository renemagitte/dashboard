import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Cartoon from './components/Cartoon';
import Tarot from './components/Tarot';

class App extends Component {
    
    state = {
        theme: 'defaultTheme',
//        tarotDeck: 'rider',
        toggleSettings: false
    }

//    componentDidMount() {
//        if(localStorage.getItem('tarotDeck')){ 
//            let storedTarotDeck = JSON.parse(localStorage.getItem('tarotDeck'));
//            this.setState({ tarotDeck: storedTarotDeck });
//        }
//    }

    handleToggle = () => {
        this.setState({ toggleSettings: !this.state.toggleSettings });
    }
    
    setTheme = (incomingTheme) => {
        this.setState({ theme: incomingTheme });
    }
    
    setTarotDeck = (incomingDeck) => {
//        this.setState({ tarotDeck: incomingDeck});
        localStorage.setItem('tarotDeck', JSON.stringify(incomingDeck));
    }
    
  render() {
     
    let settingsClass = 'settingsContainer w3-animate-opacity';
    if(!this.state.toggleSettings){ settingsClass += ' invisible'; }
      
    let bonusWidget = <Tarot tarotDeck={this.state.tarotDeck} setTarotDeck={this.setTarotDeck} />
    if(this.state.theme === 'incrementalGameTheme'){ bonusWidget = <Cartoon />}
    
    return (

    <React.Fragment>
            <div className="fillButtonDiv" onClick={this.handleToggle}>
                <ion-icon name="color-fill"></ion-icon>
            </div>
        
        
        
        <div className={'totalContainer ' + this.state.theme }>
        
        <div className={settingsClass}>
        
            <div className="settingsCloseDiv" onClick={this.handleToggle}>
                <ion-icon name="close"></ion-icon>
            </div>
        
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose theme
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" onClick={() => this.setTheme('defaultTheme')}>Default Theme</a>
                <a class="dropdown-item" onClick={() => this.setTheme('incrementalGameTheme')}>Ode To Incremental Game Theme</a>
              </div>
            </div>
      
      
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose tarot deck
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" onClick={() => this.setTarotDeck('rider')}>Rider Waite (Classic)</a>
                <a class="dropdown-item" onClick={() => this.setTarotDeck('cats-eye')}>Cat's eye</a>
                <a class="dropdown-item" onClick={() => this.setTarotDeck('gummybear')}>Gummy Bear</a>
      
              </div>
            </div>
      
        </div>
        
            <div className="row">
                <Clock />
              
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
              <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div>
      { /* <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">col</div> */ }
      { bonusWidget }
                
            </div>
        </div>
    </React.Fragment>
        
    );
  }
}

export default App;
