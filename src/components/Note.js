import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'
import Div from './Div'

class Note extends Component {
    
    state = {
        note: localStorage.getItem('note'),
      }
      
    saveNote = (event) => {
        this.setState({ note: event.target.value });
        localStorage.setItem('note', event.target.value);
    }

  render() {

    return (

        <Widget widgetStyling="noteContainer">
        

                <Div>
                <Icon icon="paper-plane" /></Div>
                <Div><Heading heading="Note" /></Div>
 
                <Div extraDivClass="height100">
                    <textarea className={this.props.handwriting} id="textarea" value={this.state.note} onChange={this.saveNote} placeholder='Write something here' />
                </Div>
        


        
        </Widget>


        
    );
  }
}

export default Note;
