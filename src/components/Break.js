import React from 'react'

function Break(props){
    function decreaseCounter(){
        if (props.break ===1){
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter(){
        if (props.break ===60){
            return;
        }
        props.increaseBreak();
        
    }
    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container">
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
            <p className="interval-text">{props.break}</p>    
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
            </section>
        </section>
     
    );
}

export default Break;