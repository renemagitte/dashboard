import React, { Component } from 'react';

class Clock extends Component {
    
    state = {
        time: new Date()
      }

  render() {
    
    return (
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="clockContainer">
                <ion-icon name="time"></ion-icon>
                { this.state.time.toLocaleTimeString()}
        
            </div>
        
        </div>


        
    );
  }
}

export default Clock;
