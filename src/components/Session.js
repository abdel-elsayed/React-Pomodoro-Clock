import React from "react";

function Session(props){
    function decreaseSession(){
        if(props.session === 1){
            return;
        } 
        props.decreaseSession();
    }

    function increaseSession(){
        if(props.session === 60){
            return;
        }
        props.increaseSession();
    }
    return (
        <section>
        <h4>Session Length</h4>
            <section className="interval-container">
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick = {decreaseSession}>Down</button>
            <p className="interval-text">{props.session}</p>
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick = {increaseSession}>Up</button>
            </section>
        </section>    
    );
}

export default Session;