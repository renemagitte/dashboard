import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'

class Timer extends Component {
    
        state = {
            milliseconds: 20000,
          }

          countdown = () => {
                setInterval(
                  () => this.setMs(),
                  1000
                );
          }

          setMs = () => {
                this.setState({ milliseconds: this.state.milliseconds - 1000 });
          }
      
          msToTime = (duration) => {
                var milliseconds = parseInt((duration%1000)/100)
                    , seconds = parseInt((duration/1000)%60)
                    , minutes = parseInt((duration/(1000*60))%60)
                    , hours = parseInt((duration/(1000*60*60))%24);

                /* hours = (hours < 10) ? "0" + hours : hours; */
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;

                return /* hours + ":" + */ minutes + ":" + seconds /* + "." + milliseconds */ ;
          }
          

  render() {

    /* Took the easy way out here. The countdown doesn't really stop, but it looks like it: */
    let countdown;
    if(this.state.milliseconds > 0){
        countdown = this.msToTime(this.state.milliseconds);
    }else{
        countdown = '00:00';
    }
    
    
    return (
        <Widget widgetStyling="timerContainer">
        
        
                <Icon icon="timer" />

        
                { countdown }
        
                <button onClick={this.countdown} className="btn btn-primary">Start</button>

        
        </Widget>


        
    );
  }
}

export default Timer;
