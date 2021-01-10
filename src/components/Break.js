import React from 'react'

function Break(props){

    return (
        <section className="interval-container">
            <button>Down</button>
            <p>{props.break}</p>    
            <button>Up</button>
        </section>
    );
}

export default Break;