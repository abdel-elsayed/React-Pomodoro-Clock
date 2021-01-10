import React from "react";

function Session(props){
    return (
        <section>
        <h4>Session Length</h4>
            <section className="interval-container">
            <button>Down</button>
            <p className="interval-text">{props.session}</p>
            <button>Up</button>
            </section>
        </section>    
    );
}

export default Session;