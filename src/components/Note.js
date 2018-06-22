import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'

class Note extends Component {
    
    state = {
        note: localStorage.getItem('note')
      }
      
    saveNote = (event) => {
        this.setState({ note: event.target.value });
        localStorage.setItem('note', event.target.value);
    }

  render() {

    return (

        <Widget widgetStyling="noteContainer">
        

        
                <Icon icon="paper-plane" />
                <Heading heading="Note" />
 
        
                <textarea id="textarea" value={this.state.note} onChange={this.saveNote} placeholder='Write something here' />
        


        
        </Widget>


        
    );
  }
}

export default Note;
