import React, { Component } from 'react';

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
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="innerWidget noteContainer">
                <div className="iconSize">
                    <ion-icon name="paper-plane"></ion-icon>
                </div>
        
                <textarea id="textarea" value={this.state.note} onChange={this.saveNote} placeholder='Write something here' />
        

            </div>
        
        </div>


        
    );
  }
}

export default Note;
