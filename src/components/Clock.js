import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'

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
            <Heading heading="Clock" />
  
        
                <span className="textBig">{ this.state.time.toLocaleTimeString()}</span>
        
        </Widget>


        
    );
  }
}

export default Clock;
