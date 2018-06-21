import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'

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
        
        { /* <div className="innerWidget noteContainer"> */ }
        
                <Icon icon="paper-plane" />
               { /* <div className="iconSize">
                    <ion-icon name="paper-plane"></ion-icon>
                </div> */ }
        
                <textarea id="textarea" value={this.state.note} onChange={this.saveNote} placeholder='Write something here' />
        

           { /* </div> */ }
        
        </Widget>


        
    );
  }
}

export default Note;
