import React from 'react';

function Widget(props) {

    return(  
        
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
            <div className={'innerWidget ' + props.widgetStyling} id={props.widgetStyling}>
                {props.children}
            </div>
        </div>
        
    )
  
}

export default Widget;
