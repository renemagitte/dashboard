import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'
import Div from './Div'

import rider3 from './../img/rider/3.jpg'
import gummybear3 from './../img/gummybear/3.jpg'
import catseye3 from './../img/catseye/3.jpg'

class Note extends Component {
    
  render() {

    return (

        <React.Fragment>
            <div className="tarotDarkBg"></div>
            
            <div className="settingsContainer">
        
                <Div>
                    <h1>Settings:</h1>
                </Div>
        
                <Div>
                    <Div>
                        <Div extraDivClass="settingsTitle">
                            Choose theme:
                        </Div>
                        <Div extraDivClass="standardFlex">
                            <Div extraDivClass="divWidth33percent">
                                <input type="radio" name="theme" value="defaultTheme" onChange={this.props.setSettings} />
                                <span className="justSomeSpace">Default Theme</span>
                            </Div>
                            <Div extraDivClass="divWidth33percent">
                                <input type="radio" name="theme" value="incrementalGameTheme" onChange={this.props.setSettings} />
                                <span className="justSomeSpace">R.I.P. Incremental Game Theme</span>
                            </Div>
                            <Div extraDivClass="divWidth33percent">
                            </Div>

                        </Div>
        

                    </Div>
                </Div> 
        
                <Div>
                    <Div>
                        <Div extraDivClass="settingsTitle">
                            Choose handwriting:
                        </Div>
                        <Div extraDivClass="standardFlex">
                            <Div extraDivClass="divWidth33percent">
                                <input type="radio" name="handwriting" value="gaegu" onChange={this.props.setSettings} />
                                <span className="gaegu justSomeSpace">Childish</span>
                            </Div>
                            <Div extraDivClass="divWidth33percent">
                                <input type="radio" name="handwriting" value="reeniebeanie" onChange={this.props.setSettings} />
                                <span className="reeniebeanie justSomeSpace">Looks like mine</span>
                            </Div>
                            <Div extraDivClass="divWidth33percent">
                            </Div>

                        </Div>
        

                    </Div>
                </Div> 
        
        
                <Div>
                    <Div>
                        <Div extraDivClass="settingsTitle">
                            Choose tarot card deck:
                        </Div>
                        <Div extraDivClass="standardFlex">
                            <Div extraDivClass="divWidth33percent settingsTarotImg">
                                <input type="radio" name="tarotDeck" value="rider" onChange={this.props.setSettings} />
                                <span className="justSomeSpace">Rider Waite (Classic)</span><br/>
                                <img src={rider3} /> 
                            </Div>
      
      { /*
                            <Div extraDivClass="divWidth33percent settingsTarotImg">
                                <input type="radio" name="tarotDeck" value="cats-eye" onChange={this.props.setSettings} />
                                <span className="justSomeSpace">Cat's eye</span><br/>
                                <img src={catseye3} /> 
                            </Div>
        */ }
                            <Div extraDivClass="divWidth33percent settingsTarotImg">
                                <input type="radio" name="tarotDeck" value="gummybear" onChange={this.props.setSettings} />
                                <span className="justSomeSpace">Gummybear</span><br/>
                                <img src={gummybear3} /> 
                            </Div>
                        </Div>
 

                    </Div>

                </Div> 
        
      { /*
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
            */ }
                  
        
{ /*
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
      */ }

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
