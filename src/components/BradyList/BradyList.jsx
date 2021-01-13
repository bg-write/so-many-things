import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BradyList = (props) => {
	return (
		<>
			<div>
				{props.bradyThings.map((t) => (
					<div>
						<h2>{t.name}</h2>
						{/* <h3>{t.attributes.map}</h3> */}
						{/* {t.image} */}
					</div>
				))}
			</div>
		</>
	);
};

export default BradyList;
