import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Footer = (props) => {
	return (
		<div className="footer-container">
			<span>{props.title}</span>
		</div>
	);
};

Footer.propTypes = {
	title: PropTypes.string,
};
