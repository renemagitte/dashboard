import React, { Component } from 'react';

class Tarot extends Component {
    
    state = {
        theme: 'defaultTheme',
        toggleSettings: true
    }

  render() {
    
    return (
        
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
            <div className="cartoonContainer">
                Tarot tarot
            </div>
        
        </div>


        
    );
  }
}

export default Tarot;
