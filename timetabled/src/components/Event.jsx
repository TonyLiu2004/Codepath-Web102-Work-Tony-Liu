import React from "react";

const Event = (props) => {
    return (
        <>
        <td className = {'Event ' + props.color + props.location}>
            <div style= {{
                backgroundColor: props.color,   
                padding: '5px 0',
                margin: '0',
                }}>
                <h5> {props.event} 
                     <br></br> 
                     <p style={{fontSize: '12px'}}>{props.location} </p>
                </h5>
            </div>

        </td>
        </>
    )
}

export default Event;