import React from 'react';

function Div(props) {

    return(  
        
        <div style={props.divStyling}>
                {props.children}
        </div>
        
    )
  
}

export default Div;
