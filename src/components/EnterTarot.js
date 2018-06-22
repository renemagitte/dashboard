import React, { Component } from 'react';
import Heading from './Heading'
import Div from './Div'

import tarotCardBack from './../img/tarotCardBack.jpg'
import turningTarot from './../img/turningTarot.gif'
import frontTarot from './../img/frontTarot.png'
import rider1 from './../img/rider/1.jpg'
import rider2 from './../img/rider/2.jpg'
import rider3 from './../img/rider/3.jpg'
import rider4 from './../img/rider/4.jpg'


class Tarot extends Component {
    
    state = {
        tarotDeck: 'rider',
//        card1: false,
//        card2: false,
//        card3: false,
//        card4: false,
//        card5: false,
//        card6: false,
        numberOfCards: 0

    }

    componentDidMount() {
        this.setState({ tarotDeck: this.props.tarotDeck
//                        card1: this.props.tarotDeck + (Math.floor(Math.random() * 4) + 1)
                      });
    }

    pickACard = () => {
        this.setState({ numberOfCards: this.state.numberOfCards + 1 });
    }
    
    generateRandomDigit = () => {
        /* number from 1-78 (4 testing digit) */
        let digit = Math.floor(Math.random() * 4) + 1;
        return digit;
    }
    
//    setCardStatus = () => {
//        this.setState({ tarotDeck: this.props.tarotDeck });
//        
//    }
    



  render() {
      
      
      

//      let card1 = <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />
      let card1 = '';
      let card2 = '';
      let card3 = '';
      let card4 = '';
      let card5 = '';
      let card6 = '';
                                     
    if(this.state.numberOfCards === 1){
          card1 = <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} /> 
      }

    
    return (
        
        <React.Fragment>
            <div className="tarotDarkBg"></div>
            <ion-icon name="exit"></ion-icon>
        
            <div className="tarotGameContainer">
        
                <div className="tarotDeck" onClick={this.pickACard}>
                    Pick a card from the deck:<br/>
                    <img src={tarotCardBack} />
                </div>
        
                <div className="tarotSpread">
//                    <div className="card1"> 
//                        <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} /> 
//                    </div>
                    <div className="card1"> { card1 } </div>
                    <div className="card2"> { card2 } </div>

                    <div className="card3"> { card3 }</div>
                    <div className="card4"> { card4 } </div>
                    <div className="card5"> { card5 } </div>

                    <div className="card6"> { card6 }</div>
                </div>

        
            </div>
        
        </React.Fragment>
        
    );
  }
}

export default Tarot;

//let number = Math.floor(Math.random() * 78) + 1;
