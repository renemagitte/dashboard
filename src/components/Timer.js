import React, { Component } from 'react';

class Timer extends Component {
    
    state = {
        milliseconds: 300000
      }

//      componentDidMount() {
//        setInterval(
//          () => this.setTime(),
//          1000
//        );
//      }
    
      countdown = () => {
        setInterval(
          () => this.magic(),
          1000
        );
      }
      
      magic = () => {
          this.setState({ milliseconds: this.state.milliseconds - 1000 });
      }

  render() {
    
    
    return (
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="innerWidget timerContainer">
                <span className="iconSize">
                    <ion-icon name="timer"></ion-icon>
                </span>
                { this.state.milliseconds }
        
                <button onClick={this.countdown} className="btn btn-primary">Start</button>
            </div>
        
        </div>


        
    );
  }
}

export default Timer;
