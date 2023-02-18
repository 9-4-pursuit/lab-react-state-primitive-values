import React from "react";
import "./App.css";

const Switch = ({ isOn, handleToggle }) => {
    return (
        <>
        <input
        checked={isOn}
        onClick = { handleToggle }
        className = "start-over-checkbox"
        id = {`start-over-new`}
        type="button"
        />
        
        <label 
            className="start-over-label"
            htmlFor={ `start-over-new`}
        >
            <span className={`start-over-button`} />
        </label>      
        </>
    );
};

export default Switch;