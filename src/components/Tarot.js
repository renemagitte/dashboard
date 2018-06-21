import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import tarotCardBack from './../img/tarotCardBack.jpg'

class Tarot extends Component {
    
    state = {
        tarotDeck: 'rider',
        card: tarotCardBack,
        turned: false,
        cardBaseUrl: 'https://gfx.tarot.com/images/site/decks/'
    }

    componentDidMount() {
        this.setState({ tarotDeck: this.props.tarotDeck });
    }

    pickACard = () => {
        this.setState({ turned: true });
        
//        let number = Math.floor(Math.random() * 78) + 1;
        
//        return `https://gfx.tarot.com/images/site/decks/${this.state.tarotDeck}/full_size/${number}.jpg`
        
//        this.setState({ card: `https://gfx.tarot.com/images/site/decks/${this.state.tarotDeck}/full_size/${number}.jpg` });
//        let newCard = `https://gfx.tarot.com/images/site/decks/${this.state.tarotDeck}/full_size/${number}.jpg`
//        
//        let newCardReq = `require(${newCard})`;
//        this.setState({ card: newCardReq });
//        return newCardReq;
    }
    
//    setTurnedCard = () => {
//        this.setState({ turnedCard: !this.state.turnedCard });
//    }
    
    
//    setCard = () => {
//        let number = Math.floor(Math.random() * 78) + 1  
//        let newCard = 'https://gfx.tarot.com/images/site/decks/{this.state.tarotDeck}/full_size/{number}.jpg';
//        this.setState({ card: newCard });
//    }
    
    componentDidMount() {
        if(localStorage.getItem('tarotDeck')){ 
            let storedTarotDeck = JSON.parse(localStorage.getItem('tarotDeck'));
            this.setState({ tarotDeck: storedTarotDeck });
        }
    }


  render() {
      
      let showCard = this.state.card;
      
      if(this.state.turned === true){
        let number = Math.floor(Math.random() * 78) + 1;
//        let newCard = `https://gfx.tarot.com/images/site/decks/${this.state.tarotDeck}/full_size/${number}.jpg`;
//        showCard = `require(${newCard})`;
          
      }

      
      { /* let card = tarotCardBack; */ }
      
            
//    let backOfCard = 'cardObject cardObjectOverlay';
//    if(!this.state.turnedCard){ backOfCard += ' visible'; }
    
    return (
        
        <Widget widgetStyling="tarotContainer">

                <Icon icon="planet" />

                    <img src={{uri : 'https://gfx.tarot.com/images/site/decks/rider/full_size/33.jpg' }} />
                    

                <button onClick={() => this.pickACard() } className="btn btn-primary">Pick a card</button>
        
        
        </Widget>


        
    );
  }
}

export default Tarot;
