import React from "react";

const Cell = (props) => {
    return(
        <td className = {'img ' + props.description + props.url + props.name} style = {{
            verticalAlign: 'middle',
            textAlign: 'center',
            padding:'20px',
            height: '400px',
            }}>
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                border: '0px',
                height: '100%',
                width: '250px', 
                textAlign: 'center',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px'
            }}>
            
            <div style={{
                    background: `url(${props.img}) center center / cover no-repeat`,
                    width: '100%',
                    height: '70%', 
                }}></div>

                <h2 style={{ color: 'black', margin: '5px' }}>{props.name}</h2>
                <p style={{ color: 'black', margin: '0px' }}>{props.description}</p>
                <a href={props.url} target="_blank">
                    <button style={{margin: '20px'}}>View Menu</button>
                </a>
            </div>
        </td>
    )
}

export default Cell;