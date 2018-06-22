import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Currency from './components/Currency';
import Timer from './components/Timer';
import Note from './components/Note';
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
            <div className="settingsButton" onClick={this.handleToggle}>
                <ion-icon name="settings"></ion-icon>
            </div>
        
        
        
        <div className={'totalContainer ' + this.state.theme }>
        
                <div className="mobileMenu">
                    <ion-icon name="settings" onClick={this.handleToggle}></ion-icon>
                    <a href="#clockContainer"><ion-icon name="time"></ion-icon></a>
                    <a href="#weatherContainer"><ion-icon name="cloud"></ion-icon></a>
                    <a href="#currencyContainer"><ion-icon name="cash"></ion-icon></a>
                    <a href="#tarotContainer"><ion-icon name="planet"></ion-icon></a>
                    <a href="#timerContainer"><ion-icon name="timer"></ion-icon></a>
                    <a href="#noteContainer"><ion-icon name="paper-plane"></ion-icon></a>
                </div>
        
                <div className={settingsClass}>

                    <div className="settingsCloseDiv" onClick={this.handleToggle}>
                        <ion-icon name="close"></ion-icon>
                    </div>

                    <div className="btn-group">
                      <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose theme
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={() => this.setTheme('defaultTheme')}>Default Theme</a>
                        <a className="dropdown-item" onClick={() => this.setTheme('incrementalGameTheme')}>R.I.P. Incremental Game Theme</a>
                      </div>
                    </div>


                    <div className="btn-group">
                      <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose tarot deck
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={() => this.setTarotDeck('rider')}>Rider Waite (Classic)</a>
                        <a className="dropdown-item" onClick={() => this.setTarotDeck('cats-eye')}>Cat's eye</a>
                        <a className="dropdown-item" onClick={() => this.setTarotDeck('gummybear')}>Gummy Bear</a>

                      </div>
                    </div>
                    Refresh page to get the new tarot deck.

                 </div>
        
            <div className="row">
                <Clock />
                <Weather />
                <Currency />
                { bonusWidget }
                <Timer />
                <Note />
            </div>
        </div>
    </React.Fragment>
        
    );
  }
}

export default App;
