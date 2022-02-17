import React from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg text-white bg-dark">
			<a className="navbar-brand" href="#">
				{props.title}
			</a>
			<div
				className="collapse navbar-collapse d-flex justify-content-end"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							{props.description1}
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.description2}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.description3}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							{props.description4}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description1: PropTypes.string,
	description2: PropTypes.string,
	description3: PropTypes.string,
	description4: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};
