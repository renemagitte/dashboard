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
        card1img: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        numberOfCards: 0

    }

    componentDidMount() {
        this.setState({  tarotDeck: this.props.tarotDeck,
                    card1img: <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />,
                    card2: <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} /> 
                      });
    }

    pickACard = () => {
        this.setState({ numberOfCards: this.state.numberOfCards + 1
//                       card1: <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />,
                      
                      
                      });
    }
    
    generateRandomDigit = () => {
        /* number from 1-78 (4 testing digit) */
        let digit = Math.floor(Math.random() * 4) + 1;
        return digit;
    }
    
    setCardStatus = (event) => {
        this.setState({ [event.target.name]: true });  
    }
    



  render() {
      
      
      

//      let card1 = <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />
      let card1 = <img src={tarotCardBack} name="card1" onClick={this.setCardStatus} />;
      let card2 = <img src={tarotCardBack} name="card2" onClick={this.setCardStatus} />;
      let card3 = <img src={tarotCardBack} />;
      let card4 = <img src={tarotCardBack} />;
      let card5 = <img src={tarotCardBack} />;
      let card6 = <img src={tarotCardBack} />;
                                     
    if(this.state.numberOfCards === 0){
//          card1 = <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />
            card1 = this.state.card1img;
      }
//      else if(this.state.numberOfCards === 2){
////        card2 = <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} /> 
//          card2 = this.state.card2;
//    }

    
    return (
        
        <React.Fragment>
            <div className="tarotDarkBg"></div>
            <ion-icon name="exit"></ion-icon>
        
            <div className="tarotGameContainer">
        
                <div className="tarotSpread">

                    <div className="tarotSpreadSub standardFlex card1"> { card1 } </div>
                    <div className="tarotSpreadSub standardFlex card2"> { card2 } </div>

                    <div className="tarotSpreadSub standardFlex card3"> { card3 }</div>
                    <div className="tarotSpreadSub standardFlex card4"> { card4 } </div>
                    <div className="tarotSpreadSub standardFlex card5"> { card5 } </div>

                    <div className="tarotSpreadSub standardFlex card6"> { card6 }</div>
                </div>
        
                    <Div extraDivClass="popUpExit">
                        <button className="btn btn-success btn-lg" onClick={this.props.handleToggle}>
                            Done <ion-icon name="exit"></ion-icon>
                        </button>
                    </Div>

        
            </div>
        
        </React.Fragment>
        
    );
  }
}

export default Tarot;

//let number = Math.floor(Math.random() * 78) + 1;
