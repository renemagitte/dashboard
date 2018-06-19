import React, { Component } from 'react';
import tarotCardBack from './../img/tarotCardBack.jpg'

class Tarot extends Component {
    
    state = {
        tarotDeck: 'rider',
        turnedCard: false  
    }

//    componentDidMount() {
//        this.setState({ tarotDeck: this.props.tarotDeck });
//    }

    pickACard = () => {
        let number = Math.floor(Math.random() * 78) + 1  
        return `https://gfx.tarot.com/images/site/decks/${this.state.tarotDeck}/full_size/${number}.jpg`
    }
    
    setTurnedCard = () => {
        this.setState({ turnedCard: !this.state.turnedCard });
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
                <div className={backOfCard} onClick={() => this.setTurnedCard}>
                    <img src={tarotCardBack} />
                </div>
                <div className="cardObject" onClick={() => this.pickACard}>
                    <img src={this.pickACard()} />
                </div>
        
            </div>
        
        </div>


        
    );
  }
}

export default Tarot;
