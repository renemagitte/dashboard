import React, { Component } from 'react';

class Clock extends Component {
    
    state = {
        time: new Date()
      }

      componentDidMount() {
        setInterval(
          () => this.setTime(),
          1000
        );
      }
    
      setTime = () => {
        this.setState({ time: new Date() });
      }

  render() {
    
    return (
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="innerWidget clockContainer">
                <div className="iconSize">
                    <ion-icon name="time"></ion-icon>
                </div>
                { this.state.time.toLocaleTimeString()}
            </div>
        
        </div>


        
    );
  }
}

export default Clock;
