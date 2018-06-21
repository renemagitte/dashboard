import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'

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
        <Widget widgetStyling="clockContainer">
            <Icon icon="time" />
  
        
                { this.state.time.toLocaleTimeString()}
        
        </Widget>


        
    );
  }
}

export default Clock;
