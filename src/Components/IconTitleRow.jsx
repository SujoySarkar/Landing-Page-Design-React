import React from 'react'

function IconTitleRow(props) {
    return (
        <div style={{display:'flex',alignItems:'center'}}>
           {props.icon} 
           <div style={{width:'5px'}}></div>
           <p style={{fontSize:'12px',color:'grey'}}>{props.title}</p>
        </div>
    )
}

export default IconTitleRow
