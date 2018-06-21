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
      
      convertMilliseconds = () => {

            var day, hour, minute, seconds;
            seconds = Math.floor(this.state.milliseconds / 1000);
            minute = Math.floor(seconds / 60);
            seconds = seconds % 60;
            hour = Math.floor(minute / 60);
            minute = minute % 60;
            day = Math.floor(hour / 24);
            hour = hour % 24;
            return [
                day: day,
                hour: hour,
                minute: minute,
                seconds: seconds
            ];
        }
      
      
    msToTime = (duration) => {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

//        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return /* hours + ":" + */ minutes + ":" + seconds /* + "." + milliseconds */ ;
    }
          

  render() {

    let hej = this.convertMilliseconds();
      
    
    
    return (
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="innerWidget timerContainer">
                <div className="iconSize">
                    <ion-icon name="timer"></ion-icon>
                </div>
                { this.msToTime(this.state.milliseconds) }
        
                <button onClick={this.countdown} className="btn btn-primary">Start</button>
            </div>
        
        </div>


        
    );
  }
}

export default Timer;
