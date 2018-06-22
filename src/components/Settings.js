import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'
import Div from './Div'

class Note extends Component {
    
    state = {
        handwriting: ''
      }
      


  render() {

    return (

        <React.Fragment>
            <div className="tarotDarkBg"></div>
            
            <div className="settingsContainer">
        
                <Div>
                    <h1>Settings:</h1>
                </Div>
        
                <Div>
        
        <form>
          <input type="radio" name="gender" value="male" checked /> Male
          <input type="radio" 
                    name="handwriting" 
                    value="hej"
                    onChange={this.props.setHandwriting} 
        /> Hej
          <input type="radio" name="gender" value="other" className="input-group mb-3" /> Other
        </form>
        
        
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                    </div>

                </Div>
        
                    <Div>
                
                        <div className="btn-group">
                          <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose theme
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={() => this.props.setTheme('defaultTheme')}>Default Theme</a>
                            <a className="dropdown-item" onClick={() => this.props.setTheme('incrementalGameTheme')}>R.I.P. Incremental Game Theme</a>
                          </div>
                        </div>

                    </Div>

                    <Div>
                                
                        <div className="btn-group">
                          <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose tarot deck
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={() => this.props.setTarotDeck('rider')}>Rider Waite (Classic)</a>
                            <a className="dropdown-item" onClick={() => this.props.setTarotDeck('cats-eye')}>Cat's eye</a>
                            <a className="dropdown-item" onClick={() => this.props.setTarotDeck('gummybear')}>Gummy Bear</a>

                          </div>
                        </div>
                        Refresh page to get the new tarot deck.
                    </Div>

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

export default Note;
