import React from 'react'

function Title() {
    return (
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <h3>JobHunt</h3>
            <button style={{height:'5vh',width:'7vw',outline:'none',border:'none',borderRadius:'10px',backgroundColor:'#634FA8',color:'white'}}>Login</button>
        </div>
    )
}

export default Title
