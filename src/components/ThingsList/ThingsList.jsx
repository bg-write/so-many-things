import React, { Component } from "react";
import { Link } from "react-router-dom";

const ThingsList = (props) => {
    return (
       <>
        <div>
            {props.erikaThings.map(t =>
                <div>
                    <h2>{t.name}</h2>
                    <h3>{t.attributes.map((a) => (
                        <p>{a}</p>
                    ))}</h3>
                    <img style={{ width: "200px", height: "200px"}} src={`${t.image}`} alt="#"/>
                </div>
            )}
        </div>
       </>
     );
}

export default ThingsList;
