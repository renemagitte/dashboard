import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import cartoon from './../img/cartoon.png'

class Cartoon extends Component {
    
    state = {
        theme: 'defaultTheme',
        toggleSettings: true
    }

  render() {
    
    return (
        
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
            <div className="innerWidget cartoonContainer">
                Ok, so this is ur dashboard.<br/>
                <img src={cartoon} alt="The cartoon Krösus Sork that one might recognize from previous incremental game task" />
            </div>
        
        </div>


        
    );
  }
}

export default Cartoon;
