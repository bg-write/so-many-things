import React, { Component } from "react";
import { Link } from "react-router-dom";

const SebastianThing = (props) => {
    return (
       <>
        <div>
            {props.sebastianThings.map(s =>
                <div>
                    <h2>{s.name}</h2>
                    <img alt="simage" style={{ width: "100px", height: "100px"}} src={`${s.image}`}/>
                    <h3>{s.attributes.map((a) => (
                        <p>{a}</p>
                    ))}</h3>
                </div>
            )}
        </div>
       </>
     );
}

export default SebastianThing;
