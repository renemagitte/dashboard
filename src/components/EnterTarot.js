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
        card2img: false,
        card3: false,
        card3img: false,
        card4: false,
        card4img: false,
        card5: false,
        card5img: false,
        card6: false,
        card6img: false
    }

    componentDidMount() {
        this.setState({  
                    card1img: <img src={require(`./../img/${this.props.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />,
                    card2img: <img src={require(`./../img/${this.props.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />,
                    card3img: <img src={require(`./../img/${this.props.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />, 
                    card4img: <img src={require(`./../img/${this.props.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />, 
                    card5img: <img src={require(`./../img/${this.props.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />, 
                    card6img: <img src={require(`./../img/${this.props.tarotDeck}/${this.generateRandomDigit()}.jpg`)} /> 
                      });
    }

    pickACard = () => {
        this.setState({ numberOfCards: this.state.numberOfCards + 1
//                       card1: <img src={require(`./../img/${this.state.tarotDeck}/${this.generateRandomDigit()}.jpg`)} />,
                      
                      
                      });
    }
    
    generateRandomDigit = () => {
        /* number from 1-78 (4 testing digit) */
        let digit = Math.floor(Math.random() * 78) + 1;
        return digit;
    }
    
    setCardStatus = (card) => {
        this.setState({ [card]: !this.state.card });  
    }
    



  render() {
      
      let card1;
      if(!this.state.card1){
          card1 = <img src={tarotCardBack} onClick={ () => this.setCardStatus('card1') } />;  
      }else if(this.state.card1){
         card1 = this.state.card1img; 
      }
      
      let card2;
      if(!this.state.card2){
          card2 = <img src={tarotCardBack} onClick={ () => this.setCardStatus('card2') } />;  
      }else if(this.state.card2){
         card2 = this.state.card2img; 
      }
      
      let card3;
      if(!this.state.card3){
          card3 = <img src={tarotCardBack} onClick={ () => this.setCardStatus('card3') } />;  
      }else if(this.state.card3){
         card3 = this.state.card3img; 
      }
      
      let card4;
      if(!this.state.card4){
          card4 = <img src={tarotCardBack} onClick={ () => this.setCardStatus('card4') } />;  
      }else if(this.state.card4){
         card4 = this.state.card4img; 
      }
      
      let card5;
      if(!this.state.card5){
          card5 = <img src={tarotCardBack} onClick={ () => this.setCardStatus('card5') } />;  
      }else if(this.state.card5){
         card5 = this.state.card5img; 
      }
      
      let card6;
      if(!this.state.card6){
          card6 = <img src={tarotCardBack} onClick={ () => this.setCardStatus('card6') } />;  
      }else if(this.state.card6){
         card6 = this.state.card6img; 
      }
      

      
      
      





    
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
                        <button className="btn btn-success btn-lg" onClick={this.props.handleTarotToggle}>
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
