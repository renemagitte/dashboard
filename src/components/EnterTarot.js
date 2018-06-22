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
        card1: false,
        card1img: '',
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false
    }

    componentDidMount() {
        this.setState({ tarotDeck: this.props.tarotDeck });
    }

    pickACard = () => {
        if(!this.state.card1){ 
            this.setState({ card1: !this.state.card1 });
        }else if(!this.state.card2){
            this.setState({ card2: !this.state.card2 });
        }
    }
    
    getRandomCard = () => {
        let number = Math.floor(Math.random() * 4) + 1;
        number = number.toString;
        let newCard = this.state.tarotDeck + number;
        this.setState({ card1img: newCard });
//        return number.toString;
    }
    



  render() {
      
      let card1 = '';
      if(this.state.card1){
          this.getRandomCard();
          let currentCard = this.state.card1img;
          
          
          
//          let randomCard = this.state.tarotDeck + this.getRandomCard();
//          randomCard.toString();
//          console.log(randomCard);
          card1 = <img src={currentCard} />;
      }

    
    return (
        
        <React.Fragment>
            <div className="tarotDarkBg"></div>
            <ion-icon name="exit"></ion-icon>
        
            <div className="tarotGameContainer">
        
                <div className="tarotDeck" onClick={this.pickACard}>
                    <img src={tarotCardBack} />
                </div>
        
                <div className="tarotSpread">
                    <div className="card1"> { card1 } </div>
                    <div className="card2"></div>

                    <div className="card3"></div>
                    <div className="card4"></div>
                    <div className="card5"></div>

                    <div className="card6"></div>
                </div>

        
            </div>
        
        </React.Fragment>
        
    );
  }
}

export default Tarot;

//let number = Math.floor(Math.random() * 78) + 1;
