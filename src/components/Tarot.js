import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
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
        startCard: tarotCardBack,
        cardTurns: 0,
        number: 1,
        setCard: this.startCard
    }

    componentDidMount() {
        this.setState({ tarotDeck: this.props.tarotDeck });
    }


    pickACard = () => {
        this.setState({ cardTurns: this.state.cardTurns + 1 });
        
        let number = Math.floor(Math.random() * 4) + 1;
        
        let newCard = this.state.tarotDeck + number;
        
        
        this.setState({ setCard: newCard });

        
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
    
    setCardTurns = () => {
        this.setState({ cardTurns: this.state.cardTurns + 1 });

    }
    
    
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
      
    
      
      let showCard;
      if(this.state.cardTurns === 0){
          showCard = <img src={tarotCardBack} />
      }else{
        showCard = <img src={this.state.setCard} />
      }      
      
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
                <Heading heading="Tarot" />
                <Div extraDivClass="frontTarot">
                    <img src={frontTarot} />
                </Div>
                    

                <button onClick={this.pickACard} className="btn btn-primary">Cosmic insights</button>
        
        
        </Widget>


        
    );
  }
}

export default Tarot;

//<img src={{uri : 'https://gfx.tarot.com/images/site/decks/rider/full_size/33.jpg' }} />

//                  'http://download.spinetix.com/content/widgets/icons/weather/' + props['currentState'][city + 'Data']['icon'] + '.png'

//                    <img
//                      src={
//                    'https://gfx.tarot.com/images/site/decks/rider/full_size/' + 33 + 'jpg'
//        
//  
//                        }
//                      className='smallWeatherIcon'
//                      alt='weather icon'
//                    />
