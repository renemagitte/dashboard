import React, { Component } from 'react';
import tarotCardBack from './../img/tarotCardBack.jpg'

class Tarot extends Component {
    
    state = {
        tarotDeck: 'rider',
        card: tarotCardBack
        
    }

//    componentDidMount() {
//        this.setState({ tarotDeck: this.props.tarotDeck });
//    }

    pickACard = () => {
        let number = Math.floor(Math.random() * 78) + 1  
        return `https://gfx.tarot.com/images/site/decks/${this.state.tarotDeck}/full_size/${number}.jpg`
    }
    
//    setTurnedCard = () => {
//        this.setState({ turnedCard: !this.state.turnedCard });
//    }
    
    
    setCard = () => {
        let number = Math.floor(Math.random() * 78) + 1  
        let newCard = 'https://gfx.tarot.com/images/site/decks/{this.state.tarotDeck}/full_size/{number}.jpg';
        this.setState({ card: newCard });
    }
    
    componentDidMount() {
        if(localStorage.getItem('tarotDeck')){ 
            let storedTarotDeck = JSON.parse(localStorage.getItem('tarotDeck'));
            this.setState({ tarotDeck: storedTarotDeck });
        }
    }


  render() {
      
      { /* let card = tarotCardBack; */ }
      
            
    let backOfCard = 'cardObject cardObjectOverlay';
    if(!this.state.turnedCard){ backOfCard += ' visible'; }
    
    return (
        
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
            <div className="innerWidget cartoonContainer">
                <div className="iconSize">
                    <ion-icon name="planet"></ion-icon>
                </div>

                <div className="cardObject" onClick={() => this.componentDidMount}>
                    
                    <img src={this.state.card} onClick={() => this.componentDidMount} />
                </div>
        
            </div>
        
        </div>


        
    );
  }
}

export default Tarot;
