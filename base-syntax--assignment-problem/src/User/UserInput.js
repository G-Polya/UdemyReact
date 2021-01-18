import React from 'react'
import './User.css'
const UserInput = (props)=>{
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changed} />
        </div>
        
    )
};

export default UserInput;