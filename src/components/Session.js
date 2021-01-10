import React from "react";

function Session(props){
    return (
        <section className="interval-container">
         <button>Down</button>
         <p>{props.session}</p>
         <button>Up</button>
        </section>
    );
}

export default Session;