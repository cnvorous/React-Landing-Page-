import React from "react";

// import all your components here ****
import { Navbar } from "../component/Navbar";
import { Jumbotron } from "../component/Jumbotron";
import { Card } from "../component/Card";
import { Footer } from "../component/Footer";

//include images into your bundle
//import {4Geeks} from "../../img/4Geeks.jpg";

//create your first component
export const Home = () => {
	return (
		<div className="main-container">
			<Navbar
				title="Start Bootstrap"
				description1="Home"
				description2="About"
				description3="Services"
				description4="Contact"
			/>
			<div className="main-body">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					buttonLabel="Call to action!"
					buttonURL="https://reactjs.org/"
				/>
				<div className="cards-row d-flex">
					<Card
						imageURL="https://pbs.twimg.com/profile_images/1410575327676481539/0PORuOnG_400x400.jpg"
						title="4 Geeks Coding Journey"
						description="Check out 4 Geeks Full-Stack Developer page and start your coding journey today.  Taking your first step is half the battle."
						buttonLabel="Check Us Out!"
						buttonURL="https://4geeksacademy.com/"
					/>
					<Card
						imageURL="https://pbs.twimg.com/profile_images/1410575327676481539/0PORuOnG_400x400.jpg"
						title="4 Geeks Coding Journey"
						description="Check out 4 Geeks Full-Stack Developer page and start your coding journey today.  Taking your first step is half the battle."
						buttonLabel="Check Us Out!"
						buttonURL="https://4geeksacademy.com/"
					/>
					<Card
						imageURL="https://pbs.twimg.com/profile_images/1410575327676481539/0PORuOnG_400x400.jpg"
						title="4 Geeks Coding Journey"
						description="Check out 4 Geeks Full-Stack Developer page and start your coding journey today.  Taking your first step is half the battle."
						buttonLabel="Check Us Out!"
						buttonURL="https://4geeksacademy.com/"
					/>
					<Card
						imageURL="https://pbs.twimg.com/profile_images/1410575327676481539/0PORuOnG_400x400.jpg"
						title="4 Geeks Coding Journey"
						description="Check out 4 Geeks Full-Stack Developer page and start your coding journey today.  Taking your first step is half the battle."
						buttonLabel="Check Us Out!"
						buttonURL="https://4geeksacademy.com/"
					/>
				</div>
			</div>
			<Footer title="Copyright Your Website 2019" />
		</div>
	);
};
