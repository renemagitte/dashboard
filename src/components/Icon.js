import React from 'react';

function Icon(props) {

    return(  
        
        <div className="iconSize">
            <ion-icon name={props.icon}></ion-icon>
        </div>
        
    )
  
}

export default Icon;
