import React from 'react';

function Div(props) {

    return(  
        
        <div className={'divStandard ' + props.extraDivClass}>
                {props.children}
        </div>
        
    )
  
}

export default Div;
