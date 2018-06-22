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


    handleToggle = () => {
        this.setState({ toggleSettings: !this.state.toggleSettings });
    }
    
    enterTarot = () => {
        this.setState({ toggleEnterTarot: !this.state.toggleSettings });
    }
    
    handleTarotToggle = () => {
        this.setState({ toggleEnterTarot: !this.state.toggleEnterTarot });
    }
    
    setSettings = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        
        if(event.target.name === 'tarotDeck'){
            this.saveTarotDeck(event.target.value);
        }
    }
    
    saveTarotDeck = (incomingDeck) => {
        this.setState({ tarotDeck: incomingDeck });
        localStorage.setItem('tarotDeck', JSON.stringify(incomingDeck));
    }
    
    componentDidMount() {
        if(localStorage.getItem('tarotDeck')){ 
            let storedTarotDeck = JSON.parse(localStorage.getItem('tarotDeck'));
            this.setState({ tarotDeck: storedTarotDeck });
        }
    }
    
  render() {
      
    let bonusWidget = <Tarot tarotDeck={this.state.tarotDeck} setTarotDeck={this.setTarotDeck} enterTarot={this.enterTarot}/>
    if(this.state.theme === 'incrementalGameTheme'){ bonusWidget = <Cartoon />}
    
    let enterTarot = '';
    if(this.state.toggleEnterTarot){
        enterTarot = <EnterTarot tarotDeck={this.state.tarotDeck} handleTarotToggle={this.handleTarotToggle}/>
    }
                                    
    let settings = '';
    if(this.state.toggleSettings){
        settings =  <Settings setTheme={this.setTheme} 
                                setHandwriting={this.setHandwriting} 
                                handleToggle={this.handleToggle} 
                                setTarotDeck={this.setTarotDeck} 
                                setSettings={this.setSettings}
                                saveTarotDeck={this.saveTarotDeck}
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
