import React from 'react'


const validation = (props)=>{
    let message = "Text long enough"
    if (props.inputLength <=5 ){
        message = "Text too short"
    }
    return (
        <div>
            <p>{message}</p>
        </div>
        
    )
};

export default validation;