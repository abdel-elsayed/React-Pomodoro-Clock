import React from 'react'

function Break(props){

    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container">
            <button>Down</button>
            <p className="interval-text">{props.break}</p>    
            <button>Up</button>
            </section>
        </section>
     
    );
}

export default Break;