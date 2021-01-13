import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BradyList = (props) => {
	return (
		<>
			<div>
				{props.bradyThings.map((t) => (
					<div>
						<h2>{t.name}</h2>
						<h3>{t.attributes.map((a) => (
							<p>{a}</p>
						))}</h3>
						     <img style={{ width: "200px", height: "200px"}} src={`${t.image}`} alt="#"/>
					</div>
				))}
			</div>
		</>
	);
};

export default BradyList;
