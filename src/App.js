import React, { Component } from 'react';
import './App.css';
import Settings from './components/Settings';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Currency from './components/Currency';
import Timer from './components/Timer';
import Note from './components/Note';
import Cartoon from './components/Cartoon';
import Tarot from './components/Tarot';
import EnterTarot from './components/EnterTarot';


class App extends Component {
    
    state = {
        theme: 'defaultTheme',
        tarotDeck: 'rider',
        handwriting: 'gaegu',
        toggleSettings: false,
        toggleEnterTarot: false
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
    
//    setTheme = (event) => {
//        this.setState({ theme: event.target.value });
//    }
//    setHandwriting = (event) => {
//        this.setState({ handwriting: event.target.value });
//    }
//    setTarotDeck = (event) => {
//        this.setState({ tarotDeck: event.target.value });
//    }
    
    setSettings = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
//    setTarotDeck = (incomingDeck) => {
//        localStorage.setItem('tarotDeck', JSON.stringify(incomingDeck));
//    }
    
    enterTarot = () => {
        this.setState({ toggleEnterTarot: !this.state.toggleSettings });
    }
    
  render() {
    
      { /* 
    let settingsClass = 'settingsContainer w3-animate-opacity';
    if(!this.state.toggleSettings){ settingsClass += ' invisible'; }
    */ }
      
    let bonusWidget = <Tarot tarotDeck={this.state.tarotDeck} setTarotDeck={this.setTarotDeck} enterTarot={this.enterTarot}/>
    if(this.state.theme === 'incrementalGameTheme'){ bonusWidget = <Cartoon />}
    
    let enterTarot = '';
    if(this.state.toggleEnterTarot){
        enterTarot = <EnterTarot tarotDeck={this.state.tarotDeck} />
    }
                                    
    let settings = '';
    if(this.state.toggleSettings){
        settings =  <Settings setTheme={this.setTheme} 
                                setHandwriting={this.setHandwriting} 
                                handleToggle={this.handleToggle} 
                                setTarotDeck={this.setTarotDeck} 
                                setSettings={this.setSettings}
                    />
    }
    
    return (

        <React.Fragment>
        
            { enterTarot }
        
            { settings }
        
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
        
        
        
                { /* SETTINGS! MOVE THIS 
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
                END OF SETTINGS! MOVE THIS */ }
        
      

      
      
                <div className="row">
                    <Clock />
                    <Weather />
                    <Currency />
                    { bonusWidget }
                    <Timer />
                    <Note handwriting={this.state.handwriting} />
                </div>
      
            </div>
        </React.Fragment>
        
    );
  }
}

export default App;
