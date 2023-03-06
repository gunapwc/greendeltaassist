import React from "react";
import "./input.scss"

const InputBox = (props) => {
    return(
        <input className="inputbox" placeholder={props.placeholder} type={props.type} name={props.name} defaultValue={props.value} onChange={props.onChange} ></input>
    )
}

export default InputBox;