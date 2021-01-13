import React, { Component } from "react";
import { Link } from "react-router-dom";

const ThingsList = (props) => {
    return (
       <>
        <div>
            {props.erikaThings.map(t =>
                <div>
                    <h2>{t.name}</h2>
                    {/* <h3>{t.attributes.map}</h3> */}
                    {/* {t.image} */}
                </div>
            )}
        </div>
       </>
     );
}

export default ThingsList;
