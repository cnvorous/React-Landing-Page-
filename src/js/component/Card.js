import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Card = (props) => {
	return (
		<div className="cards-container">
			<div className="card m-5">
				<img
					className="card-img-top"
					src={props.imageURL}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageURL: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};
